import { Component, Input, OnInit } from "@angular/core";
import { ItemUI } from "@core/models/item.model";

@Component({
  selector: "app-item-pictogram",
  templateUrl: "./item-pictogram.component.html",
  styleUrls: ["./item-pictogram.component.scss"],
})
export class ItemPictogramComponent implements OnInit {
  @Input() item!: ItemUI;

  constructor() {}

  ngOnInit(): void {}

  get pictogramColor(): string {
    switch (this.item.itemtype.toLowerCase()) {
      case "service":
        return "rgb(229, 179, 142)";
      case "device":
        return "rgb(0, 182, 235)";
      default:
        return "rgb(150, 150, 150)";
    }
  }

  get contentColor(): string {
    switch (this.item.itemtype.toLowerCase()) {
      case "service":
        return "rgba(229, 179, 142, 0.2)";
      case "device":
        return "rgba(0, 182, 235, 0.2)";
      default:
        return "rgba(150, 150, 150, 0.2)";
    }
  }

  get itemIcon(): string {
    switch (this.item.itemtype.toLowerCase()) {
      case "service":
        return "cloud";
      case "device":
        return "router";
      default:
        return "circle";
    }
  }
}
