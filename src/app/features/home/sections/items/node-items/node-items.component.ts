import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import {  ItemUI } from "@core/models/item.model";
import { ItemsService } from "@core/services/item/item.service";
import { DialogService, DynamicDialogRef } from "primeng/dynamicdialog";
import { Table } from "primeng/table";

@Component({
  selector: "app-node-items",
  templateUrl: "./node-items.component.html",
  styleUrls: ["./node-items.component.scss"],
  providers: [DialogService],
})
export class NodeItemsComponent implements OnInit, OnDestroy {

  @ViewChild('dt') dt!: Table;

  selectedFilter: string = "All";

  itemsUI: ItemUI[] = [];

  detailDialogRef!: DynamicDialogRef;

  constructor(
    private _itemsService: ItemsService,
  ) {}

  ngOnInit(): void {
    this.itemsUI = this._itemsService.myItems ?? []
  }

  ngOnDestroy() {
    if (this.detailDialogRef) {
      this.detailDialogRef.close();
    }
  }

  search(event: Event) {
    const searchValue = (event.target as HTMLInputElement).value;
    this.dt.filter(searchValue, "name", "contains");
  }

  filter() {
    if (this.selectedFilter === 'All') {
      this.dt.reset()
    } else {
      this.dt.filter(this.selectedFilter, "type", "equals");
    }
  }
}
