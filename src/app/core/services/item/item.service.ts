import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Items } from '@core/models/item.model'
import { firstValueFrom, take } from 'rxjs'
import { itemsQuery } from 'src/app/misc/node-queries'

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  private _itemsQueryUrl = '/api/discovery/remote/semantic'

  constructor(private _http: HttpClient) {}

  async getMyOrgItems(agids: string[]): Promise<Items> {
    let params = new HttpParams()
    params = params.append('agids', agids.join(','))
    return await firstValueFrom(
      this._http
        .post<Items>(this._itemsQueryUrl, itemsQuery, {
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
