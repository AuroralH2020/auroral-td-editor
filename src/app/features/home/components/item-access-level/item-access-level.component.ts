import { Component, Input, OnInit } from '@angular/core';
import { ItemUI } from '@core/models/item.model';

@Component({
  selector: 'app-item-access-level',
  templateUrl: './item-access-level.component.html',
  styleUrls: ['./item-access-level.component.scss']
})
export class ItemAccessLevelComponent implements OnInit {

  access: string = 'private'

  @Input() item!: ItemUI;

  constructor() { }

  ngOnInit(): void {
  }

  get accessLevelIcon(): string {
    switch (this.access) {
      case "public":
        return "public";
      case "partners":
        return "person";
      default:
        return "visibility";
    }
  }

}
