import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { ItemConvert, ItemUI, Items } from '@core/models/item.model'
import { firstValueFrom, take } from 'rxjs'
import { itemsQuery } from 'src/app/misc/node-queries'

const _itemsRemoteQueryUrl = '/api/discovery/remote/semantic'
const _itemsLocalQueryUrl = '/api/discovery/local/semantic'

const _itemsReadPropertyUrl = '/api/properties'

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  constructor(private _http: HttpClient) {}

  myItems: ItemUI[] | undefined
  myOrgItems: ItemUI[] | undefined

  public async initItems(orgAgids: string[]) {
    await Promise.all([await this._initMyItems(), await this._initMyOrgItems(orgAgids)])
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
    this.myItems = ItemConvert.toItemsUI(itemsServer)
  }

  private async _initMyOrgItems(orgAgids: string[]): Promise<void> {
    const itemsServer = await this.getItems(orgAgids)
    this.myOrgItems = ItemConvert.toItemsUI(itemsServer)
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

  async getDataFromProperty(
    oid: string,
    remoteOid: string,
    pid: string,
    params?: Record<string, string>
  ): Promise<any> {
    return await firstValueFrom(
      this._http
        .get<any>(_itemsReadPropertyUrl + `/${oid}/${remoteOid}/${pid}`, {
          params,
          headers: {
            accept: 'application/json',
            'Content-Type': 'text/plain',
          },
        })
        .pipe(take(1))
    )
  }

  async updateProperty(
    oid: string,
    remoteOid: string,
    pid: string,
    params?: Record<string, string>,
    body?: string
  ): Promise<any> {
    return await firstValueFrom(
      this._http
        .put<any>(_itemsReadPropertyUrl + `/${oid}/${remoteOid}/${pid}`, body, {
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
