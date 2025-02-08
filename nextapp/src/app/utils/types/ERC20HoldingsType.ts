// Adding ERC20HoldingType to represent ERC20 Holdings
export default interface ERC20HoldingType {
    token_address: string,
    name: string,
    symbol: string,
    logo?: string,
    thumbnail?: string,
    decimals: number,
    balance: string
}