import { Checkbox } from "primereact/checkbox";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { useDispatch, useSelector } from "react-redux";
import { setBookmark } from "../../Redux/BookmarkReducer/bookmarkActions";
import { columns } from "../../Utils/constants";
import { setActiveCoinData, toggleCoinInfoModal } from "../../Redux/CoinInfoReducer/CoinInfoAction";
import './CryptoTable.scss'

function CryptoTable() {

    const CrypotData = useSelector((state: any) => state.tableData);
    const bookmarks = useSelector((state: any) => state.bookmark.bookmarks);

    const dispatch = useDispatch();

    const renderBookmarkCell = (coin: any) => {
        return <Checkbox onChange={e => handleOnChangeCheck(e.checked, coin)} checked={bookmarks.includes(coin.coinName)}></Checkbox>
    }
    
    const renderCoinCell = (coin: any) => {
        return <div onClick={() => handleCoinNameClick(coin)} className="coin-name-cell">{coin.coinName}</div>
    }

    const handleOnChangeCheck = (checked: boolean | undefined, coin: any) => {
        if (checked) {
            dispatch(setBookmark([...bookmarks, coin.coinName]))
        } else {
            const bookmarkCopy = [...bookmarks]
            bookmarkCopy.splice(bookmarkCopy.indexOf(coin.coinName), 1)
            dispatch(setBookmark(bookmarkCopy))
        }
    }

    const handleCoinNameClick = (coin:any) => {
        dispatch(toggleCoinInfoModal(true))
        dispatch(setActiveCoinData({...coin}))
    }

    return (
        <DataTable value={CrypotData.tableData} showGridlines tableStyle={{ "marginTop": "2.5rem" }}>
            <Column align={"center"} field="coinName" header={"Coin Name"} body={renderCoinCell}></Column>
            {columns.map(({ field, header }) =>
                <Column key={field} field={field} header={header}></Column>
            )}
            <Column align={"center"} header={"Bookmark"} body={renderBookmarkCell}></Column>
        </DataTable>

    );
}

export default CryptoTable;