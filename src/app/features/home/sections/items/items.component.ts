import { Component, OnInit } from '@angular/core'
import { Item } from '@core/models/item.model'
import { ItemService } from '@core/services/item/item.service'

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
  allItemsColumns: string[] = ['name', 'oid', 'type', 'monitorsCount', 'owner', 'subscribers']
  myItemsColumns: string[] = ['name', 'oid', 'type', 'monitorsCount', 'subscribers']

  constructor(private _item: ItemService) {}

  ngOnInit(): void {}

  fetchAllItems = async (page: number, size: number) => {
    return await this._item.getItems(page, size, false)
  }

  fetchMyItems = async (page: number, size: number) => {
    return await this._item.getItems(page, size, true)
  }

  myItemsEmpty() {}
}
