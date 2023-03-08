import { JsonType } from 'src/app/utils'
import { DataService } from './data-service.model'

export interface Subscription {
  enabled: boolean
  dsid: string
  oid: string
  agid: string
  cid: string
  iid: string
  type: string
  service: DataService
  requestUrl: string
  monitors: string
  frequency: number
  queryParams?: JsonType
  body?: JsonType
  // lastUpdated: number
  // created: number
}

export type SubscriptionCreate = {
  dsid: string | undefined
  oid: string
  iid: string
  type: string
  service: DataService
  enabled?: boolean
  frequency?: number
  queryParams?: JsonType
  body?: JsonType
}
