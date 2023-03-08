import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NodesService } from '@core/services/nodes/nodes.service';
import { SnackBarService } from '@core/services/snack-bar/snack-bar.service';
import { Node } from '@core/models/node.model'

@Component({
  selector: 'app-node-unregister',
  templateUrl: './node-unregister.component.html',
  styleUrls: ['./node-unregister.component.scss']
})
export class NodeUnregisterComponent implements OnInit {

  constructor(
    private _nodeService: NodesService,
    private _snackbar: SnackBarService,
    public dialogRef: MatDialogRef<NodeUnregisterComponent>,
    @Inject(MAT_DIALOG_DATA) public detail: Node
  ) {}

  loading: boolean = false

  ngOnInit(): void {
  }

  async unregisterNode() {
    this.loading = true
      try {
        this.dialogRef.disableClose = true;
        await this._nodeService.unregisterNode(this.detail)
        this.loading = false
        this.close(true)
        this._snackbar.showMessage('Node unregistered.')
      } catch (error) {
        console.error(error)
        this.loading = false
      }
  }

  close(unregistered: boolean): void {
    this.dialogRef.close(unregistered)
  }

}
