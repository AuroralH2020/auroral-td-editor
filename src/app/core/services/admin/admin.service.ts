import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { firstValueFrom, take } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private _adminUrl = '/api/ui/admin'

  constructor(private _http: HttpClient) {}

  async refresh(): Promise<void> {
    return await firstValueFrom(this._http.get<void>(this._adminUrl + '/refresh').pipe(take(1)))
  }
}
