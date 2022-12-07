export interface Node {
    agid: string
    name: string
    base: string
    timeout: number
}

export interface NodeCreate {
    name: string
    base: string
    timeout: number | undefined
}