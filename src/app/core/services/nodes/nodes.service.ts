import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { MyOrgNode } from '@core/models/node.model'
import { firstValueFrom, take } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class NodesService {
  private _nodesUrl = '/api/discovery/nodes/organisation'

  constructor(private _http: HttpClient) {}

  async getMyOrgNodes(): Promise<MyOrgNode[]> {
    return await firstValueFrom(
      this._http.get<MyOrgNode[]>(this._nodesUrl, { headers: { accept: 'application/json' } }).pipe(take(1))
    )
  }
}
