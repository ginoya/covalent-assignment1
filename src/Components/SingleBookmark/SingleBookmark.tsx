import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { clearIntervalAfter, coinRefreshInterval, currentcySymbol, getCoinPriceUrl } from '../../Utils/constants';
import './SingleBookmark.scss';

interface IBookmark {
    coinName: string
}

const SingleBookmark = React.memo(({ coinName }: IBookmark) => {
    const [currentPrice, setCurrentPrice] = useState(0);
    const previousPriceRef = useRef<number | null>(null);

    useEffect(() => {
        const fetchSingleCoinData = async () => {
            try {
                axios.get(`${getCoinPriceUrl}?fsym=${coinName}&tsyms=${currentcySymbol}`)
                    .then(res => {
                        previousPriceRef.current = currentPrice;
                        setCurrentPrice(res.data[currentcySymbol])
                    })
                    .catch(err => {
                        console.log(err.err)
                    })
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchSingleCoinData()
        
        let intervalId = setInterval(() => {

                fetchSingleCoinData();
        },coinRefreshInterval);

         // Automatically clear the interval after 30 minutes
         const timeoutId = setTimeout(() => {
            clearInterval(intervalId);
            console.log('setTimeout called');
        }, clearIntervalAfter) 

        return () => {
            clearInterval(intervalId);
            clearTimeout(timeoutId);
        }
    }, [coinName]);

    const getBgColor = () => {
        if (typeof previousPriceRef.current === 'number')
            return currentPrice > previousPriceRef.current ? 'green' : 'red';
    }

return <div className={`bookmark ${getBgColor()}`} >
        <div className='coin-name'>{coinName}</div>
        <div className='coin-price'>{`${currentcySymbol} ${currentPrice}`}</div>
    </div>
})
export default SingleBookmark