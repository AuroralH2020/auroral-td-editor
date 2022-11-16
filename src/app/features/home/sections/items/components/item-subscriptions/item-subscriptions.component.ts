import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { Item } from '@core/models/item.model'
import { Subscription } from '@core/models/subscription.model'
import { DataServiceService } from '@core/services/data-service/data-service.service'
import { ItemManageSubscriptionsComponent } from '../../item-manage-subscriptions/item-manage-subscriptions.component'

type SubscriptionType = 'all' | 'properties' | 'events'

@Component({
  selector: 'app-item-subscriptions',
  templateUrl: './item-subscriptions.component.html',
  styleUrls: ['./item-subscriptions.component.scss'],
})
export class ItemSubscriptionsComponent implements OnInit {
  @Input() detail!: Item
  @Input() subscriptionType: SubscriptionType = 'all'

  dataSource!: Subscription[]

  // displayedColumns: string[] = ['name', 'type', 'service', 'created', 'lastUpdated']
  displayedColumns: string[] = ['name', 'type', 'service']

  loading: boolean = false

  constructor(private _dialog: MatDialog, private _dataService: DataServiceService) {}

  private _sortDataSource() {
    this.dataSource.sort((e1, e2) => {
      if (!e1.iid) return -1
      if (!e2.iid) return 1
      if (e1.iid > e2.iid) return 1
      if (e1.iid < e2.iid) return -1
      return 0
    })
  }

  private _refreshDataSource() {
    switch (this.subscriptionType) {
      case 'properties':
        this.dataSource = [...(this.detail.propertySubscriptions ?? [])]
        break
      case 'events':
        this.dataSource = [...(this.detail.eventSubscriptions ?? [])]
        break
      default:
        this.dataSource = [...(this.detail.propertySubscriptions ?? []), ...(this.detail.eventSubscriptions ?? [])]
        break
    }
    this._sortDataSource()
  }

  ngOnInit(): void {
    this._refreshDataSource()
  }

  async openManageSubscriptions(): Promise<void> {
    this.loading = true
    const dataServices = await this._dataService.fetchAllDataServices()
    const dialogRef = this._dialog.open(ItemManageSubscriptionsComponent, {
      width: '900px',
      minHeight: '580px',
      maxHeight: '648px',
      disableClose: true,
      data: { detail: this.detail, dataServices },
    })
    dialogRef.afterClosed().subscribe((result) => {
      this._refreshDataSource()
    })
    this.loading = false
  }

  get today() {
    return new Date()
  }

  type(type: string): string {
    if (type === 'read' || type === 'write') return 'Property'
    else if (type === 'event') return 'Event'
    else return 'Unknown type'
  }
}
