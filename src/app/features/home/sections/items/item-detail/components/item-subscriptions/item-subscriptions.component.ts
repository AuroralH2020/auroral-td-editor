import { Component, Input, OnInit } from '@angular/core'
import { Item } from '@core/models/item.model'
import { Subscription } from '@core/models/subscription.model'

type SubscriptionType = 'all' | 'properties' | 'events'

@Component({
  selector: 'app-item-subscriptions',
  templateUrl: './item-subscriptions.component.html',
  styleUrls: ['./item-subscriptions.component.scss'],
})
export class ItemSubscriptionsComponent implements OnInit {
  @Input() detail!: Item
  @Input() type: SubscriptionType = 'all'

  dataSource!: Subscription[]

  displayedColumns: string[] = ['name', 'type', 'dataService', 'created', 'lastUpdated']

  constructor() {}

  ngOnInit(): void {
    switch (this.type) {
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
  }
}
