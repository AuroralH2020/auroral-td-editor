export interface Monitor {
  monitors: string
  name?: string
}

export interface Property extends Monitor {
  measures: string | undefined
  pid: string
  readWrite?: boolean
}

export interface Event extends Monitor {
  eid: string
}
