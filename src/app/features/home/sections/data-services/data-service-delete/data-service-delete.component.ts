import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from '@core/models/data-service.model';
import { DataServiceService } from '@core/services/data-service/data-service.service';
import { SnackBarService } from '@core/services/snack-bar/snack-bar.service';

@Component({
  selector: 'app-data-service-delete',
  templateUrl: './data-service-delete.component.html',
  styleUrls: ['./data-service-delete.component.scss']
})
export class DataServiceDeleteComponent implements OnInit {

  constructor(
    private _dataService: DataServiceService,
    private _snackbar: SnackBarService,
    public dialogRef: MatDialogRef<DataServiceDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public detail: DataService
  ) {}

  loading: boolean = false

  ngOnInit(): void {
  }

  async deleteDataService() {
    this.loading = true
      try {
        await this._dataService.deleteDataService(this.detail)
        this.loading = false
        this.close(true)
        this._snackbar.showMessage('Data service deleted.')
      } catch (error) {
        console.error(error)
        this.loading = false
      }
  }

  close(deleted: boolean): void {
    this.dialogRef.close(deleted)
  }

}
