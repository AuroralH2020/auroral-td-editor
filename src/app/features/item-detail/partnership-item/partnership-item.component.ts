import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { PartnerUI } from '@core/models/collaboration.model'
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

  constructor(private _activatedRoute: ActivatedRoute, private _router: Router) {}

  ngOnInit(): void {
    this._activatedRoute.paramMap.pipe(map(() => window.history.state)).subscribe((res) => {
      this.item = res.item
      this.selectedPartner = res.selectedPartner
      if (!res.item || !res.selectedPartner) this._router.navigate(['/'])
    })
  }

  get organisation(): string {
    return this.selectedPartner.name
  }
}
