//------- SERVER -------//

export interface Items {
  head: Head
  results: Results
}

export interface Head {
  vars: string[]
}

export interface Results {
  bindings: ItemServer[]
}

export interface ItemServer {
  oid?: Data
  itemname?: Data
  itemtype?: Data
  itemdesc?:   Data;
  pid?: Data
  propname?: Data
  proptype?: Data
  propdesc?: Data
  datatype?: Data
  dataunits?: Data
}

export interface Data {
  type?: string
  value?: string
  'xml:lang'?: string
}

//------- UI -------//

export interface ItemUI {
  oid: string
  name?: string
  type: string
  desc?: string
  properties?: PropertyUI[]
}

export interface PropertyUI {
  pid: string
  type?: string
  name?: string
  desc?: string
  datatype?: string
  dataunits?: string
}

export class ItemConvert {
  public static toItemsUI(items: Items): ItemUI[] {
    let itemsUI: ItemUI[] = []
    for (const item of items.results.bindings) {
      const candidate = itemsUI.find((element) => element.oid === item.oid?.value)
      if (candidate) {
        const prop = ItemConvert.toPropertyUI(item)
        if (prop) {
          candidate.properties ??= []
          candidate.properties.push(prop)
        }
      } else {
        const itemUI = ItemConvert.toItemUI(item)
        if (itemUI) {
          itemsUI.push(itemUI)
        }
      }
    }
    return itemsUI
  }

  public static toItemUI(item: ItemServer): ItemUI | null {
    if (!item.oid) return null
    if (!item.oid.value) return null
    const property = ItemConvert.toPropertyUI(item)
    return {
      oid: item.oid.value,
      name: item.itemname?.value,
      type: item.itemtype?.value ?? 'Device',
      desc: item.itemdesc?.value,
      properties: property ? [property] : undefined,
    }
  }

  public static toPropertyUI(item: ItemServer): PropertyUI | null {
    if (!item.pid) return null
    if (!item.pid.value) return null
    return {
      pid: item.pid.value,
      name: item.propname?.value,
      type: item.proptype?.value,
      desc: item.propdesc?.value,
      datatype: item.datatype?.value,
      dataunits: item.dataunits?.value,
    }
  }
}
