import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core'
import { ContractServer, PartnerUI } from '@core/models/collaboration.model'
import { ItemConvert, ItemUI } from '@core/models/item.model'
import { ItemsService } from '@core/services/item/item.service'
import { NodesService } from '@core/services/nodes/nodes.service'
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog'
import { Table } from 'primeng/table'
import { SelectPartnerDialogComponent } from './select-partner-dialog/select-partner-dialog.component'
import { CollaborationService } from '@core/services/collaboration/collaboration.service'

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

  partnerItemsUI: ItemUI[] = []

  contractInfo: ContractServer | undefined

  selectedPartner: PartnerUI | undefined

  detailDialogRef!: DynamicDialogRef

  constructor(
    private _nodesService: NodesService,
    private _itemsService: ItemsService,
    private _collaborationService: CollaborationService,
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

  private async _getData(partner: PartnerUI | undefined | null) {
    if (partner) {
      this.selectedPartner = partner
      this.loading = true
      await this._getPartnerItems()
      await this._getContractInfo()
      this.loading = false
    }
  }

  private async _getPartnerItems(): Promise<void> {
    const nodes = await this._nodesService.getNodesFromPartnership(this.selectedPartner!.cid)
    let agids = nodes.map((element) => element.agid)
    if (agids.length == 0) {
      this.partnerItemsUI = []
      return
    }
    const itemsServer = await this._itemsService.getItems(agids)
    this.partnerItemsUI = ItemConvert.toItemsUI(itemsServer)
  }

  private async _getContractInfo(): Promise<void> {
    this.contractInfo = await this._collaborationService.getContractInfo(this.selectedPartner!.cid)
  }
}
