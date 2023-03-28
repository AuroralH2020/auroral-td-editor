import { Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef } from "@angular/core";
import { CheckboxGroupItem } from "@shared/models/checkbox-group.modele";
import { inflect } from "src/app/utils";

@Component({
  selector: "app-checkbox-group",
  templateUrl: "./checkbox-group.component.html",
  styleUrls: ["./checkbox-group.component.scss"],
})
export class CheckboxGroupComponent implements OnInit {
  constructor() {}

  @Input() items: CheckboxGroupItem[] = [];
  @Input() search: ((search: any) => CheckboxGroupItem[]) | undefined;
  @Input() selectedItems!: CheckboxGroupItem[];
  @Output() selectedItemsChange: EventEmitter<CheckboxGroupItem[]> = new EventEmitter<CheckboxGroupItem[]>();
  @Input() showStatus: boolean = false;

  @ContentChild('labelRef') labelRef: TemplateRef<any> | undefined

  allSelected: boolean = false;

  displayedItems: any[] = [];

  searchText: string = "";

  ngOnInit() {
    this.displayedItems = this.items.slice(0, this.items.length);
  }

  toggleAll(): void {
    if (this.allSelected) {
      this.selectedItems = this.items.slice(0, this.items.length);
    } else {
      this.selectedItems = [];
    }
    this.selectedItemsChange.emit(this.selectedItems);
  }

  selectionChanged() {
    const all = this.items.every((e1) =>
      this.selectedItems.find((e2) => e1.key === e2.key)
    );
    if (all && !this.allSelected) {
      this.allSelected = true;
    } else if (!all && this.allSelected) {
      this.allSelected = false;
    }
    this.selectedItemsChange.emit(this.selectedItems);
  }

  searchChanged() {
    if (this.search) {
      this.displayedItems = this.search(this.searchText);
    }
  }

  isSelected(item: CheckboxGroupItem): boolean {
    if (!this.selectedItems) return false;
    return this.selectedItems.some((element) => element.key === item.key)
  }

  get itemsSelected() {
    const num = this.selectedItems.length
    const n = this.items.length
    if (num === n) {
      return 'All items selected';
    }
    return inflect(num, 'No items selected', `${num} of ${n} item selected`, `${num} of ${n} items selected`);
  }
}
