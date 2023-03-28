import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-node-items",
  templateUrl: "./node-items.component.html",
  styleUrls: ["./node-items.component.scss"],
})
export class NodeItemsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.selectedFilterItems = this.filterItems
  }

  displayedItems: any[] = [];

  searchText: string = "";

  filterItems: any[] = [
    {
      key: "device",
      value: {
        label: "Devices",
        icon: "router",
        color: "#4D8A8C",
      },
    },
    {
      key: "service",
      value: {
        label: "Services",
        icon: "cloud",
        color: "#E5B38E",
      },
    },
  ];

  selectedFilterItems: any[] = [];

  searchChanged() {
    if (this.search) {
      this.displayedItems = this.search(this.searchText);
    }
  }

  search(value: string): any[] {
    return [];
  }
}
