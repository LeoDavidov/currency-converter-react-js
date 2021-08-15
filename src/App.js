import React, { useState } from 'react';
import './App.css';
import CurrencyDropdown from './components/CurrencyDropdown';
import SourceInput from './components/SourceInput';
import exchangeData from './data/exchangeData.json';

export default function App() {
    const [sourceInput, setSourceInput] = useState('');
    const [rateFrom, setRateFrom] = useState(null);
    const [rateTo, setRateTo] = useState(null);

    const calcResult = () => {
        const result = (sourceInput * rateFrom) / rateTo;
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
                    <CurrencyDropdown
                        data={exchangeData}
                        onChange={setRateFrom}
                    />
                    <SourceInput
                        onChange={setSourceInput}
                        inputValue={sourceInput}
                    />
                </div>
                <div className="box-right">
                    <div className="text">to</div>
                    <CurrencyDropdown
                        data={exchangeData}
                        onChange={setRateTo}
                    />
                    <input value={calcResult()} type="text" disabled />
                </div>
            </div>
        </div>
    );
}
