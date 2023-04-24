import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core'
import { Community } from '@core/models/collaboration.model'
import { ItemConvert, Items, ItemUI } from '@core/models/item.model'
import { ItemsService } from '@core/services/item/item.service'
import { NodesService } from '@core/services/nodes/nodes.service'
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog'
import { Table } from 'primeng/table'
import { SelectCommunityDialogComponent } from './select-community-dialog/select-community-dialog.component'

@Component({
  selector: 'app-from-communities',
  templateUrl: './from-communities.component.html',
  styleUrls: ['./from-communities.component.scss'],
  providers: [DialogService],
})
export class FromCommunitiesComponent implements OnInit, OnDestroy {
  @ViewChild('dt') dt!: Table

  loading: boolean = false

  selectedFilter: string = 'All'

  itemsUI: ItemUI[] = []

  selectedCommunity: Community | undefined

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
      this._getData(community)
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

  private async _getData(community: Community | undefined | null): Promise<void> {
    if (community) {
      this.selectedCommunity = community
      this.loading = true
      const nodes = await this._nodesService.getNodesFromCommunity(community.commId)
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

  // private async _getData(): Promise<void> {
  //   this.loading = true;
  //   const nodes = this._nodesService.myOrgNodes;
  //   let agids = nodes.map((element) => element.agid);
  //   const itemsServer = await this._getMyOrgItems(agids);
  //   console.log(itemsServer)
  //   this.itemsUI = ItemConvert.toItemsUI(itemsServer);
  //   console.log(this.itemsUI)
  //   this.loading = false;
  // }

  // private async _getMyOrgItems(agids: string[]): Promise<Items> {
  //   return await this._itemsService.getItems(agids);
  // }
}
