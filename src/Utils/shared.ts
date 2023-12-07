import { AxiosResponse } from "axios"
import { IMetrics, currentcySymbol, getDefaultCurrency } from "./constants"
import { ICoinMetrices } from "../Redux/CoinInfoReducer/CoinInfoReducer"

export const getPercentageIcon = (displayName: string) => {
    return displayName.includes("%") ? ' %' : ''
}

export const getColorClass = (activeCoin: ICoinMetrices, metrics: IMetrics) => {
    if (metrics.enableColor)
        return activeCoin[metrics.field].includes('-') ? 'red-value' : 'green-value'
    return ''
}

export const formatCryptoTableData = (res: AxiosResponse<any, any>,defaultCurrency:string) => {
    try {
        return Object.keys(res.data.DISPLAY).map(coinSymbol => {
            const { PRICE, LASTUPDATE, VOLUME24HOUR, TOTALVOLUME24HTO, TOPTIERVOLUME24HOURTO,
                TOTALTOPTIERVOLUME24HTO, MKTCAP, OPEN24HOUR, HIGH24HOUR, LOW24HOUR,
                CHANGE24HOUR, CHANGEPCT24HOUR, CHANGEDAY, CHANGEPCTDAY, CHANGEHOUR, CHANGEPCTHOUR }
                = res.data.DISPLAY[coinSymbol][defaultCurrency];
            return {
                coinName: coinSymbol,
                price: PRICE,
                lastUpdated: LASTUPDATE,
                directVol: VOLUME24HOUR,
                totalVol: TOTALVOLUME24HTO,
                topTierVol: TOPTIERVOLUME24HOURTO,
                totalTierVol: TOTALTOPTIERVOLUME24HTO,
                marketCap: MKTCAP,
                open24hr: OPEN24HOUR,
                high24hr: HIGH24HOUR,
                low24hr: LOW24HOUR,
                change24hr: CHANGE24HOUR,
                changePct24hr: CHANGEPCT24HOUR,
                changeDay: CHANGEDAY,
                changePctDay: CHANGEPCTDAY,
                changeHour: CHANGEHOUR,
                changePctHour: CHANGEPCTHOUR
            }
        })
    } catch (ex) {
        console.log(ex)
        return [];
    }
}

export const getInitialPriceFromTable = (tableData:ICoinMetrices[],coinName:string) =>{
    const selectedCoinPrice = tableData.find(coin => coin.coinName === coinName)?.price;
    const numericString = selectedCoinPrice?.replace(/[^0-9.]/g, '');
    return parseFloat(numericString!)
}