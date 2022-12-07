export interface ServerResponse {
  error: boolean
  statusCode: number
  statusCodeReason: string
  contentType: string
  message: any
}

export interface ServerError {
  contentType: string
  error: boolean
  statusCode: number
  statusCodeReason: string
}
