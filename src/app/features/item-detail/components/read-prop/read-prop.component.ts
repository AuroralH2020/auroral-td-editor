import { Component, Input, OnInit } from '@angular/core'
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog'
import { ReadPropDialogComponent } from './read-prop-dialog/read-prop-dialog.component'
import { ItemUI, PropertyUI } from '@core/models/item.model'

@Component({
  selector: 'app-read-prop',
  templateUrl: './read-prop.component.html',
  styleUrls: ['./read-prop.component.scss'],
  providers: [DialogService],
})
export class ReadPropComponent implements OnInit {
  @Input() oid?: string
  @Input() item!: ItemUI
  @Input() prop!: PropertyUI

  private _ref?: DynamicDialogRef

  constructor(private _dialogService: DialogService) {}

  ngOnInit(): void {}

  openDetailDialog() {
    if (this.oid) {
      this._ref = this._dialogService.open(ReadPropDialogComponent, {
        data: {
          oid: this.oid,
          item: this.item,
          prop: this.prop,
        },
        header: this.item.name,
        baseZIndex: 10000,
        maximizable: true,
      })
    }
  }

  ngOnDestroy() {
    if (this._ref) {
      this._ref.close()
    }
  }
}
