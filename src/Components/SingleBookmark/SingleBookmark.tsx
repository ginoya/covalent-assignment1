import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { clearIntervalAfter, coinRefreshInterval, getCoinPriceUrl, getDefaultCurrency } from '../../Utils/constants';
import './SingleBookmark.scss';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../store';
import { getInitialPriceFromTable } from '../../Utils/shared';
import { setSavedCoinPrices } from '../../Redux/BookmarkReducer/bookmarkActions';

interface IBookmark {
    coinName: string
}

const SingleBookmark = React.memo(({ coinName }: IBookmark) => {

    const tableData = useSelector((state: IState) => state.tableData.tableData)
    const defaultCurrency  = useSelector((state:IState)=> state.tableData.savedCurrency)
    const savedPrices = useSelector((state:IState) => state.bookmark.savedCoinValue);

    const dispatch = useDispatch()
    const fetchSingleCoinData = async () => {
        try {
            axios.get(`${getCoinPriceUrl}?fsym=${coinName}&tsyms=${defaultCurrency}`)
                .then(res => {
                    dispatch(setSavedCoinPrices({
                        ...savedPrices,
                        [coinName]:{
                            previous:savedPrices[coinName]?.current ,
                            current:res.data[defaultCurrency]
                        }
                    }))
                })
                .catch(err => {
                    console.log(err.err)
                })
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {

        fetchSingleCoinData()

        let intervalId = setInterval(() => {

            fetchSingleCoinData();
        }, coinRefreshInterval);

        // Automatically clear the interval after 30 minutes
        
        const timeoutId = setTimeout(() => {
            clearInterval(intervalId);
        }, clearIntervalAfter)

        return () => {
            clearInterval(intervalId);
            clearTimeout(timeoutId);
        }
    }, [coinName,defaultCurrency]);

    const getBgColor = () =>{
        if(!savedPrices[coinName]?.previous){
            if( savedPrices[coinName]?.current >= getInitialPriceFromTable(tableData,coinName))
            return 'green'
            else return 'red'
        }
        if(savedPrices[coinName]?.current && savedPrices[coinName]?.previous){
            if( savedPrices[coinName]?.current >= savedPrices[coinName]?.previous)
            return 'green'
            else return 'red'
        }else{
            return ''
        }
           
    }

    console.log(coinName, savedPrices)
    return <div className={`bookmark ${getBgColor()}`} >
        <div className='coin-name'>{coinName}</div>
        <div className='coin-price'>{`${defaultCurrency} ${savedPrices[coinName]?.current}`}</div>
    </div>
})
export default SingleBookmark