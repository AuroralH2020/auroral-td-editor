import { IconProp } from '@fortawesome/fontawesome-svg-core'

type FormType = 'readproperty' | 'writeproperty'

export interface Item {
  type?: ItemType
  info?: ItemInfo
  properties?: ItemProp[]
  events?: ItemEvent[]
}

export interface ItemInfo {
  title?: string
  domain?: ItemDomain
  description?: string
  manufacturer?: string
  model?: string
  serialNumber?: string
  location?: ItemLocation
}

export interface ItemLocation {
  display_name: string
  lat?: string
  lon?: string
}

export interface ItemType {
  id: string
  title: string
  icon: IconProp
  color: string
}

export interface ItemDomain {
  name: string
  icon: IconProp
  color: string
}

export interface ItemProp {
  id: string
  name: string
  propType: PropType
  unitType: string
  unitDataType: PropUnitDataType
  description: string
  forms: PropForm[]
}

export interface PropUnitDataType {
  name: string
  icon: string
}

export interface PropType {
  name: string
  url: string
}

export interface PropForm {
  id: string
  url: string
  type: FormType
}

export interface ItemEvent {
  id: string
  name: string
  description: string
  data: string
}

export interface EditMode {
  active: boolean
  prevRoute: string
}