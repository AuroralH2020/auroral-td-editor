import { Component, OnInit } from '@angular/core'
import { ItemService } from '@core/services/item/item.service'

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
  myItemsColumns: string[] = ['name', 'type', 'dataAccess', 'subscribers']
  allItemsColumns: string[] = ['name', 'type', 'dataAccess', 'owner', 'subscribers']

  constructor(private _item: ItemService) {}

  ngOnInit(): void {}

  fetchMyItems = async (page: number, size: number) => {
    return await this._item.fetchItems(page, size, true)
  }

  fetchAllItems = async (page: number, size: number) => {
    return await this._item.fetchItems(page, size, false)
  }

  myItemsEmpty() {}
}
