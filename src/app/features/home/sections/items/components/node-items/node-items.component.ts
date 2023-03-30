import { Component, OnInit } from '@angular/core'
import { ItemConvert, Items, ItemUI } from '@core/models/item.model'
import { MyOrgNode } from '@core/models/node.model'
import { ItemsService } from '@core/services/item/item.service'
import { NodesService } from '@core/services/nodes/nodes.service'

const filterItems = [
  {
    key: 'device',
    value: {
      label: 'Devices',
      icon: 'router',
      color: '#4D8A8C',
    },
  },
  {
    key: 'service',
    value: {
      label: 'Services',
      icon: 'cloud',
      color: '#E5B38E',
    },
  },
]

@Component({
  selector: 'app-node-items',
  templateUrl: './node-items.component.html',
  styleUrls: ['./node-items.component.scss'],
})
export class NodeItemsComponent implements OnInit {
  loading: boolean = false

  displayedItems: any[] = []

  searchText: string = ''

  selectedFilterItems: any[] = []

  filterItems: any[] = []

  itemsUI: ItemUI[] = []

  constructor(private _nodesService: NodesService, private _itemsService: ItemsService) {}

  ngOnInit(): void {
    this.filterItems = filterItems
    this.selectedFilterItems = filterItems
    this._getData()
  }

  searchChanged() {
    if (this.search) {
      this.displayedItems = this.search(this.searchText)
    }
  }

  search(value: string): any[] {
    return []
  }

  private async _getData(): Promise<void> {
    this.loading = true
    const nodes = await this._getMyOrgNodes()
    let agids = []
    for (const node of nodes) {
      if (node.agid !== '80c554a6-6177-48c0-952f-dc8b2b763f12') {
        agids.push(node.agid)
      }
    }
    const itemsServer = await this._getMyOrgItems(agids)
    this.itemsUI = ItemConvert.toItemsUI(itemsServer)
    console.log(this.itemsUI)
    this.loading = false
  }

  private async _getMyOrgNodes(): Promise<MyOrgNode[]> {
    return await this._nodesService.getMyOrgNodes()
  }

  private async _getMyOrgItems(agids: string[]): Promise<Items> {
    return await this._itemsService.getMyOrgItems(agids)
  }
}