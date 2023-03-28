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

export function stringSortListOfObjects(array: any[], key: string) {
  array.sort((e1, e2) => {
    if (!e1[key]) return -1
    if (!e2[key]) return 1
    if (e1[key] > e2[key]) return 1
    if (e1[key] < e2[key]) return -1
    return 0
  })
}

export function deepEqual(object1: any, object2: any) {
  const keys1 = Object.keys(object1)
  const keys2 = Object.keys(object2)
  if (keys1.length !== keys2.length) {
    return false
  }
  for (const key of keys1) {
    const val1 = object1[key]
    const val2 = object2[key]
    const areObjects = isObject(val1) && isObject(val2)
    if ((areObjects && !deepEqual(val1, val2)) || (!areObjects && val1 !== val2)) {
      return false
    }
  }
  return true
}

export function isObject(object: any) {
  return object != null && typeof object === 'object'
}

type Protocol = 'http' | 'https'

export function parseURL(str: string, protocol: Protocol | undefined): string {
  if (str.startsWith('http://') || str.startsWith('https://')) {
    return str
  }
  return protocol ? `${protocol}://${str}` : str
}

export function delay(time: number) {
  return new Promise(resolve => setTimeout(resolve, time));
}

export function inflect(num: number, zero: string, one: string, many: string) {
  switch(num) {
    case 0:
      return zero;
    case 1:
      return one;
    default:
      return many;
  }
}
