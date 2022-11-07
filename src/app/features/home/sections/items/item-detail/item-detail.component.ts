import { Component, Input, OnInit } from '@angular/core'
import { Item } from '@core/models/item.model'
import { Property, Event } from '@core/models/monitor.model'
import { Subscription } from '@core/models/subscription.model'

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss'],
})
export class ItemDetailComponent implements OnInit {
  @Input() detail!: Item

  constructor() {}

  ngOnInit(): void {}
}
