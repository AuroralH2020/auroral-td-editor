export interface Subscription {
    dsid: string // Data Stream ID
    cid: string
    agid: string
    oid: string
    iid: string
    monitors: string // Type of interaction pattern
    name: string,
    measures?: string
    streamType: string
    readingFrequency: number
    storageParams?: string // Use it to declare specific storage bucket/table/url...
    lastUpdated: number
    created: number
}