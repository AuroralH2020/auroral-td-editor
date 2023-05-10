import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { ContractServer, PartnerUI } from '@core/models/collaboration.model'
import { ItemUI } from '@core/models/item.model'
import { map } from 'rxjs'

@Component({
  selector: 'app-partnership-item',
  templateUrl: './partnership-item.component.html',
  styleUrls: ['./partnership-item.component.scss'],
})
export class PartnershipItemComponent implements OnInit {
  item!: ItemUI
  selectedPartner!: PartnerUI
  contractInfo!: ContractServer

  constructor(private _activatedRoute: ActivatedRoute, private _router: Router) {}

  ngOnInit(): void {
    this._activatedRoute.paramMap.pipe(map(() => window.history.state)).subscribe((res) => {
      this.item = res.item
      this.selectedPartner = res.selectedPartner
      this.contractInfo = res.contractInfo
      if (!res.item || !res.selectedPartner || !res.contractInfo) this._router.navigate(['/'])
    })
  }

  get organisation(): string {
    return this.selectedPartner.name
  }

  get oidOfmyFirstItemInContract(): string | undefined {
    const items = this.contractInfo.items
    if (items.length <= 0) return
    return this.contractInfo.items[0]?.oid
  }
}
