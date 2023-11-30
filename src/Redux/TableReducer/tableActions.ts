import { ICoinMetrices } from "../CoinInfoReducer/CoinInfoReducer"


export const FETCH_TABLE_DATA = 'FETCH_TABLE_DATA'
export const FETCH_TABLE_DATA_SUCCESS = 'FETCH_TABLE_DATA_SUCCESS'
export const FETCH_TABLE_DATA_ERROR = 'FETCH_TABLE_DATA_ERROR'

export const fetchCryptoTableData = () => {
    return {
        type : FETCH_TABLE_DATA
    }
}

export const fetchCryptoDataSuccess = (payload:ICoinMetrices[]) =>{
    return {
        type : FETCH_TABLE_DATA_SUCCESS,
        payload: payload
    }
}

export const fetchCryptoDataError = (payload:string) =>{
    return {
        type : FETCH_TABLE_DATA_ERROR,
        payload : payload
    }
}