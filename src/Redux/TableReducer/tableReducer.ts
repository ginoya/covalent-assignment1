import { IAction } from "../BookmarkReducer/bookmarkReducer";
import { ICoinMetrices } from "../CoinInfoReducer/CoinInfoReducer";
import { FETCH_TABLE_DATA, FETCH_TABLE_DATA_ERROR, FETCH_TABLE_DATA_SUCCESS } from "./tableActions";
export interface ITableData {
    isLoading: boolean,
    tableData: ICoinMetrices[],
    error: string
}
const initState = {
    isLoading: true,
    tableData: [],
    error: ""
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
        default:
            return state
    }
}