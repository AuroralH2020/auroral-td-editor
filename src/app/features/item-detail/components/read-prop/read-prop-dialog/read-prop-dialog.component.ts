import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core'
import { ItemUI, PropertyUI } from '@core/models/item.model'
import { ItemsService } from '@core/services/item/item.service'
import { Table } from 'primeng/table'

interface RequestParam {
  key: string
  value: string
}

@Component({
  selector: 'app-read-prop-dialog',
  templateUrl: './read-prop-dialog.component.html',
  styleUrls: ['./read-prop-dialog.component.scss'],
})
export class ReadPropDialogComponent implements OnInit {

  @Input() oid!: string
  @Input() item!: ItemUI
  @Input() prop!: PropertyUI

  data: any
  loading = false

  blockSpace: RegExp = /[^s]/

  requestParams: RequestParam[] = []

  constructor(private _itemsService: ItemsService) {}

  ngOnInit(): void {
    this.getData()
    // if (this.requestParams.length === 0) {
    //   this.requestParams.push({ key: '', value: '' })
    // }
  }

  addParam() {
    this.requestParams.push({ key: '', value: '' })
  }

  async getData() {
    this.loading = true
    this.data = await this._itemsService.getDataFromProperty(this.oid, this.item.oid, this.prop.pid)
    this.loading = false
  }
}
