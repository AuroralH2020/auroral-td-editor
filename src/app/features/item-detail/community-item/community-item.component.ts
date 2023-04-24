import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { ItemUI } from '@core/models/item.model'
import { map } from 'rxjs'

@Component({
  selector: 'app-community-item',
  templateUrl: './community-item.component.html',
  styleUrls: ['./community-item.component.scss'],
})
export class CommunityItemComponent implements OnInit {
  item!: ItemUI

  constructor(private _activatedRoute: ActivatedRoute, private _router: Router) {}

  ngOnInit(): void {
    this._activatedRoute.paramMap.pipe(map(() => window.history.state)).subscribe((res) => {
      this.item = res.item
      if (!res.item) this._router.navigate(['/'])
    })
  }
}
