import { Component, OnInit } from '@angular/core';
import { SnackBarService } from '@core/services/snack-bar/snack-bar.service';

@Component({
  selector: 'app-node-pictogram',
  templateUrl: './node-pictogram.component.html',
  styleUrls: ['./node-pictogram.component.scss']
})
export class NodePictogramComponent implements OnInit {

  hidden: boolean = true

  constructor(private _snackbar: SnackBarService) { }

  ngOnInit(): void {
  }

  toggleVisibility() {
    this.hidden = !this.hidden
  }

  copyToClipboard() {
    navigator.clipboard.writeText('f3ade82a-4ff2-4f63-a2cf-d9e92cbf89d8')
    this._snackbar.showMessage('Agid coppied to clipboard')
  }

}
