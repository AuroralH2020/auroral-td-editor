import { Property, Event } from './monitor.model'
import { Organisation } from './organisation.model'
import { Subscription } from './subscription.model'

export interface ServerItem {
  oid: string
  name: string
  type: string | null
  description: string | undefined
  owner: Organisation
  subscribers: Organisation[]
  properties: Property[]
  events: Event[]
  propertySubscriptions: Subscription[]
  eventSubscriptions: Subscription[]
  dataAccess: boolean
  created: Date
  lastUpdated: Date
}

export interface ServerItems {
  totalLength: number
  items: ServerItem[]
}
export interface Items {
  totalLength: number
  items: Item[]
}

export class Item {
  readonly oid: string
  readonly name: string
  readonly type: string | null
  readonly description: string | undefined
  readonly owner: Organisation
  readonly subscribers: Organisation[]
  readonly properties: Property[]
  readonly events: Event[]
  readonly propertySubscriptions: Subscription[]
  readonly eventSubscriptions: Subscription[]
  readonly dataAccess: boolean
  readonly created: Date
  readonly lastUpdated: Date

  constructor(data: ServerItem) {
    this.oid = data.oid
    this.name = data.name
    this.type = data.type
    this.description = data.description
    this.owner = data.owner
    this.subscribers = data.subscribers
    this.properties = data.properties
    this.events = data.events
    this.propertySubscriptions = data.propertySubscriptions
    this.eventSubscriptions = data.eventSubscriptions
    this.dataAccess = data.dataAccess
    this.created = data.created
    this.lastUpdated = data.lastUpdated
  }

  public get noMonitors(): boolean {
    return this.noProperties && this.noEvents
  }

  public get noProperties(): boolean {
    return this.properties ? this.properties.length <= 0 : true
  }

  public get noEvents(): boolean {
    return this.events ? this.events.length <= 0 : true
  }

  public get noSubscriptions(): boolean {
    return this.noPropertySubscriptions && this.noEventSubscriptions
  }

  public get noPropertySubscriptions(): boolean {
    return this.propertySubscriptions ? this.propertySubscriptions.length <= 0 : true
  }

  public get noEventSubscriptions(): boolean {
    return this.eventSubscriptions ? this.eventSubscriptions.length <= 0 : true
  }

  public get propertiesCount(): number {
    return this.properties?.length ?? 0
  }

  public get eventsCount(): number {
    return this.events?.length ?? 0
  }

  public get propertySubscriptionsCount(): number {
    return this.propertySubscriptions?.length ?? 0
  }

  public get eventSubscriptionsCount(): number {
    return this.eventSubscriptions?.length ?? 0
  }
}
