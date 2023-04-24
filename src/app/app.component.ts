import { Component, OnInit } from '@angular/core';
import { CollaborationService } from '@core/services/collaboration/collaboration.service';
import { ItemsService } from '@core/services/item/item.service';
import { NodesService } from '@core/services/nodes/nodes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  loading: boolean = false

  constructor(private _nodesService: NodesService, private _itemsService: ItemsService, private _collaborationService: CollaborationService) {
    return;
  }
  
  ngOnInit(): void {
    this.initApp()
  }

  async initApp() {
    this.loading = true
    await this._nodesService.initNode()
    await this._itemsService.initItems()
    await this._collaborationService.initCollaboration()
    this.loading = false
  }
}
