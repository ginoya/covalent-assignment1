import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchCryptoDataError, fetchCryptoDataSuccess, fetchCryptoTableData } from "../../Redux/TableReducer/tableActions";
import axios from "axios";
import CryptoTable from "./CryptoTable";
import { coinsTobeDisplayed, currentcySymbol, getDefaultCurrency, tableDataUrl } from "../../Utils/constants";
import { formatCryptoTableData } from "../../Utils/shared";
import { IState } from "../../store";

function CryptoTableData() {

    const dispatch = useDispatch();
    const defaultCurrency  = useSelector((state:IState)=> state.tableData.savedCurrency)
    useEffect(() => {
        getCryptoTableData()
    }, [defaultCurrency]);

    const getCryptoTableData = () => {
        try {
            dispatch(fetchCryptoTableData())
            axios.get(`${tableDataUrl}?fsyms=${coinsTobeDisplayed}&tsyms=${defaultCurrency}`)
                .then(res => {
                    dispatch(fetchCryptoDataSuccess(formatCryptoTableData(res, defaultCurrency)))
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