import { IAction } from "../BookmarkReducer/bookmarkReducer"
import { SET_ACTIVE_COIN_DATA, TOGGLE_COIN_INFO_MODAL } from "./CoinInfoAction"

export interface ICoinModalInfo {
    isModalOpen: boolean,
    coinInfo: ICoinMetrices
}

export interface ICoinMetrices {
    [key: string]: string
}

const initState = {
    isModalOpen: false,
    coinInfo: {}
}

export default function coinInfoReducer(state: ICoinModalInfo = initState, action: IAction) {
    switch (action.type) {
        case TOGGLE_COIN_INFO_MODAL: {
            return {
                ...state,
                isModalOpen: action.payload
            }
        }
        case SET_ACTIVE_COIN_DATA: {
            return {
                ...state,
                coinInfo: action.payload
            }
        }
        default:
            return state
    }
}