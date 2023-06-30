import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { ItemLocation } from '@core/models/item.model'
import { firstValueFrom, map, take } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor(private _http: HttpClient) {}

  async getLocations(address: string): Promise<ItemLocation[]> {
    let params = new HttpParams()
    params = params.append('addressdetails', '1')
    params = params.append('street', address)
    params = params.append('format', 'json')
    params = params.append('limit', '5')
    return await firstValueFrom(
      this._http
        .get<any[]>('https://nominatim.openstreetmap.org', {
          params,
          headers: {
            accept: 'application/json',
          },
        })
        .pipe(
          map((value) => {
            return value.map((loc) => {
              return {
                display_name: _parseAddress(loc.address),
                lat: loc.lat,
                lon: loc.lon,
              }
            })
          })
        )
        .pipe(take(1))
    )
  }
}

function _parseAddress(address: any): string {
  const road = address.road
  const number = address.house_number
  const city = address.city
  const town = address.town
  const country = address.country
  let addr = ''
  if (road) {
    addr += road
  }
  if (number && addr.length != 0) {
    addr += ' ' + number
  }
  if (city) {
    if (addr.length != 0) {
      addr += ', '
    }
    addr += city
  } else if (town) {
    if (addr.length != 0) {
      addr += ', '
    }
    addr += town
  }
  if (country) {
    if (addr.length != 0) {
      addr += ', '
    }
    addr += country
  }
  return addr
}
