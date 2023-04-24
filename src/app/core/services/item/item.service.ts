import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { ItemConvert, ItemUI, Items } from '@core/models/item.model'
import { MyNode } from '@core/models/node.model'
import { firstValueFrom, take } from 'rxjs'
import { itemsQuery } from 'src/app/misc/node-queries'

const _itemsRemoteQueryUrl = '/api/discovery/remote/semantic'
const _itemsLocalQueryUrl = '/api/discovery/local/semantic'

@Injectable({
  providedIn: 'root',
})
export class ItemsService {

  constructor(private _http: HttpClient) {}

  myItems: ItemUI[] | undefined

  public async initItems() {
    await this._initMyItems()
  }

  private async _initMyItems(): Promise<void> {
    const itemsServer = await firstValueFrom(
      this._http
        .post<Items>(_itemsLocalQueryUrl, itemsQuery, {
          headers: {
            accept: 'application/json',
            'Content-Type': 'text/plain',
          },
        })
        .pipe(take(1))
    )
    this.myItems = ItemConvert.toItemsUI(itemsServer);
  }

  async getItems(agids: string[]): Promise<Items> {
    let params = new HttpParams()
    params = params.append('agids', agids.join(','))
    return await firstValueFrom(
      this._http
        .post<Items>(_itemsRemoteQueryUrl, itemsQuery, {
          params,
          headers: {
            accept: 'application/json',
            'Content-Type': 'text/plain',
          },
        })
        .pipe(take(1))
    )
  }
}
