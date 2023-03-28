import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { CheckboxGroupItem } from "@shared/models/checkbox-group.modele";
import { FetchTableItems } from "@shared/models/table.modele";

@Component({
  selector: "app-components-library",
  templateUrl: "./components-library.component.html",
  styleUrls: ["./components-library.component.scss"],
})
export class ComponentsLibraryComponent implements OnInit {
  protected textFieldWithError: FormControl = new FormControl("", {
    validators: Validators.required,
    updateOn: "change",
  });

  protected textAreaWithError: FormControl = new FormControl("", {
    validators: Validators.required,
    updateOn: "change",
  });

  protected singleSelectWithError: FormControl = new FormControl("", {
    validators: Validators.required,
    updateOn: "change",
  });

  constructor() {}

  ngOnInit(): void {
  }

  getItemsForFetchTable(page: number, size: number): Promise<FetchTableItems> {
    const items = [...Array(20).keys()].map((x) => {
      return {
        name: "Name " + ++x,
        type: "Type " + x,
        owner: "Owner " + x,
      };
    });
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          totalLength: items.length,
          items: items.slice(page * size),
        });
      }, 3000);
    });
  }

  checkboxItems: CheckboxGroupItem[] = [
    { value: "Item 1", key: "item_1" },
    { value: "Item 2", key: "item_2" },
    { value: "Item 3", key: "item_3" },
    { value: "Item 4", key: "item_4" },
  ];

  selectedCheckboxItemsBasic: CheckboxGroupItem[] = [];
  selectedCheckboxItemsSearch: CheckboxGroupItem[] = [];
  selectedCheckboxItemsSelect: CheckboxGroupItem[] = [];

  searchInCheckboxes = (value: string) => {
    return this.checkboxItems.filter((element) =>
      element.value.toLowerCase().startsWith(value.toLowerCase())
    );
  };
}
