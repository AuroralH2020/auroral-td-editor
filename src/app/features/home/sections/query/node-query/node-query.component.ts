import { Component } from '@angular/core'
import { NodesService } from '@core/services/nodes/nodes.service'

@Component({
  selector: 'app-node-query',
  templateUrl: './node-query.component.html',
  styleUrls: ['./node-query.component.scss'],
})
export class NodeQueryComponent {
  constructor(private _nodesService: NodesService) {}

  ngOnDestroy() {}

  runQuery = (query: string): Promise<any> => {
    return this._nodesService.queryLocalNode(query)
  }
}
