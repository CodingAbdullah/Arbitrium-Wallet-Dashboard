// Adding interfaces to represent complex types
export interface GasStateType {
    chainInformation: {
        jsonrpc: string,
        id: number,
        result: string
    }
    gasPrice: string
}