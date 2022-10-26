import { Component, OnInit } from "@angular/core";
import { Organisation } from "@core/models/organisation.model";
import { ItemService } from "@core/services/item/item.service";
import { UserService } from "@core/services/user/user.service";

@Component({
  selector: "app-items",
  templateUrl: "./items.component.html",
  styleUrls: ["./items.component.scss"],
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
}

// const MY_ITEMS_DUMMY: MyItems[] = [
//   {
//     name: "InfluxDB connector 2",
//   },
//   {
//     name: "MyCSVChart",
//   },
//   {
//     name: "MyRoomTemperature_3",
//   },
//   {
//     name: "Aggregator_Service",
//   },
//   {
//     name: "Monitor service",
//   },
//   {
//     name: "Matej_service",
//   },
// ];

// const ALL_ITEMS_DUMMY: AllItems[] = [
//   {
//     name: "InfluxDB connector 2",
//     type: "device",
//     owner: "Lorem ipsum",
//     contracts: "Lorem ipsum dolor.",
//   },
//   {
//     name: "MyCSVChart",
//     type: "device",
//     owner: "Lorem ipsum",
//     contracts: "Lorem ipsum dolor.",
//   },
//   {
//     name: "MyRoomTemperature_3",
//     type: "device",
//     owner: "Lorem ipsum",
//     contracts: "Lorem ipsum dolor.",
//   },
//   {
//     name: "Aggregator_Service",
//     type: "device",
//     owner: "Lorem ipsum",
//     contracts: "Lorem ipsum dolor.",
//   },
// ];
