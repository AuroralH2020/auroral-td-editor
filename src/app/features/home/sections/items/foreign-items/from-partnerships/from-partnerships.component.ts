import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { PartnerUI } from '@core/models/collaboration.model';
import { ItemConvert, ItemUI } from '@core/models/item.model';
import { ItemsService } from '@core/services/item/item.service';
import { NodesService } from '@core/services/nodes/nodes.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Table } from 'primeng/table';
import { SelectPartnerDialogComponent } from './select-partner-dialog/select-partner-dialog.component';

@Component({
  selector: 'app-from-partnerships',
  templateUrl: './from-partnerships.component.html',
  styleUrls: ['./from-partnerships.component.scss'],
  providers: [DialogService],
})

export class FromPartnershipsComponent implements OnInit, OnDestroy {
  @ViewChild('dt') dt!: Table

  loading: boolean = false

  selectedFilter: string = 'All'

  itemsUI: ItemUI[] = []

  selectedPartner: PartnerUI | undefined

  detailDialogRef!: DynamicDialogRef

  constructor(
    private _nodesService: NodesService,
    private _itemsService: ItemsService,
    private _dialogService: DialogService
  ) {}

  ngOnInit(): void {
    // this._getData();
  }

  ngOnDestroy() {
    if (this.detailDialogRef) {
      this.detailDialogRef.close()
    }
  }

  // showDetailDialog(item: ItemUI) {
  //   this.detailDialogRef = this._dialogService.open(PartnerItemDetailComponent, {
  //     data: {
  //       item,
  //       selectedPartner: this.selectedPartner,
  //     },
  //     width: "1400px",
  //     height: "800px",
  //     contentStyle: { overflow: "auto" },
  //     baseZIndex: 10000,
  //     closeOnEscape: true,
  //     dismissableMask: true,
  //   });
  // }

  openSelectPartnerDialog() {
    this.detailDialogRef = this._dialogService.open(SelectPartnerDialogComponent, {
      header: 'Select a partner',
      width: '600px',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      closeOnEscape: true,
      dismissableMask: true,
    })

    this.detailDialogRef.onClose.subscribe((partner: PartnerUI) => {
      this._getData(partner)
    })
  }

  search(event: Event) {
    const searchValue = (event.target as HTMLInputElement).value
    this.dt.filter(searchValue, 'name', 'contains')
  }

  filter() {
    if (this.selectedFilter === 'All') {
      this.dt.reset()
    } else {
      this.dt.filter(this.selectedFilter, 'type', 'equals')
    }
  }

  private async _getData(partner: PartnerUI | undefined | null): Promise<void> {
    if (partner) {
      this.selectedPartner = partner
      this.loading = true
      console.log(partner)
      const nodes = await this._nodesService.getNodesFromPartnership(partner.cid)
      let agids = nodes.map((element) => element.agid)
      if (agids.length == 0) {
        this.itemsUI = []
        this.loading = false
        return
      }
      const itemsServer = await this._itemsService.getItems(agids)
      this.itemsUI = ItemConvert.toItemsUI(itemsServer)
      this.loading = false
    }
  }
}

