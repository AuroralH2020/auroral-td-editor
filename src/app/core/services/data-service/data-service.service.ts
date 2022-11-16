import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { DataService } from '@core/models/data-service.model'
import { Subscription, SubscriptionCreate } from '@core/models/subscription.model'
import { firstValueFrom, take } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  private _serviceUrl = '/api/ui/services'

  constructor(private _http: HttpClient) {}

  async fetchAllDataServices(): Promise<DataService[]> {
    return await firstValueFrom(this._http.get<DataService[]>(this._serviceUrl).pipe(take(1)))
  }

  async ctreateSubscription(subscription: SubscriptionCreate): Promise<Subscription> {
    const serviceId = subscription.service.serviceId
    return await firstValueFrom(
      this._http.post<Subscription>(this._serviceUrl + `/${serviceId}/datastreams`, subscription).pipe(take(1))
    )
  }

  async deleteSubscription(subscription: SubscriptionCreate): Promise<void> {
    const serviceId = subscription.service.serviceId
    await firstValueFrom(
      this._http.delete(this._serviceUrl + `/${serviceId}/datastreams/${subscription.dsid}`).pipe(take(1))
    )
  }
}
