import { Injectable, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {


  constructor(private _snackBar: MatSnackBar) {

  }
   showError(message: string) {
    this._snackBar.open(message, 'Dismiss', {
      duration: 5000,
    })
  }

  showMessage(message: string) {
    this._snackBar.open(message, 'Dismiss', {
      duration: 5000,
    })
  }
}
