

export const currentcySymbol = 'USD';

export const getDefaultCurrency = () =>{
    return sessionStorage.getItem('savedCurrency') || 'USD';
}

export const coinsTobeDisplayed = ["BTC", "ETH", "SOl", "BNB"]

export const tableDataUrl = `https://min-api.cryptocompare.com/data/pricemultifull`

export const getCoinPriceUrl = `https://min-api.cryptocompare.com/data/price`

export const clearIntervalAfter = 30 * 60 * 1000;
export const coinRefreshInterval = 60 * 1000;

export interface IDataTableColumn {
    field: string;
    header: string;
}
export interface IMetrics {
    field: string;
    displayName: string;
    enableColor?: boolean;
}
export const columns: IDataTableColumn[] = [
    {
        field: 'price',
        header: 'Price'
    }, {
        field: 'lastUpdated',
        header: 'Last Updated'
    }, {
        field: 'directVol',
        header: 'Direct Volumn'
    }, {
        field: 'totalVol',
        header: 'Total Vol'
    }, {
        field: 'totalTierVol',
        header: 'Top Tier Volumn'
    }, {
        field: 'marketCap',
        header: 'Market Cap'
    }
]

export const coinMetrices: IMetrics[] = [
    {
        field: "open24hr",
        displayName: "Open 24 Hour"
    }, {
        field: "high24hr",
        displayName: "High 24 Hour"
    }, {
        field: "low24hr",
        displayName: "Low 24 Hour"
    }, {
        field: "change24hr",
        displayName: "Change 24 Hour",
        enableColor: true
    }, {
        field: "changePct24hr",
        displayName: "Change % 24 Hour",
        enableColor: true
    }, {
        field: "changeDay",
        displayName: "Change Day",
        enableColor: true
    }, {
        field: "changePctDay",
        displayName: "Change % Day",
        enableColor: true
    }, {
        field: "changeHour",
        displayName: "Change Hour",
        enableColor: true
    }, {
        field: "changePctHour",
        displayName: "Change % Hour",
        enableColor: true
    }
]
