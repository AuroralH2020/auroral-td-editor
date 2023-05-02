import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NodesService } from '@core/services/nodes/nodes.service';

@Component({
  selector: 'app-my-org-query',
  templateUrl: './my-org-query.component.html',
  styleUrls: ['./my-org-query.component.scss']
})
export class MyOrgQueryComponent implements OnInit {

  @ViewChild('result') result!: ElementRef

  constructor(private _nodesService: NodesService) {}

  runQuery = (query: string): Promise<any> => {
    const agids = this._nodesService.myOrgNodes.map((element) => {
      return element.agid
    })
    return this._nodesService.queryRemoteNodes(agids, query)
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {}

  get organisation(): string {
    return this._nodesService.myNode.organisation
  }

}
