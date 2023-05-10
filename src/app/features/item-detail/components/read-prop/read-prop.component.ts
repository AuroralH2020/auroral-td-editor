import { Component, Input, OnInit } from '@angular/core'
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog'
import { ReadPropDialogComponent } from './read-prop-dialog/read-prop-dialog.component'
import { ItemUI, PropertyUI } from '@core/models/item.model'

@Component({
  selector: 'app-read-prop',
  templateUrl: './read-prop.component.html',
  styleUrls: ['./read-prop.component.scss'],
})
export class ReadPropComponent implements OnInit {
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
