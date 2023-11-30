import AllBookmarks from "../../Components/AllBookmarks/AllBookmarks"
import CryptoTable from "../../Components/CryptoTable/CryptoTableData"
import CoinInfoModal from "../../Components/CoinInfoModal/CoinInfoModal"
import './Homepage.scss'

function Homepage() {
    return (
        <div className="homepage">
            <AllBookmarks />
            <CryptoTable />
            <CoinInfoModal/>
        </div>
    )
}
export default Homepage