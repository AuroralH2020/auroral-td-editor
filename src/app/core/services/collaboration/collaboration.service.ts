import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Community, ContractServer, PartnerConvert, PartnerServer, PartnerUI } from '@core/models/collaboration.model'
import { firstValueFrom, take } from 'rxjs'

const _communitiesUrl = '/api/collaboration/communities'
const _partnersInfoUrl = '/api/collaboration/partners'

const _contractsInfoUrl = '/api/collaboration/contracts'

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
        .get<Community[]>(_communitiesUrl, {
          headers: { accept: 'application/json' },
        })
        .pipe(take(1))
    )
  }

  private async _initNodePartnerships(): Promise<void> {
    const cids = await firstValueFrom(
      this._http
        .get<string[]>(_partnersInfoUrl, {
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
        .get<PartnerServer>(_partnersInfoUrl + `/${cid}`, {
          headers: { accept: 'application/json' },
        })
        .pipe(take(1))
    )
    this.partnerships!.push(PartnerConvert.toPartnerUI(partnerServer, cid))
  }

  public async getContractInfo(cid: string): Promise<ContractServer> {
    return await firstValueFrom(
      this._http
        .get<ContractServer>(_contractsInfoUrl + `/${cid}`, {
          headers: { accept: 'application/json' },
        })
        .pipe(take(1))
    )
  }
}
