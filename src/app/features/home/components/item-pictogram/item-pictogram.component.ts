import { Component, Input, OnInit } from '@angular/core'
import { ItemUI } from '@core/models/item.model'
import { valueBasedOnItemType } from 'src/app/utils'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

@Component({
  selector: 'app-item-pictogram',
  templateUrl: './item-pictogram.component.html',
  styleUrls: ['./item-pictogram.component.scss'],
})
export class ItemPictogramComponent implements OnInit {
  @Input() item!: ItemUI

  constructor() {}

  ngOnInit(): void {}

  get pictogramColor(): string {
    return valueBasedOnItemType(this.item, 'rgb(0, 182, 235)', 'rgb(229, 179, 142)', 'rgb(150, 150, 150)')
  }

  get contentColor(): string {
    return valueBasedOnItemType(
      this.item,
      'rgba(0, 182, 235, 0.2)',
      'rgba(229, 179, 142, 0.2)',
      'rgba(150, 150, 150, 0.2)'
    )
  }

  get itemIcon(): IconProp {
    return valueBasedOnItemType(this.item, 'satellite-dish', 'cloud', 'circle')
  }
}
