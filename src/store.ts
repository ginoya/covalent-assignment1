
import { configureStore } from "@reduxjs/toolkit";
import tableReducer, { ITableData } from "./Redux/TableReducer/tableReducer";
import bookmarkReducer, { IBookmarkState } from "./Redux/BookmarkReducer/bookmarkReducer";
import coinInfoReducer, { ICoinModalInfo } from "./Redux/CoinInfoReducer/CoinInfoReducer";

export interface IState {
    tableData: ITableData,
    bookmark: IBookmarkState,
    coinInfo: ICoinModalInfo
}

export const store = configureStore({
    reducer: {
        tableData: tableReducer,
        bookmark: bookmarkReducer,
        coinInfo: coinInfoReducer
    },
});