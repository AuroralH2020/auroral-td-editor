import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { ItemUI } from '@core/models/item.model'
import { NodesService } from '@core/services/nodes/nodes.service'
import { map } from 'rxjs'

@Component({
  selector: 'app-node-item',
  templateUrl: './node-item.component.html',
  styleUrls: ['./node-item.component.scss'],
})
export class NodeItemComponent implements OnInit {
  item!: ItemUI

  constructor(private _activatedRoute: ActivatedRoute, private _router: Router, private _nodeService: NodesService) {}

  ngOnInit(): void {
    this._activatedRoute.paramMap.pipe(map(() => window.history.state)).subscribe((res) => {
      this.item = res.item
      if (!res.item) this._router.navigate(['/'])
    })
  }

  get organisation(): string {
    return this._nodeService.myNode.organisation
  }
}
