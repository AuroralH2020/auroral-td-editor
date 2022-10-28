import { Component, OnInit } from "@angular/core";
import { MAT_TABS_CONFIG } from "@angular/material/tabs";
import { ItemService } from "@core/services/item/item.service";
import { UserService } from "@core/services/user/user.service";

@Component({
  selector: "app-items",
  templateUrl: "./items.component.html",
  styleUrls: ["./items.component.scss"],
  providers: [
    { provide: MAT_TABS_CONFIG, useValue: { animationDuration: "0ms" }}
  ]
})
export class ItemsComponent implements OnInit {
  myItemsColumns: string[] = ["name", "type", "contractors"];
  allItemsColumns: string[] = ["name", "type", "owner", "subscription"];

  constructor(private _item: ItemService, private _user: UserService) {}

  ngOnInit(): void {}

  fetchMyItems = async (page: number, size: number) => {
    return await this._item.fetchMyItems(page, size);
  };

  fetchAllItems = async (page: number, size: number) => {
    return await this._item.fetchItems(page, size);
  };

  myItemsEmpty() {

  }
}
