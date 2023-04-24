import { Component, OnInit } from '@angular/core'
import { NodesService } from '@core/services/nodes/nodes.service'

@Component({
  selector: 'app-open-node-profile',
  templateUrl: './open-node-profile.component.html',
  styleUrls: ['./open-node-profile.component.scss'],
})
export class OpenNodeProfileComponent implements OnInit {
  opened: boolean = false

  constructor(private _nodeService: NodesService) {}

  ngOnInit(): void {}

  openProfile() {
    this.opened = true
  }

  get agid(): string {
    return this._nodeService.myNode.agid
  }

  get organisation(): string {
    return this._nodeService.myNode.organisation
  }
}
