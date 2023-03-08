export interface FetchTableItems {
    totalLength: number
    items: any[]
}

export interface ActionWhenEmpty {
    buttonMessage: string
    action: Function
}