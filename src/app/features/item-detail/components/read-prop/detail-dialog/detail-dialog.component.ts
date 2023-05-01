import { Component, Input, OnInit } from '@angular/core'
import { ItemUI, PropertyUI } from '@core/models/item.model'
import { ItemsService } from '@core/services/item/item.service'
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog'

@Component({
  selector: 'app-detail-dialog',
  templateUrl: './detail-dialog.component.html',
  styleUrls: ['./detail-dialog.component.scss'],
})
export class DetailDialogComponent implements OnInit {
  @Input() oid!: string
  @Input() item!: ItemUI
  @Input() prop!: PropertyUI

  data: any
  loading = false

  constructor(
    private _itemsService: ItemsService,
    private _ref: DynamicDialogRef,
    private _config: DynamicDialogConfig
  ) {
    this.oid = _config.data.oid
    this.item = _config.data.item
    this.prop = _config.data.prop
  }

  ngOnInit(): void {
    this.getData()
  }

  async getData() {
    this.loading = true
    this.data = await this._itemsService.getDataFromProperty(this.oid, this.item.oid, this.prop.pid)
    this.loading = false
  }
}
