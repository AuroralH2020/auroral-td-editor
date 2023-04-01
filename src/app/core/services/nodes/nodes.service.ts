import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MyNode, MyOrgNode } from "@core/models/node.model";
import { firstValueFrom, take } from "rxjs";

const _orgNodesUrl = "/api/discovery/nodes/organisation";
const _myNodeUrl = "/api/agent/info";

@Injectable({
  providedIn: "root",
})
export class NodesService {

  public myNode!: MyNode;
  public myOrgNodes: MyOrgNode[] = [];

  constructor(private _http: HttpClient) {}

  async initNode() {
    await this._initMyNode()
    await this._initMyOrgNodes()
  }

  private async _initMyNode(): Promise<void> {
    this.myNode = await firstValueFrom(
      this._http
        .get<MyNode>(_myNodeUrl, {
          headers: { accept: "application/json" },
        })
        .pipe(take(1))
    );
  }

  private async _initMyOrgNodes(): Promise<void> {
    this.myOrgNodes = await firstValueFrom(
      this._http
        .get<MyOrgNode[]>(_orgNodesUrl, {
          headers: { accept: "application/json" },
        })
        .pipe(take(1))
    );
  }
}
