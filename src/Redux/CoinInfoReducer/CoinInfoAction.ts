import { ICoinMetrices } from "./CoinInfoReducer"

export const TOGGLE_COIN_INFO_MODAL = 'TOGGLE_COIN_INFO_MODAL'
export const SET_ACTIVE_COIN_DATA = 'SET_ACTIVE_COIN_DATA'

export const toggleCoinInfoModal = (payload:boolean) =>{
    return {
        type:TOGGLE_COIN_INFO_MODAL,
        payload:payload
    }
} 

export const setActiveCoinData = (payload:ICoinMetrices) =>{
    return {
        type:SET_ACTIVE_COIN_DATA,
        payload:payload
    }
}

export const resetActiveCoinData = () =>{
    return {
        type:SET_ACTIVE_COIN_DATA,
        payload:{}
    }
}