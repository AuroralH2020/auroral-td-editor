import { Component, OnInit } from '@angular/core'
import { NodesService } from '@core/services/nodes/nodes.service'

@Component({
  selector: 'app-node-profile',
  templateUrl: './node-profile.component.html',
  styleUrls: ['./node-profile.component.scss'],
})
export class NodeProfileComponent implements OnInit {

  constructor(private _nodeService: NodesService) {}

  ngOnInit(): void {}

  get agid(): string {
    return this._nodeService.myNode.agid
  }

  get organisation(): string {
    return this._nodeService.myNode.organisation
  }
}
