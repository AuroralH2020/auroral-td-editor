import { Component, Input, OnInit } from '@angular/core'
import { ItemsService } from '@core/services/item/item.service'
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog'
import { DetailDialogComponent } from './detail-dialog/detail-dialog.component'
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
      this._ref = this._dialogService.open(DetailDialogComponent, {
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
