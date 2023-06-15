import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { ItemUI } from '@core/models/item.model'
import { ItemsService } from '@core/services/item/item.service'
import { NodesService } from '@core/services/nodes/nodes.service'
import { map } from 'rxjs'

@Component({
  selector: 'app-my-org-item',
  templateUrl: './my-org-item.component.html',
  styleUrls: ['./my-org-item.component.scss'],
})
export class MyOrgItemComponent {
  item!: ItemUI

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _nodeService: NodesService,
    private _itemsService: ItemsService
  ) {}

  ngOnInit(): void {
    this._activatedRoute.paramMap.pipe(map(() => window.history.state)).subscribe((res) => {
      this.item = res.item
      if (!res.item) this._router.navigate(['/'])
    })
  }

  get organisation(): string {
    return this._nodeService.myNode.organisation
  }

  get oidOfmyNodesFirstItem(): string | undefined {
    const items = this._itemsService.myItems
    if (!items || items.length <= 0) return
    return items[0].oid
  }
}
