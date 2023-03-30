import { Component, Input, OnInit } from "@angular/core";
import { ItemUI } from "@core/models/item.model";
import { DynamicDialogConfig, DynamicDialogRef } from "primeng/dynamicdialog";

@Component({
  selector: "app-node-item-detail",
  templateUrl: "./node-item-detail.component.html",
  styleUrls: ["./node-item-detail.component.scss"],
})
export class NodeItemDetailComponent implements OnInit {
  item!: ItemUI;

  constructor(
    private _ref: DynamicDialogRef,
    private _config: DynamicDialogConfig
  ) {
    this.item = this._config.data!.item
  }

  ngOnInit(): void {
    console.log(this.item)
  }
}
