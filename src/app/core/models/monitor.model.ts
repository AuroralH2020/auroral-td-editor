export interface Property {
    measures: string | undefined
    pid: string
    monitors: string
    name?: string
    readWrite?: boolean
}

export interface Event {
    eid: string
    monitors: string
    name?: string
}