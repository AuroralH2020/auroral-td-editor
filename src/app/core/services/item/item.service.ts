import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Item, Items, ServerItems } from '@core/models/item.model'
import { firstValueFrom, map, take } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private _itemsUrl = '/api/ui/items/items'

  constructor(private _http: HttpClient) {}

  async fetchItems(page: number, size: number, myItems: boolean | undefined): Promise<Items> {
    const params = new HttpParams({
      fromObject: {
        offset: page * size,
        size: size,
        myItems: myItems ?? false
      },
    })
    return await firstValueFrom(
      this._http
        .get<ServerItems>(this._itemsUrl, {
          params: params,
        })
        .pipe(
          map((e) => {
            return {
              totalLength: e.totalLength,
              items: e.items.map((e) => new Item(e)),
            } as Items
          })
        )
        .pipe(take(1))
    )
  }
}
