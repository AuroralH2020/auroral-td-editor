import { AuthTokens, UserLoginDetail } from '@core/models/user.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { CONSTANTS } from '../constants';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

  constructor(private _http: HttpClient) { }

  login(userdetails: UserLoginDetail) {
    const body = new HttpParams({ fromObject: { ...userdetails } });
    return this._http.post<AuthTokens>('/users/login', body.toString(), {
      headers: this.headers,
    });
  }

  logout() {
    const body = new HttpParams().set(CONSTANTS.REFRESH_TOKEN, this.getRefreshToken()!);
    this._http.post('/users/logout', body.toString(), { headers: this.headers }).subscribe({
      next: () => window.location.reload(),
      complete: () => {
        localStorage.clear();
      },
      error: () => {
        localStorage.clear();
        window.location.reload();
      },
    });
  }

  get isLoggedIn() {
    return this.getToken() ? true : false;
  }

  storeTokens(tokens: AuthTokens) {
    localStorage.setItem('token', tokens.accessToken);
    localStorage.setItem(CONSTANTS.REFRESH_TOKEN, tokens.refreshToken);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  refreshToken() {
    const body = new HttpParams().set(CONSTANTS.REFRESH_TOKEN, this.getRefreshToken()!);
    return this._http.post<AuthTokens>('<refresh_token_url>', body.toString(), {
      headers: this.headers,
    });
  }

  getRefreshToken() {
    return localStorage.getItem(CONSTANTS.REFRESH_TOKEN);
  }
}
