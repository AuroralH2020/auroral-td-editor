import { Node } from './node.model'

export type Domain = 'Mobility' | 'Tourism' | 'Energy' | 'DairyFarming' | 'CircularEconomy'
export interface DataService {
    online: boolean
    name: string
    node: Node
    oid: string
    base: string
    description: string
    domain: Domain | undefined
}

export interface DataServiceCreate {
    name: string
    description: string
    base: string
    node: Node
}