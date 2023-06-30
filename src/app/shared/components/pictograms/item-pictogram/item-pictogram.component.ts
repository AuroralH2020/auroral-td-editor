import { Component, Input, OnInit } from '@angular/core'
import { Item } from '@core/models/item.model'
import { addAlpha, valueBasedOnItemType } from 'src/app/utils'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

@Component({
  selector: 'app-item-pictogram',
  templateUrl: './item-pictogram.component.html',
  styleUrls: ['./item-pictogram.component.scss'],
})
export class ItemPictogramComponent implements OnInit {
  @Input() title!: string
  @Input() color!: string
  @Input() icon!: IconProp

  contentColor!: string

  constructor() {
  }

  ngOnInit(): void {
    this.contentColor = addAlpha(this.color, 0.2)
  }
}
