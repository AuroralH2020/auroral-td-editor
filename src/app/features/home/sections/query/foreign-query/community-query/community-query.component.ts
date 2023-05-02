import { Component, OnInit } from '@angular/core'
import { Community } from '@core/models/collaboration.model'
import { NodesService } from '@core/services/nodes/nodes.service'
import { SelectCommunityDialogComponent } from '@features/home/components/select-community-dialog/select-community-dialog.component'
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog'

@Component({
  selector: 'app-community-query',
  templateUrl: './community-query.component.html',
  styleUrls: ['./community-query.component.scss'],
  providers: [DialogService],
})
export class CommunityQueryComponent implements OnInit {
  selectedCommunity: Community | undefined

  detailDialogRef!: DynamicDialogRef

  constructor(private _nodesService: NodesService, private _dialogService: DialogService) {}

  ngOnInit(): void {}

  ngOnDestroy() {
    if (this.detailDialogRef) {
      this.detailDialogRef.close()
    }
  }

  openSelectCommunityDialog() {
    this.detailDialogRef = this._dialogService.open(SelectCommunityDialogComponent, {
      header: 'Select a community',
      width: '600px',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      closeOnEscape: true,
      dismissableMask: true,
    })

    this.detailDialogRef.onClose.subscribe((community: Community) => {
      this.selectedCommunity = community
    })
  }

  runQuery = async (query: string): Promise<any> => {
    if (!this.selectedCommunity) {
      throw Error('No community selected')
    }
    const nodes = await this._nodesService.getNodesFromCommunity(this.selectedCommunity.commId)
    const agids = nodes.map((element) => {
      return element.agid
    })
    return this._nodesService.queryRemoteNodes(agids, query)
  }
}
