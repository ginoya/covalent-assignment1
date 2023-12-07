

export const SET_BOOKMARKS = 'SET_BOOKMARKS'
export const SAVE_COIN_PRICES = 'SAVE_COIN_PRICES'
export const RESET_COIN_VALUE = 'RESET_COIN_VALUE'
export const setBookmark = (payload:string[]) =>{
    return {
        type : SET_BOOKMARKS,
        payload: payload
    }
}

export const setSavedCoinPrices = (payload:any) =>{
    return {
        type: 'SAVE_COIN_PRICES',
        payload : payload
    }
}

export const resetSavedCoins=()=>{
    return{
        type:"RESET_COIN_VALUE"
    }
} 