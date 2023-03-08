import { Component, Input, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { Item } from '@core/models/item.model'
import { Subscription } from '@core/models/subscription.model'
import { DataServiceService } from '@core/services/data-service/data-service.service'
import { stringSortListOfObjects } from 'src/app/utils'
import { ItemManageSubscriptionsComponent } from '../../../item-manage-subscriptions/item-manage-subscriptions.component'

type SubscriptionType = 'all' | 'properties' | 'events'

@Component({
  selector: 'app-item-subscriptions',
  templateUrl: './item-subscriptions.component.html',
  styleUrls: ['./item-subscriptions.component.scss'],
})
export class ItemSubscriptionsComponent {
  @Input() detail!: Item
  @Input() subscriptionType: SubscriptionType = 'all'

  // dataSource!: Subscription[]

  // displayedColumns: string[] = ['name', 'type', 'service', 'created', 'lastUpdated']
  displayedColumns: string[] = ['name', 'type', 'service']

  loading: boolean = false

  constructor(private _dialog: MatDialog, private _dataService: DataServiceService) {}

  async openManageSubscriptions(): Promise<void> {
    this.loading = true
    const dataServices = await this._dataService.getDataServices()
    const dialogRef = this._dialog.open(ItemManageSubscriptionsComponent, {
      width: '900px',
      minHeight: '580px',
      maxHeight: '648px',
      data: { detail: this.detail, dataServices },
    })
    this.loading = false
  }

  get dataSource(): Subscription[] {
    var ds = []
    if (this.subscriptionType == 'properties') {
      ds = [...(this.detail.propertySubscriptions ?? [])]
    } else if (this.subscriptionType == 'events') {
      ds = [...(this.detail.eventSubscriptions ?? [])]
    } else {
      ds = [...(this.detail.propertySubscriptions ?? []), ...(this.detail.eventSubscriptions ?? [])]
    }
    stringSortListOfObjects(ds, 'iid')
    return ds
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
