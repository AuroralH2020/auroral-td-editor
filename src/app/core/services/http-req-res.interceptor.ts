import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http'

import { Injectable } from '@angular/core'
import { Observable, throwError } from 'rxjs'
import { catchError, map } from 'rxjs/operators'
import { SnackBarService } from './snack-bar/snack-bar.service'

@Injectable()
export class HTTPReqResInterceptor implements HttpInterceptor {
  isalreadyRefreshing: boolean = false

  constructor(
    private _snackBar: SnackBarService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const newReq = req.clone({
      url: req.url,
      setHeaders: {},
    })

    return next.handle(newReq).pipe(
      map((event: HttpEvent<any>) => {
        return event
      }),
      catchError((err) => this.error(err))
    )
  }
  error(err: any) {
    if (err instanceof HttpErrorResponse) {
      const error = err.error
      this._snackBar.showError(error.statusCodeReason ?? err.message)
      console.error(`Backend returned code ${err.status}`)
      console.error(error)
    } else {
      this._snackBar.showError(err.toString())
      console.error(err.toString())
    }
    return throwError(() => err)
  }
}
