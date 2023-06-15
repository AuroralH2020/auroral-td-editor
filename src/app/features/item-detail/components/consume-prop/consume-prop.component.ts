import { Component, Input, OnInit } from '@angular/core'
import { ItemUI, PropertyUI } from '@core/models/item.model'

@Component({
  selector: 'app-consume-prop',
  templateUrl: './consume-prop.component.html',
  styleUrls: ['./consume-prop.component.scss'],
})
export class ConsumePropComponent implements OnInit {
  @Input() oid?: string
  @Input() item!: ItemUI
  @Input() prop!: PropertyUI

  showDetail: boolean = false

  constructor() {}

  ngOnInit(): void {}

  openDetailDialog() {
    if (this.oid) {
      this.showDetail = true
    }
  }

  ngOnDestroy() {}
}
