import { Component, Inject, OnInit } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { Monitor } from '@core/models/monitor.model'

@Component({
  selector: 'app-item-monitors-dialog',
  templateUrl: './item-monitors-dialog.component.html',
  styleUrls: ['./item-monitors-dialog.component.scss'],
})
export class ItemMonitorsDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ItemMonitorsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Monitor[]
  ) {}

  ngOnInit(): void {}

  close(): void {
    this.dialogRef.close();
  }
}
