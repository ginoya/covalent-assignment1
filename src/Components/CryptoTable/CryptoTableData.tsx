import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchCryptoDataError, fetchCryptoDataSuccess, fetchCryptoTableData } from "../../Redux/TableReducer/tableActions";
import axios from "axios";
import CryptoTable from "./CryptoTable";
import { coinsTobeDisplayed, currentcySymbol, tableDataUrl } from "../../Utils/constants";
import { formatCryptoTableData } from "../../Utils/shared";

function CryptoTableData() {

    const dispatch = useDispatch();

    useEffect(() => {
        getCryptoTableData()
    }, []);

    const getCryptoTableData = () => {
        try {
            dispatch(fetchCryptoTableData())
            axios.get(`${tableDataUrl}?fsyms=${coinsTobeDisplayed}&tsyms=${currentcySymbol}`)
                .then(res => {
                    dispatch(fetchCryptoDataSuccess(formatCryptoTableData(res)))
                })
                .catch(err => {
                    dispatch(fetchCryptoDataError(err.message))
                })
        } catch (error: any) {
            dispatch(fetchCryptoDataError(error.toString()))
        }
    }

    return <CryptoTable />
}

export default CryptoTableData