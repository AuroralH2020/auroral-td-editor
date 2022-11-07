// import { HttpClient, HttpParams } from '@angular/common/http'
// import { Injectable } from '@angular/core'
// import { Item, Items, ServerItem, ServerItems } from '@core/models/item.model'
// import { ServerResponse } from '@core/models/server.model'
// import { firstValueFrom, map, take } from 'rxjs'

// @Injectable({
//   providedIn: 'root',
// })
// export class ItemService {
//   private _myItemsUrl = '/api/ui/items/my-items'
//   private _itemsUrl = '/api/ui/items/items'

//   constructor(private _http: HttpClient) {}

//   async fetchMyItems(page: number, size: number): Promise<Items> {
//     const params = new HttpParams({
//       fromObject: {
//         offset: page * size,
//         size: size,
//       },
//     })
//     const dummy: Item[] = []
//     return await firstValueFrom(
//       this._http
//         .get<ServerItems>(this._myItemsUrl, {
//           params: params,
//         })
//         .pipe(
//           map((e) => {
//             return {
//               totalLength: e.totalLength,
//               items: e.items.map((e) => new Item(e)),
//             } as Items
//           })
//         )
//         .pipe(take(1))
//     )
//   }

//   async fetchItems(page: number, size: number): Promise<Items> {
//     const params = new HttpParams({
//       fromObject: {
//         offset: page * size,
//         size: size,
//       },
//     })
//     return await firstValueFrom(
//       this._http
//         .get<ServerResponse>(this._itemsUrl, {
//           params: params,
//         })
//         .pipe(take(1))
//     ).then((res) => res.message)
//   }
// }

import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Item, Items, ServerItems } from '@core/models/item.model'
import { firstValueFrom, map, take } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private _myItemsUrl = '/api/ui/items/my-items'
  private _itemsUrl = '/api/ui/items/items'

  constructor(private _http: HttpClient) {}

  async fetchMyItems(page: number, size: number): Promise<Items> {
    const params = new HttpParams({
      fromObject: {
        offset: page * size,
        size: size,
      },
    })
    return await firstValueFrom(
      this._http
        .get<ServerItems>(this._myItemsUrl, {
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

  async fetchItems(page: number, size: number): Promise<Items> {
    const params = new HttpParams({
      fromObject: {
        offset: page * size,
        size: size,
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
