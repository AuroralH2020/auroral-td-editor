import { Injectable, OnDestroy } from '@angular/core'
import { MessageService } from 'primeng/api'

@Injectable({
  providedIn: 'root',
})
export class SnackBarService {
  constructor(private _snackBar: MessageService) {}
  showError(message: string) {
    this._snackBar.add({ key: 'toast', severity: 'error', summary: 'Error', detail: message })
  }

  showMessage(message: string) {
    this._snackBar.add({ key: 'toast', severity: 'info', summary: 'Info', detail: message })
  }
}
