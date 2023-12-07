import { Dialog } from "primereact/dialog"
import { useDispatch, useSelector } from "react-redux"
import { resetActiveCoinData, toggleCoinInfoModal } from "../../Redux/CoinInfoReducer/CoinInfoAction"
import { coinMetrices } from "../../Utils/constants"
import { getColorClass, getPercentageIcon } from "../../Utils/shared"
import { IState } from "../../store"
import './CoinInfoModal.scss'

function CoinInfoModal() {
    const isModalOpen = useSelector((state: IState) => state.coinInfo.isModalOpen);
    const activeCoin = useSelector((state: IState) => state.coinInfo.coinInfo)
    const dispatch = useDispatch()

    const handleOnHide = () => {
        dispatch(toggleCoinInfoModal(false))
        dispatch(resetActiveCoinData())
    }
    return (
        <> {
            isModalOpen &&
            <Dialog header={activeCoin.coinName} visible={isModalOpen} style={{ width: '25vw' }} onHide={handleOnHide}>
                <div className="coin-info-container">
                    {coinMetrices.map(metrics => <div className="coin-metric" key={metrics.field}>
                        <div className="metric-name">{metrics.displayName}</div>
                        <div className={`metric-value ${getColorClass(activeCoin, metrics)}`}>{activeCoin[metrics.field]}{getPercentageIcon(metrics.displayName)}</div>
                    </div>)}
                </div>
            </Dialog>
        }
        </>
    )
}

export default CoinInfoModal

