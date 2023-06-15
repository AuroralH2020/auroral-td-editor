import { Component, Input, OnInit } from '@angular/core';
import { NodesService } from '@core/services/nodes/nodes.service';
import { SnackBarService } from '@core/services/snack-bar/snack-bar.service';
import { Size } from '@shared/components/pictograms/pictogram/pictogram.component';

@Component({
  selector: 'app-node-pictogram',
  templateUrl: './node-pictogram.component.html',
  styleUrls: ['./node-pictogram.component.scss']
})
export class NodePictogramComponent implements OnInit {

  @Input() showIcon: boolean = true
  @Input() size: Size = 'normal'

  hidden: boolean = true

  constructor(private _snackbar: SnackBarService, private _nodeService: NodesService) { }

  ngOnInit(): void {
  }

  toggleVisibility() {
    this.hidden = !this.hidden
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.agid)
    this._snackbar.showMessage('Agid coppied to clipboard')
  }

  get agid(): string {
    return this._nodeService.myNode.agid
  }

}
