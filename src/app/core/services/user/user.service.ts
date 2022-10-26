import {
  AuthTokens,
  DecodedToken,
  UserLoginDetail,
  UserProfile,
} from "@core/models/user.model";
import { HttpClient, HttpParams } from "@angular/common/http";

import { Injectable } from "@angular/core";
import { CONSTANTS } from "../constants";
import jwt_decode from "jwt-decode";
import { firstValueFrom, take } from "rxjs";
import { ServerResponse } from "@core/models/server.model";
import { generateRandomColor } from "../../../utils";

@Injectable({ providedIn: "root" })
export class UserService {
  private _loginUrl = "/api/ui/login";

  private _color: string;

  constructor(private _http: HttpClient) {
    this._color = generateRandomColor();
  }

  get isLoggedIn() {
    const token = this.token;
    return token && token != "undefined" ? true : false;
  }

  get token() {
    return localStorage.getItem("token");
  }

  get refreshToken() {
    return localStorage.getItem(CONSTANTS.REFRESH_TOKEN);
  }

  get profile(): UserProfile | undefined {
    const token = this.token;
    try {
      const decoded = jwt_decode<DecodedToken>(token ?? "");
      return {
        name: decoded.name,
        email: decoded.email,
        color: this._color,
      };
    } catch {
      return undefined;
    }
  }

  async login(userdetails: UserLoginDetail): Promise<AuthTokens> {
    const body = new HttpParams({ fromObject: { ...userdetails } });
    return await firstValueFrom(
      this._http
        .post<ServerResponse>(this._loginUrl, body.toString())
        .pipe(take(1))
    ).then((res) => res.message);
  }

  logout() {
    localStorage.clear();
  }

  storeTokens(tokens: AuthTokens) {
    localStorage.setItem("token", tokens.token);
    localStorage.setItem(CONSTANTS.REFRESH_TOKEN, tokens.refreshToken);
  }

  renewToken() {
    const body = new HttpParams().set(
      CONSTANTS.REFRESH_TOKEN,
      this.refreshToken!
    );
    return this._http.post<AuthTokens>("<refresh_token_url>", body.toString());
  }
}
