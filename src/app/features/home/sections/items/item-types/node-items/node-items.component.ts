import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { ItemConvert, Items, ItemUI } from "@core/models/item.model";
import { ItemsService } from "@core/services/item/item.service";
import { NodesService } from "@core/services/nodes/nodes.service";
import { DialogService, DynamicDialogRef } from "primeng/dynamicdialog";
import { Table } from "primeng/table";
import { NodeItemDetailComponent } from "./node-item-detail/node-item-detail.component";

@Component({
  selector: "app-node-items",
  templateUrl: "./node-items.component.html",
  styleUrls: ["./node-items.component.scss"],
  providers: [DialogService],
})
export class NodeItemsComponent implements OnInit, OnDestroy {

  @ViewChild('dt') dt!: Table;

  loading: boolean = false;

  selectedFilter: string = "All";

  itemsUI: ItemUI[] = [];

  detailDialogRef!: DynamicDialogRef;

  constructor(
    private _nodesService: NodesService,
    private _itemsService: ItemsService,
    private _dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this._getData();
  }

  ngOnDestroy() {
    if (this.detailDialogRef) {
      this.detailDialogRef.close();
    }
  }

  showDetailDialog(item: ItemUI) {
    this.detailDialogRef = this._dialogService.open(NodeItemDetailComponent, {
      data: {
        item,
      },
      width: "90%",
      height: "90%",
      contentStyle: { overflow: "auto" },
      baseZIndex: 10000,
      closeOnEscape: true,
    });
  }

  search(event: Event) {
    const searchValue = (event.target as HTMLInputElement).value;
    this.dt.filter(searchValue, "name", "startsWith");
  }

  filter() {
    if (this.selectedFilter === 'All') {
      this.dt.reset()
    } else {
      this.dt.filter(this.selectedFilter, "type", "equals");
    }
  }

  private async _getData(): Promise<void> {
    this.loading = true;
    const nodes = this._nodesService.myOrgNodes;
    let agids = nodes.map((element) => element.agid);
    const itemsServer = await this._getMyOrgItems(agids);
    this.itemsUI = ItemConvert.toItemsUI(itemsServer);
    this.loading = false;
  }

  private async _getMyOrgItems(agids: string[]): Promise<Items> {
    return await this._itemsService.getMyOrgItems(agids);
  }
}