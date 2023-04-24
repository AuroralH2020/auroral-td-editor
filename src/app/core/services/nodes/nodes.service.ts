import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { MyNode, MyOrgNode } from '@core/models/node.model'
import { firstValueFrom, take } from 'rxjs'

const _orgNodesUrl = '/api/discovery/nodes/organisation'
const _myNodeUrl = '/api/agent/info'

const _communitiesNodesUrl = '/api/discovery/nodes/community'

@Injectable({
  providedIn: 'root',
})
export class NodesService {
  public myNode!: MyNode
  public myOrgNodes: MyOrgNode[] = []

  constructor(private _http: HttpClient) {}

  async initNode() {
    await Promise.all([this._initMyNode(), this._initMyOrgNodes()])
  }

  private async _initMyNode(): Promise<void> {
    this.myNode = await firstValueFrom(
      this._http
        .get<MyNode>(_myNodeUrl, {
          headers: { accept: 'application/json' },
        })
        .pipe(take(1))
    )
  }

  private async _initMyOrgNodes(): Promise<void> {
    this.myOrgNodes = await firstValueFrom(
      this._http
        .get<MyOrgNode[]>(_orgNodesUrl, {
          headers: { accept: 'application/json' },
        })
        .pipe(take(1))
    )
  }

  async getNodesFromCommunity(ctid: string): Promise<MyOrgNode[]> {
    return await firstValueFrom(
      this._http
        .get<MyOrgNode[]>(_communitiesNodesUrl + `/${ctid}`, {
          headers: { accept: 'application/json' },
        })
        .pipe(take(1))
    )
  }

  async getNodesFromPartnership(cid: string): Promise<MyOrgNode[]> {
    return await firstValueFrom(
      this._http
        .get<MyOrgNode[]>(_orgNodesUrl + `/${cid}`, {
          headers: { accept: 'application/json' },
        })
        .pipe(take(1))
    )
  }
}
