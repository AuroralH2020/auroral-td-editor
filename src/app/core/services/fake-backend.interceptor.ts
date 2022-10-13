import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { UserLoginDetail, UserLoginServerResponse, UserSignupDetail } from '@core/models/user.model';

interface FakeDbUser {
  login: UserLoginDetail;
  response: UserLoginServerResponse;
}

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

  static users: FakeDbUser[] = [
    {
      login: {
        email: 'jonny@cache.com',
        password: '12345',
      },
      response: {
        tokens: {
          accessToken: 'fakeAccessToken',
          refreshToken: 'fakeRefreshToken',
        },
        profile: {
          name: 'Jonny Cache',
          email: 'jonny@cache.com'
        }
      },
    },
    {
      login: {
        email: 'casual@check.com',
        password: '54321',
      },
      response: {
        tokens: {
          accessToken: 'fakeAccessToken',
          refreshToken: 'fakeRefreshToken',
        },
        profile: {
          name: 'Casual Check',
          email: 'casual@check.com'
        }
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
        case url.endsWith('/users/login') && method === 'POST':
          return authenticate();
        case url.endsWith('/users/signup') && method === 'POST':
          return register();
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
        email: obj.email,
        password: obj.password
      };
      for (const user of FakeBackendInterceptor.users) {
        if (user.login.email === login.email && user.login.password === login.password) {
          return ok(user.response);
        }
      }
      return error('Username or password is incorrect');
    }

    function register() {
      const signup: UserSignupDetail = body;
      if (FakeBackendInterceptor.users.some((e) => e.login.email === signup.email)) {
        return error('User with email "' + signup.email + '" already exists');
      }
      FakeBackendInterceptor.users.push(
        {
          login: {
            email: signup.email,
            password: signup.password,
          },
          response: {
            tokens: {
              accessToken: 'fakeAccessToken',
              refreshToken: 'fakeRefreshToken',
            },
            profile: {
              name: signup.name,
              email: signup.email,
            }
          }
        }
      );
      return ok();
    }

    // helper functions

    function ok(body?: any) {
      return of(new HttpResponse({ status: 200, body }))
    }

    function error(message: string) {
      return throwError(() => message);
    }
  }
}
