import { SET_BOOKMARKS } from "./bookmarkActions";

export interface IBookmarkState{
    bookmarks:string[]
}

export interface IAction{
    type:string,
    payload?:any
}

const initState = {
    bookmarks:[],
}

export default function bookmarkReducer(state:IBookmarkState=initState, action:IAction){
    switch(action.type){
        case SET_BOOKMARKS:{
            return {
                ...state,
                bookmarks:action.payload
            }
        }
        default:
            return state
    }
}