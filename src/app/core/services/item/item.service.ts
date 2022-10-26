import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MyItems, Items } from "@core/models/item.model";
import { ServerResponse } from "@core/models/server.model";
import { firstValueFrom, take } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ItemService {
  private _myItemsUrl = "/api/ui/items/my-items";
  private _itemsUrl = "/api/ui/items/items";

  constructor(private _http: HttpClient) {}

  async fetchMyItems(page: number, size: number): Promise<MyItems> {
    const params = new HttpParams({
      fromObject: {
        offset: (page * size),
        size: size,
      }
    });
    return await firstValueFrom(
      this._http
        .get<ServerResponse>(this._myItemsUrl, {
          params: params,
        })
        .pipe(take(1))
    ).then((res) => res.message);
  }

  async fetchItems(page: number, size: number): Promise<Items> {
    const params = new HttpParams({
      fromObject: {
        offset: (page * size),
        size: size,
      }
    });
    return await firstValueFrom(
      this._http
        .get<ServerResponse>(this._itemsUrl, {
          params: params,
        })
        .pipe(take(1))
    ).then((res) => res.message);
  }
}
