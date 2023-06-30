import { Item } from '@core/models/item.model'

export type JsonType<T = any> = {
  [x: string]: T
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

export function delay(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time))
}

export function inflect(num: number, zero: string, one: string, many: string) {
  switch (num) {
    case 0:
      return zero
    case 1:
      return one
    default:
      return many
  }
}

export function valueBasedOnItemType(item: Item, whenDevice: any, whenService: any, whenOther: any): any {
  switch (item.type?.title?.toLowerCase()) {
    case 'device':
      return whenDevice
    case 'service':
      return whenService
    default:
      return whenOther
  }
}

export function addAlpha(color: string, opacity: number): string {
  const _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
  return color + _opacity.toString(16).toUpperCase();
}