import { Component, Input, OnInit } from '@angular/core';
import { ItemUI } from '@core/models/item.model';

@Component({
  selector: 'app-item-icon',
  templateUrl: './item-icon.component.html',
  styleUrls: ['./item-icon.component.scss']
})
export class ItemIconComponent implements OnInit {

  @Input() item!: ItemUI

  constructor() { }

  ngOnInit(): void {
  }

  get iconColor(): string {
    switch (this.item.itemtype.toLowerCase()) {
      case "service":
        return "rgb(229, 179, 142)";
      case "device":
        return "rgb(0, 182, 235)";
      default:
        return "rgb(150, 150, 150)";
    }
  }

  get icon(): string {
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
