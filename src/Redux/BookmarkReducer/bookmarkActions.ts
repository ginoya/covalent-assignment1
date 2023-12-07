

export const SET_BOOKMARKS = 'SET_BOOKMARKS'
export const SAVE_COIN_PRICES = 'SAVE_COIN_PRICES'

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