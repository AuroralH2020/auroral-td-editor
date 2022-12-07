import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from '@core/models/data-service.model';
import { DataServiceDeleteComponent } from '../data-service-delete/data-service-delete.component';

@Component({
  selector: 'app-data-service-detail',
  templateUrl: './data-service-detail.component.html',
  styleUrls: ['./data-service-detail.component.scss']
})
export class DataServiceDetailComponent implements OnInit {

  @Input() detail!: DataService
  @Input() deleteCallback!: (detail: DataService) => void

  constructor(private _dialog: MatDialog) {}

  ngOnInit(): void {}

  openDeleteDataService(): void {
    const dialogRef = this._dialog.open(DataServiceDeleteComponent, {
      data: this.detail,
    })
    dialogRef.afterClosed().subscribe((result: boolean | undefined) => {
      if (result) {
        this.deleteCallback(this.detail)
      }
    })
  }

}
