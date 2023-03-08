import { Component, Input, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { Node } from '@core/models/node.model'
import { NodeUnregisterComponent } from '../node-unregister/node-unregister.component'

@Component({
  selector: 'app-nodes-detail',
  templateUrl: './nodes-detail.component.html',
  styleUrls: ['./nodes-detail.component.scss'],
})
export class NodesDetailComponent implements OnInit {
  @Input() detail!: Node
  @Input() deleteProtected: boolean = false
  @Input() deleteCallback!: (detail: Node) => void

  constructor(private _dialog: MatDialog) {}

  ngOnInit(): void {}

  openUnregisterNode(): void {
    const dialogRef = this._dialog.open(NodeUnregisterComponent, {
      data: this.detail,
    })
    dialogRef.afterClosed().subscribe((result: boolean | undefined) => {
      if (result) {
        this.deleteCallback(this.detail)
      }
    })
  }
}
