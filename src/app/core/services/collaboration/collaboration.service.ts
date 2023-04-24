import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Community, PartnerConvert, PartnerServer, PartnerUI } from '@core/models/collaboration.model'
import { MyOrgNode } from '@core/models/node.model'
import { firstValueFrom, take } from 'rxjs'

const _nodeCommunitiesUrl = '/api/collaboration/communities'
const _nodePartnersCidUrl = '/api/collaboration/partners'
const _nodePartnersInfoUrl = '/api/collaboration/partners'

@Injectable({
  providedIn: 'root',
})
export class CollaborationService {
  constructor(private _http: HttpClient) {}

  communities: Community[] | undefined
  partnerships: PartnerUI[] | undefined

  public async initCollaboration() {
    await Promise.all([this._initNodeCommunities(), this._initNodePartnerships()])
  }

  private async _initNodeCommunities(): Promise<void> {
    this.communities = await firstValueFrom(
      this._http
        .get<Community[]>(_nodeCommunitiesUrl, {
          headers: { accept: 'application/json' },
        })
        .pipe(take(1))
    )
  }

  private async _initNodePartnerships(): Promise<void> {
    const cids = await firstValueFrom(
      this._http
        .get<string[]>(_nodePartnersCidUrl, {
          headers: { accept: 'application/json' },
        })
        .pipe(take(1))
    )
    this.partnerships ??= []
    await Promise.all(cids.map((element) => this._initNodePartnership(element)))
  }

  private async _initNodePartnership(cid: string): Promise<void> {
    const partnerServer = await firstValueFrom(
      this._http
        .get<PartnerServer>(_nodePartnersInfoUrl + `/${cid}`, {
          headers: { accept: 'application/json' },
        })
        .pipe(take(1))
    )
    this.partnerships!.push(PartnerConvert.toPartnerUI(partnerServer, cid))
  }
}
