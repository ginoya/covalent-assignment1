import { IAction } from "../BookmarkReducer/bookmarkReducer";
import { ICoinMetrices } from "../CoinInfoReducer/CoinInfoReducer";
import { FETCH_TABLE_DATA, FETCH_TABLE_DATA_ERROR, FETCH_TABLE_DATA_SUCCESS, UPDATE_SAVED_CURRENCY } from "./tableActions";
export interface ITableData {
    isLoading: boolean,
    tableData: ICoinMetrices[],
    error: string,
    savedCurrency:string
}
const initState = {
    isLoading: true,
    tableData: [],
    error: "",
    savedCurrency:"USD"
}

export default function tableReducer(state: ITableData = initState, action: IAction) {
    switch (action.type) {
        case FETCH_TABLE_DATA: {
            return {
                ...state,
                isLoading: true
            }
        }
        case FETCH_TABLE_DATA_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                tableData: action.payload,
                error: ""
            }
        }
        case FETCH_TABLE_DATA_ERROR: {
            return {
                ...state,
                isLoading: false,
                tableData: [],
                error: action.payload
            }
        }
        case UPDATE_SAVED_CURRENCY:{
            return {
                ...state,
                savedCurrency:action.payload
            }
        }
        default:
            return state
    }
}