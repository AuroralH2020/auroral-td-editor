import { Component, OnInit } from '@angular/core'
import { NodesService } from '@core/services/nodes/nodes.service'
import { Node } from '@core/models/node.model'
import { MatDialog } from '@angular/material/dialog'
import { NodeRegisterComponent } from './node-register/node-register.component'
import { MatTableDataSource } from '@angular/material/table'

@Component({
  selector: 'app-nodes',
  templateUrl: './nodes.component.html',
  styleUrls: ['./nodes.component.scss'],
})
export class NodesComponent implements OnInit {
  nodesColumns: string[] = ['name', 'agid', 'base']
  nodes: MatTableDataSource<Node> = new MatTableDataSource()

  loadingNodes: boolean = false

  constructor(private _dialog: MatDialog, private _nodes: NodesService) {}

  ngOnInit(): void {
    this.fetchAllNodes()
  }

  async fetchAllNodes() {
    try {
      this.loadingNodes = true
      this.nodes.data = await this._nodes.getNodes()
    } finally {
      this.loadingNodes = false
    }
  }

  openRegisterNode(): void {
    const dialogRef = this._dialog.open(NodeRegisterComponent)
    dialogRef.afterClosed().subscribe((result: Node | undefined) => {
      if (result) {
        this.nodes.data = [...this.nodes.data, result]
      }
    })
  }

  deleteNode = (node: Node) => {
    const index = this.nodes.data.findIndex((element) => element.agid === node.agid)
    if (index > -1) {
      const data = [...this.nodes.data]
      data.splice(index, 1)
      this.nodes.data = data
    }
  }
}
