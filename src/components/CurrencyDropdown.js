import React from 'react';
import exchangeData from '../data/exchangeData.json';

export default function CurrencyDropdown({ onChange }) {
    const onSelectChange = (currency) => {
        const rate = pairs[currency];
        onChange(rate);
    };

    const pairs = {};
    exchangeData.exchangeRates.forEach(
        ({ code, rate }) => (pairs[code] = rate)
    );

    const sortedCurrencies = exchangeData.exchangeRates
        .map(({ code }) => code)
        .sort()
        .map((code) => {
            return (
                <option key={code} value={code}>
                    {code}
                </option>
            );
        });

    return (
        <select
            className="currency"
            onChange={({ target }) => onSelectChange(target.value)}
        >
            <option>---</option>
            {sortedCurrencies}
        </select>
    );
}
