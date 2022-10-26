import { Organisation } from "./organisation.model"

export interface MyItem {
    oid: string
    name: string
    type: string | null
    contractors: Organisation[]
    created: Date
    lastUpdated: Date
}

export interface MyItems {
    totalLength: number
    items: MyItem[]
}

export interface Item {
    oid: string
    name: string
    type: string
    owner: Organisation
    created: Date
    lastUpdated: Date
}

export interface Items {
    totalLength: number
    items: Item[]
}