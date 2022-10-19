import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';

import { Inject, Injectable } from '@angular/core';
import { AuthTokens } from '@core/models/user.model';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, filter, finalize, map, switchMap, take, tap } from 'rxjs/operators';
import { UserService } from './user/user.service';
import { BroadcasterService } from './broadcaster/broadcaster.service';
import { CONSTANTS } from './constants';
import { SnackBarService } from './snack-bar/snack-bar.service';

@Injectable()
export class HTTPReqResInterceptor implements HttpInterceptor {
  isalreadyRefreshing: boolean = false;
  private tokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(
    @Inject('BASE_URL') private _baseUrl: string,
    private _broadcaster: BroadcasterService,
    private _user: UserService,
    private _snackBar: SnackBarService,
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this._broadcaster.broadcast(CONSTANTS.SHOW_LOADER, true);
    const newReq = req.clone({
      url: this._baseUrl + req.url,
      // headers: req.headers.set('custom_header', 'value'),
    });

    return next.handle(newReq).pipe(
      tap((e) => {
        if (e instanceof HttpResponse) {
          this.handleSuccess(e.body);
        }
      }),
      catchError((err) => this.handleError(newReq, next, err)),
      finalize(() => {
        this._broadcaster.broadcast(CONSTANTS.SHOW_LOADER, false);
      })
    );
  }

  handleError(newRequest: HttpRequest<any>, next: HttpHandler, err: any) {
    if (err instanceof HttpErrorResponse && err.status === 401) {
      return this.handle401(newRequest, next);
    }
    return this.error(err);
  }

  handleSuccess(body: any) {

  }

  addToken(request: HttpRequest<any>, newToken: AuthTokens) {
    return request.clone({
      headers: request.headers.set(CONSTANTS.AUTH_HEADER, `Bearer ${newToken.token}`),
    });
  }

  error(err: any) {
    if (err instanceof HttpErrorResponse) {
      this._snackBar.showError(err.message)
    } else {
      this._snackBar.showError(err.toString())
    }
    console.error(err)
    return throwError(() => err);
  }

  /* Refresh handler referred from https://www.intertech.com/angular-4-tutorial-handling-refresh-token-with-new-httpinterceptor/ */
  handle401(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isalreadyRefreshing) {
      //  don't want to have multiple refresh request when multiple unauthorized requests
      this.isalreadyRefreshing = true;
      // so that new subscribers don't trigger switchmap part and stay in queue till new token received
      this.tokenSubject.next(null);
      return this._user.renewToken().pipe(
        switchMap((newTokens: AuthTokens) => {
          if (newTokens) {
            // update token store & publish new token, yay!!
            this._user.storeTokens(newTokens);
            this.tokenSubject.next(newTokens);
            return next.handle(this.addToken(request, newTokens));
          }
          // no new token received | something messed up
          this._user.logout();
          return this.error('No refresh token found');
        }),
        catchError((error) => {
          this._user.logout();
          return this.error(error);
        }),
        finalize(() => (this.isalreadyRefreshing = false))
      );
    } else {
      /* if tab is kept running and this isalreadyRefreshing is still true, 
      user clicks another menu, req initiated but refresh failed */
      if (this.isalreadyRefreshing && request.url.includes('refresh')) {
        this._user.logout();
      }
      // new token ready subscribe -> every skipped request will be retried with fresh token
      return this.tokenSubject.pipe(
        filter((token: AuthTokens) => token != null),
        take(1), // complete the stream
        switchMap((token: AuthTokens) => {
          return next.handle(this.addToken(request, token));
        })
      );
    }
  }
}
