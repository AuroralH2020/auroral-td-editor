import { Property, Event } from '@core/models/monitor.model'
import { Subscription } from '@core/models/subscription.model'

export type JsonType<T = any> = {
  [x: string]: T
}

export function isPropery(object: any): object is Property {
  return 'pid' in object
}

export function isEvent(object: any): object is Event {
  return 'eid' in object
}

export function isProperySubscription(object: any): object is Subscription {
  return object.type === 'read' || object.type === 'write'
}

export function isEventSubscription(object: any): object is Subscription {
  return object.type === 'event'
}
