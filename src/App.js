import React, { useState } from 'react';
import './App.css';
import CurrencyDropdown from './components/CurrencyDropdown';

export default function App() {
    const [moneyQuantity, setMoneyQuantity] = useState('');
    const [rateFrom, setRateFrom] = useState(null);
    const [rateTo, setRateTo] = useState(null);
    const [errorText, setErrorText] = useState('');

    const onInputChange = (value) => {
        if (isNaN(Number(value))) setErrorText('⛔ enter a number');
        else if (value < 0) setErrorText('only positive numbers');
        else setErrorText('');
        setMoneyQuantity(value.slice(0, 6));
    };

    const calcResult = () => {
        const result = (moneyQuantity * rateFrom) / rateTo;
        if (
            isNaN(result) ||
            result === -Infinity ||
            result === Infinity ||
            result !== Math.abs(result)
        )
            return '';
        return result.toFixed(2);
    };

    return (
        <div className="app">
            <h1>Currency Converter</h1>
            <div className="input-box">
                <div className="box-left">
                    <div className="text">from</div>
                    <CurrencyDropdown onChange={setRateFrom} />
                    <input
                        onChange={({ target }) => onInputChange(target.value)}
                        value={moneyQuantity}
                        type="text"
                    />
                    <p className="error">{errorText}</p>
                </div>
                <div className="box-right">
                    <div className="text">to</div>
                    <CurrencyDropdown onChange={setRateTo} />
                    <input value={calcResult()} type="text" disabled />
                </div>
            </div>
        </div>
    );
}
