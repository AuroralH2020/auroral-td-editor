import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http'

import { Inject, Injectable } from '@angular/core'
import { Observable, throwError } from 'rxjs'
import { catchError, finalize, map, tap } from 'rxjs/operators'
import { BroadcasterService } from './broadcaster/broadcaster.service'
import { CONSTANTS } from './constants'
import { SnackBarService } from './snack-bar/snack-bar.service'

@Injectable()
export class HTTPReqResInterceptor implements HttpInterceptor {
  isalreadyRefreshing: boolean = false

  constructor(
    @Inject('BASE_URL') private _baseUrl: string,
    private _broadcaster: BroadcasterService,
    private _snackBar: SnackBarService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this._broadcaster.broadcast(CONSTANTS.SHOW_LOADER, true)
    const newReq = req.clone({
      url: this._baseUrl + req.url,
    })

    return next.handle(newReq).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          event = event.clone({ body: event.body?.message })
        }
        return event
      }),
      catchError((err) => this.error(err)),
      finalize(() => {
        this._broadcaster.broadcast(CONSTANTS.SHOW_LOADER, false)
      })
    )
  }
  error(err: any) {
    if (err instanceof HttpErrorResponse) {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      const error = err.error
      this._snackBar.showError(error.statusCodeReason ?? err.message)
      console.error(`Backend returned code ${err.status}`)
      console.error(error)
    } else {
      this._snackBar.showError(err.toString())
      console.error(err.toString())
    }
    // return an observable with a user-facing error message
    return throwError(() => err)
  }
}
