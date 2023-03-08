import { Component, OnInit } from '@angular/core'
import { AdminService } from '@core/services/admin/admin.service';
import { ItemService } from '@core/services/item/item.service'

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
  allItemsColumns: string[] = ['name', 'oid', 'type', 'monitorsCount', 'owner', 'subscribers']
  myItemsColumns: string[] = ['name', 'oid', 'type', 'monitorsCount', 'subscribers']

  loading: boolean = false;

  constructor(private _item: ItemService, private _admin: AdminService) {}

  ngOnInit(): void {}

  fetchAllItems = async (page: number, size: number) => {
    return await this._item.getItems(page, size, false)
  }

  fetchMyItems = async (page: number, size: number) => {
    return await this._item.getItems(page, size, true)
  }
}
