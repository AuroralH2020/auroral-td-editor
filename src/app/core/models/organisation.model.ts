import { generateRandomColor } from "src/app/utils"

export interface Organisation {
    cid: string
    name: string
    lastUpdated: Date
    color: string
}