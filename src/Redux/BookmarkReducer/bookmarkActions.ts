

export const SET_BOOKMARKS = 'SET_BOOKMARKS'


export const setBookmark = (payload:string[]) =>{
    return {
        type : SET_BOOKMARKS,
        payload: payload
    }
}
