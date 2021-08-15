import React, { useMemo } from 'react';

export default function CurrencyDropdown({ data, onChange }) {
    const onSelectChange = (currency) => {
        const rate = pairs[currency];
        onChange(rate);
    };

    const pairs = useMemo(() => {
        const tempPairs = {};
        data.exchangeRates.forEach(
            ({ code, rate }) => (tempPairs[code] = rate)
        );
        console.log(tempPairs);
        return tempPairs;
    }, [data]);

    const sortedCurrencies = useMemo(
        () =>
            data.exchangeRates
                .map(({ code }) => code)
                .sort()
                .map((code) => {
                    return (
                        <option key={code} value={code}>
                            {code}
                        </option>
                    );
                }),
        [data]
    );

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
