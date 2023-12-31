import AllBookmarks from "../../Components/AllBookmarks/AllBookmarks"
import CryptoTable from "../../Components/CryptoTable/CryptoTableData"
import CoinInfoModal from "../../Components/CoinInfoModal/CoinInfoModal"
import './Homepage.scss'
import { updateSavedCurrency } from "../../Redux/TableReducer/tableActions"
import { useDispatch } from "react-redux"
import { resetSavedCoins, setSavedCoinPrices } from "../../Redux/BookmarkReducer/bookmarkActions"

function Homepage() {
    const dispatch = useDispatch();
    const handleChange = (e:any) =>{
        dispatch(updateSavedCurrency(e.target.value))
        dispatch(resetSavedCoins())
    }
    return (
        <div className="homepage">
            <AllBookmarks />
            <div><select  name="Currency" id="currency" onChange={((e)=> handleChange(e))}>
                <option value="USD">USD</option>
                <option value="EUR">EURO</option>
            </select></div>
            <CryptoTable />
            <CoinInfoModal />
        </div>
    )
}
export default Homepage