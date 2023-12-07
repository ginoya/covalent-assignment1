import { SAVE_COIN_PRICES, SET_BOOKMARKS } from "./bookmarkActions";

export interface IBookmarkState{
    bookmarks:string[],
    savedCoinValue:any
}

export interface IAction{
    type:string,
    payload?:any
}

const initState = {
    bookmarks:[],
    savedCoinValue:{
    }
}

export default function bookmarkReducer(state:IBookmarkState=initState, action:IAction){
    switch(action.type){
        case SET_BOOKMARKS:{
            return {
                ...state,
                bookmarks:action.payload
            }
        }
        case SAVE_COIN_PRICES:{
            return {
                ...state,
                savedCoinValue:{
                    ...action.payload
                }
            }
        }
        default:
            return state
    }
}