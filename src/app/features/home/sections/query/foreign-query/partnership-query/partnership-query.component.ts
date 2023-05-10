import { Component, OnInit } from '@angular/core';
import { PartnerUI } from '@core/models/collaboration.model';
import { NodesService } from '@core/services/nodes/nodes.service';
import { SelectPartnerDialogComponent } from '@features/home/components/select-partner-dialog/select-partner-dialog.component';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-partnership-query',
  templateUrl: './partnership-query.component.html',
  styleUrls: ['./partnership-query.component.scss'],
  providers: [DialogService],
})
export class PartnershipQueryComponent implements OnInit {

  selectedPartner: PartnerUI | undefined

  detailDialogRef!: DynamicDialogRef

  constructor(private _nodesService: NodesService, private _dialogService: DialogService) { }

  ngOnInit(): void {
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
      this.selectedPartner = partner
    })
  }

  runQuery = async (query: string): Promise<any> => {
    if (!this.selectedPartner) {
      throw Error('No partner selected')
    }
    const nodes = await this._nodesService.getNodesFromPartnership(this.selectedPartner.cid)
    if (nodes.length === 0) {
      throw Error(`${this.selectedPartner.name} has no nodes in this partnership`)
    }
    const agids = nodes.map((element) => {
      return element.agid
    })
    return this._nodesService.queryRemoteNodes(agids, query)
  }

}
