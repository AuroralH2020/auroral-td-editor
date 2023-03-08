import { Component, Inject, OnInit } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { DataService } from '@core/models/data-service.model'
import { Item } from '@core/models/item.model'
import { Monitor, Property, Event } from '@core/models/monitor.model'
import { Subscription, SubscriptionCreate } from '@core/models/subscription.model'
import { DataServiceService } from '@core/services/data-service/data-service.service'
import {
  isEvent,
  isPropery,
  isEventSubscription,
  isProperySubscription,
  stringSortListOfObjects,
  deepEqual,
} from 'src/app/utils'
import { SnackBarService } from '@core/services/snack-bar/snack-bar.service'
import { FormControl, FormGroup } from '@angular/forms'
import { Router } from '@angular/router'

interface DialogData {
  detail: Item
  dataServices: DataService[]
}

@Component({
  selector: 'app-item-manage-subscriptions',
  templateUrl: './item-manage-subscriptions.component.html',
  styleUrls: ['./item-manage-subscriptions.component.scss'],
})
export class ItemManageSubscriptionsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'type', 'service', 'selected']
  dataSource: Monitor[] = []

  loading: boolean = false

  private _initialSubscriptions: SubscriptionCreate[] = []
  private _selectedSubscriptions: SubscriptionCreate[] = []

  selectedDataServices = new Map<string, DataService | undefined>()

  constructor(
    private _dataService: DataServiceService,
    private _snackbar: SnackBarService,
    private _router: Router,
    public dialogRef: MatDialogRef<ItemManageSubscriptionsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  private _sortDataSource() {
    stringSortListOfObjects(this.dataSource, 'name')
  }

  private _initDataSources() {
    this.dataSource = [...(this.data.detail.properties ?? []), ...(this.data.detail.events ?? [])]
    this._sortDataSource()
  }

  private _initOneSubscription(subscription: Subscription) {
    this._initialSubscriptions.push(_convertSubscription(subscription))
    this._selectedSubscriptions.push(_convertSubscription(subscription))
  }

  private _initSelectedSubscriptions() {
    this.data.detail.propertySubscriptions?.forEach((element) => {
      this._initOneSubscription(element)
    })
    this.data.detail.eventSubscriptions?.forEach((element) => {
      this._initOneSubscription(element)
    })
  }

  private _initDataServices() {
    this.dataSource.forEach((element) => {
      const id = _getMonitorId(element as Property | Event)
      if (id) {
        const subscription = this._selectedSubscriptions.find((element) => element.iid == id)
        this.selectedDataServices.set(id, subscription?.service)
      }
    })
  }

  ngOnInit(): void {
    this._initDataSources()
    this._initSelectedSubscriptions()
    this._initDataServices()
  }

  private _addSubscriptionToSelection(monitor: Property | Event) {
    const id = _getMonitorId(monitor)
    const type = _type(monitor)
    const dataService = this.selectedDataServices.get(id ?? '')
    if (!id || type === 'Unknown type' || !dataService) {
      return
    }
    this._selectedSubscriptions.push({
      dsid: undefined,
      oid: this.data.detail.oid,
      iid: id,
      type: type === 'Property' ? 'read' : 'event',
      service: dataService,
    })
  }

  private _resetDataService(monitor: Property | Event) {
    const id = _getMonitorId(monitor)
    if (id) {
      this.selectedDataServices.set(id, undefined)
    }
  }

  private _removeSubscriptionFromSelection(monitor: Property | Event) {
    const index = this._selectedSubscriptions.findIndex((element) => {
      return element.iid === _getMonitorId(monitor)
    })
    if (index > -1) {
      this._selectedSubscriptions.splice(index, 1)
      this._resetDataService(monitor)
    }
  }

  private _candidateForAdd(subscription: SubscriptionCreate): boolean {
    for (let initial of this._initialSubscriptions) {
      if (deepEqual(subscription, initial)) {
        return false
      }
    }
    return true
  }

  private _canditateForRemove(subscription: SubscriptionCreate): boolean {
    for (let selected of this._selectedSubscriptions) {
      if (deepEqual(subscription, selected)) {
        return false
      }
    }
    return true
  }

  private _addLocal(subscription: Subscription) {
    if (isProperySubscription(subscription)) {
      this.data.detail.propertySubscriptions.push(subscription)
    } else if (isEventSubscription(subscription)) {
      this.data.detail.eventSubscriptions.push(subscription)
    }
  }

  private _removeLocal(subscription: SubscriptionCreate) {
    function remove(array: Subscription[]) {
      const index = array.findIndex((element) => {
        return element.dsid === subscription.dsid
      })
      if (index > -1) {
        array.splice(index, 1)
      }
    }
    if (isProperySubscription(subscription)) {
      remove(this.data.detail.propertySubscriptions)
    } else if (isEventSubscription(subscription)) {
      remove(this.data.detail.eventSubscriptions)
    }
  }

  private async _addCandidates() {
    for (let selected of this._selectedSubscriptions) {
      if (this._candidateForAdd(selected)) {
        await this._dataService.createSubscription(selected).then((subscription) => {
          this._addLocal(subscription)
        })
      }
    }
  }

  private async _removeCandidates() {
    for (let initial of this._initialSubscriptions) {
      if (this._canditateForRemove(initial)) {
        await this._dataService.deleteSubscription(initial).then(() => {
          this._removeLocal(initial)
        })
      }
    }
  }

  private _selectDataService(monitor: Property | Event) {
    if (!this.isSelected(monitor)) {
      this.toggle(monitor)
    }
    const id = _getMonitorId(monitor)
    if (id) {
      var subscription = this._selectedSubscriptions.find((element) => element.iid === id)
      const dataService = this.selectedDataServices.get(id)
      if (subscription && dataService) {
        subscription.service = dataService
      }
    }
  }

  async saveChanges() {
    if (this.changesDetected) {
      this.loading = true
      try {
        await this._addCandidates()
        await this._removeCandidates()
        this.loading = false
        this.close()
        this._snackbar.showMessage('Subscriptions updated.')
      } catch (error) {
        console.error(error)
        this.loading = false
      }
    }
  }

  close(): void {
    this.dialogRef.close()
  }

  type(monitor: Property | Event): string {
    return _type(monitor)
  }

  isSelected(monitor: Property | Event): boolean {
    const id = _getMonitorId(monitor)
    if (id === null) return false

    // Check if element with monitor id exists in selected subscriptions
    return this._selectedSubscriptions.some((element) => element.iid === id)
  }

  toggle(monitor: Property | Event) {
    if (this.isSelected(monitor)) {
      this._removeSubscriptionFromSelection(monitor)
    } else {
      this._addSubscriptionToSelection(monitor)
    }
  }

  changeSelectedDataService(monitor: Property | Event, dataService: DataService) {
    const id = _getMonitorId(monitor)
    if (id === null) return
    const ds = this.selectedDataServices.get(id)
    if (!ds || ds !== dataService) {
      this.selectedDataServices.set(id, dataService)
      this._selectDataService(monitor)
    }
  }

  getMonitorId(monitor: Property | Event): string | null {
    return _getMonitorId(monitor)
  }

  getSelectedDataService(monitor: Property | Event): DataService | null | undefined {
    const id = _getMonitorId(monitor)
    return this.selectedDataServices.get(id ?? '')
  }

  hasDataServiceSelected(monitor: Property | Event): boolean {
    const id = _getMonitorId(monitor)
    const ds = this.selectedDataServices.get(id ?? '')
    return ds === undefined || ds === null ? false : true
  }

  goToDataServices() {
    this.close()
    this._router.navigate(['/home/sections/data-services'])
  }

  get changesDetected(): boolean {
    return !deepEqual(this._initialSubscriptions, this._selectedSubscriptions)
  }
}

function _convertSubscription(subscription: Subscription): SubscriptionCreate {
  return {
    dsid: subscription.dsid,
    oid: subscription.oid,
    iid: subscription.iid,
    type: subscription.type,
    service: subscription.service,
  }
}

function _type(monitor: Property | Event): string {
  if (isPropery(monitor)) return 'Property'
  else if (isEvent(monitor)) return 'Event'
  else return 'Unknown type'
}

function _getMonitorId(monitor: Property | Event): string | null {
  return isPropery(monitor) ? monitor.pid : isEvent(monitor) ? monitor.eid : null
}