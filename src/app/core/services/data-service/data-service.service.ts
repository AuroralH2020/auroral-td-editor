import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { DataService, DataServiceCreate } from '@core/models/data-service.model'
import { Subscription, SubscriptionCreate } from '@core/models/subscription.model'
import { firstValueFrom, take } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  private _serviceUrl = '/api/ui/services'

  constructor(private _http: HttpClient) {}

  async getDataServices(): Promise<DataService[]> {
    return await firstValueFrom(this._http.get<DataService[]>(this._serviceUrl).pipe(take(1)))
  }

  async createDataService(dataService: DataServiceCreate): Promise<DataService> {
    return await firstValueFrom(this._http.post<DataService>(this._serviceUrl, dataService).pipe(take(1)))
  }

  async deleteDataService(dataService: DataService): Promise<void> {
    return await firstValueFrom(this._http.delete<void>(this._serviceUrl + `/${dataService.oid}`).pipe(take(1)))
  }

  async createSubscription(subscription: SubscriptionCreate): Promise<Subscription> {
    const serviceId = subscription.service.oid
    return await firstValueFrom(
      this._http.post<Subscription>(this._serviceUrl + `/${serviceId}/datastreams`, subscription).pipe(take(1))
    )
  }

  async deleteSubscription(subscription: SubscriptionCreate): Promise<void> {
    const serviceId = subscription.service.oid
    await firstValueFrom(
      this._http.delete(this._serviceUrl + `/${serviceId}/datastreams/${subscription.dsid}`).pipe(take(1))
    )
  }
}
