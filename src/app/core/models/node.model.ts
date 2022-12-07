import { DataService } from './data-service.model'
export interface Node {
  agid: string
  name: string
  base: string
  timeout: number
  dataServices?: DataService[] | undefined
}

export interface NodeCreate {
  name: string
  base: string
  timeout: number | undefined
}
