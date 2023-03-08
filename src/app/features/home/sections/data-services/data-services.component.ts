import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { DataService } from '@core/models/data-service.model'
import { DataServiceService } from '@core/services/data-service/data-service.service'
import { NodesService } from '@core/services/nodes/nodes.service'
import { Node } from '@core/models/node.model'
import { DataServiceCreateComponent } from './data-service-create/data-service-create.component'
import { MatTableDataSource } from '@angular/material/table'

@Component({
  selector: 'app-data-services',
  templateUrl: './data-services.component.html',
  styleUrls: ['./data-services.component.scss'],
})
export class DataServicesComponent implements OnInit {
  dataServicesColumns: string[] = ['name', 'oid', 'node']

  constructor(
    private _dialog: MatDialog,
    private _dataService: DataServiceService,
    private _nodeService: NodesService
  ) {}

  ngOnInit(): void {
    this.fetchAllDataServices()
  }

  loadingDataServices: boolean = false
  loadingNodes: boolean = false
  dataServices: MatTableDataSource<DataService> = new MatTableDataSource()

  async fetchAllDataServices() {
    try {
      this.loadingDataServices = true
      this.dataServices.data = await this._dataService.getDataServices()
    } finally {
      this.loadingDataServices = false
    }
  }

  async openCreateDataService(): Promise<void> {
    this.loadingNodes = true
    try {
      const nodes: Node[] = await this._nodeService.getNodes()
      const dialogRef = this._dialog.open(DataServiceCreateComponent, {
        data: nodes,
      })
      dialogRef.afterClosed().subscribe((result: DataService | undefined) => {
        if (result) {
          this.dataServices.data = [...this.dataServices.data, result]
        }
      })
    } finally {
      this.loadingNodes = false
    }
  }

  deleteDataService = (dataService: DataService) => {
    const index = this.dataServices.data.findIndex((element) => element.oid === dataService.oid)
    if (index > -1) {
      const data = [...this.dataServices.data]
      data.splice(index, 1)
      this.dataServices.data = data
    }
  }
}
