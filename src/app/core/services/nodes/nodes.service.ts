import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Node, NodeCreate } from '@core/models/node.model'
import { firstValueFrom, map, take } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class NodesService {
  private _nodesUrl = '/api/ui/agents'

  constructor(private _http: HttpClient) {}

  async getNodes(): Promise<Node[]> {
    return await firstValueFrom(this._http.get<Node[]>(this._nodesUrl).pipe(take(1)))
  }

  async registerNode(node: NodeCreate): Promise<Node> {
    return await firstValueFrom(this._http.post<Node>(this._nodesUrl, node).pipe(take(1)))
  }

  async unregisterNode(node: Node): Promise<void> {
    await firstValueFrom(this._http.delete<void>(this._nodesUrl + `/${node.agid}`).pipe(take(1)))
  }
}
