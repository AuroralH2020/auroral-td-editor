import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { AuthTokens, UserLoginDetail } from '@core/models/user.model';
import { ServerResponse } from '@core/models/server.model';

interface FakeDbUser {
  login: UserLoginDetail;
  response: AuthTokens;
}

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

  static users: FakeDbUser[] = [
    {
      login: {
        username: 'jonny@cache.com',
        password: '12345',
      },
      response: {
        token: "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhZG1pbiIsIm5hbWUiOiJBZG1pbiBCYXZlbmlyIiwiZW1haWwiOiJhZG1pbkBiYXZlbmlyLmV1IiwiYXVkIjoiYXV0aGVudGljYXRpb24iLCJpYXQiOjE2NjYxMDYxMTV9._npT7-xJkHav3o-C7CgIxMo3ZJVR1J0mp9bT0Jzk88R-s9y5OAD72QcNGDpHsSOgIh7nkfqy1297rCbhuSls6A",
        refreshToken: "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhZG1pbiIsIm5hbWUiOiJBZG1pbiBCYXZlbmlyIiwiZW1haWwiOiJhZG1pbkBiYXZlbmlyLmV1IiwiYXVkIjoicmVmcmVzaCIsImlhdCI6MTY2NjEwNjExNX0.e6V1dZoICH7QJUjuBAa0wTyxnwj7PSsOteBkxt7gsmZ7edknj70Vyrh8P74o4YUgXlgQNFdU2wOGFoeIN3hjLw"
      }
    },
    {
      login: {
        username: 'casual@check.com',
        password: '54321',
      },
      response: {
        token: "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhZG1pbiIsIm5hbWUiOiJBZG1pbiBCYXZlbmlyIiwiZW1haWwiOiJhZG1pbkBiYXZlbmlyLmV1IiwiYXVkIjoiYXV0aGVudGljYXRpb24iLCJpYXQiOjE2NjYxMDYxMTV9._npT7-xJkHav3o-C7CgIxMo3ZJVR1J0mp9bT0Jzk88R-s9y5OAD72QcNGDpHsSOgIh7nkfqy1297rCbhuSls6A",
        refreshToken: "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhZG1pbiIsIm5hbWUiOiJBZG1pbiBCYXZlbmlyIiwiZW1haWwiOiJhZG1pbkBiYXZlbmlyLmV1IiwiYXVkIjoicmVmcmVzaCIsImlhdCI6MTY2NjEwNjExNX0.e6V1dZoICH7QJUjuBAa0wTyxnwj7PSsOteBkxt7gsmZ7edknj70Vyrh8P74o4YUgXlgQNFdU2wOGFoeIN3hjLw"
      },
    },
  ]

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = request;

    // wrap in delayed observable to simulate server api call
    return of(null)
      .pipe(mergeMap(handleRoute))
      .pipe(materialize()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
      .pipe(delay(500))
      .pipe(dematerialize());

    function handleRoute() {
      switch (true) {
        case url.endsWith('/fake/login') && method === 'POST':
          return authenticate();
        default:
          // pass through any requests not handled above
          return next.handle(request);
      }
    }

    // route functions

    function authenticate() {
      const params = new URLSearchParams(body);
      const entries = params.entries();
      const obj = Object.fromEntries(entries);
      const login: UserLoginDetail = {
        username: obj.username,
        password: obj.password
      };
      for (const user of FakeBackendInterceptor.users) {
        if (user.login.username === login.username && user.login.password === login.password) {
          return ok(user.response);
        }
      }
      return error('Username or password is incorrect');
    }

    // helper functions
    function ok(body?: any) {
      return of(new HttpResponse({
        status: 200, body: {
          error: false,
          statusCode: 200,
          statusCodeReason: "OK",
          contentType: "application/json",
          message: body
        }
      }))
    }

    function error(message: string) {
      return throwError(() => message);
    }
  }
}
