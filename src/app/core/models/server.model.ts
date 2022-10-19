export interface ServerResponse {
    error: boolean
    statusCode: number
    statusCodeReason: string,
    contentType: string
    message: any
}