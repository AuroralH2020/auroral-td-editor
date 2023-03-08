import { Component, Input, OnInit } from '@angular/core';
import { SnackBarService } from '@core/services/snack-bar/snack-bar.service';

@Component({
  selector: 'app-copy-to-clipboard',
  templateUrl: './copy-to-clipboard.component.html',
  styleUrls: ['./copy-to-clipboard.component.scss']
})
export class CopyToClipboardComponent implements OnInit {

  @Input() value: any
  @Input() message: string = 'Text copied to clipboard'

  constructor(private _snackbar: SnackBarService) { }

  ngOnInit(): void {
  }

  notify() {
    this._snackbar.showMessage(this.message)
  }

}
