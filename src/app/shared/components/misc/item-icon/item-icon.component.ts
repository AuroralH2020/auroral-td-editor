import { Component, Input, OnInit } from '@angular/core'
import { ItemUI } from '@core/models/item.model'
import { valueBasedOnItemType } from 'src/app/utils'

@Component({
  selector: 'app-item-icon',
  templateUrl: './item-icon.component.html',
  styleUrls: ['./item-icon.component.scss'],
})
export class ItemIconComponent implements OnInit {
  @Input() item!: ItemUI

  constructor() {}

  ngOnInit(): void {}

  get iconColor(): string {
    return valueBasedOnItemType(this.item, 'rgb(0, 182, 235)', 'rgb(229, 179, 142)', 'rgb(150, 150, 150)')
  }

  get icon(): string {
    return valueBasedOnItemType(this.item, 'router', 'cloud', 'circle')
  }
}
