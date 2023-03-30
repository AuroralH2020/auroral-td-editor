import { Component, OnInit } from '@angular/core';
import { NodesService } from '@core/services/nodes/nodes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  loading: boolean = false

  constructor(private _nodesService: NodesService) {
    return;
  }
  
  ngOnInit(): void {
    this.initApp()
  }

  async initApp() {
    this.loading = true
    await this._nodesService.initNode()
    this.loading = false
  }
}
