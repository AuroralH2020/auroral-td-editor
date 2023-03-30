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
  propname?: Data
  pid?: Data
  proptype?: Data
  datatype?: Data
  units?: Data
  desc?: Data
}

export interface Data {
  type?: string
  value?: string
  'xml:lang'?: string
}

//------- UI -------//

export interface ItemUI {
  oid: string
  itemtype: string
  itemname?: string
  properties?: PropertyUI[]
}

export interface PropertyUI {
  pid: string
  type?: string
  propname?: string
  datatype?: string
  units?: string
  desc?: string
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
      itemtype: item.itemtype?.value ?? 'Device',
      itemname: item.itemname?.value,
      properties: property ? [property] : undefined,
    }
  }

  public static toPropertyUI(item: ItemServer): PropertyUI | null {
    if (!item.pid) return null
    if (!item.pid.value) return null
    return {
      pid: item.pid.value,
      type: item.proptype?.value,
      propname: item.propname?.value,
      datatype: item.datatype?.value,
      units: item.units?.value,
      desc: item.desc?.value,
    }
  }
}
