import React from 'react';
import exchangeData from '../data/exchangeData.json';

class CurrencyDropdown extends React.Component {
    constructor(props) {
        super(props);

        const pairs = {};
        exchangeData.exchangeRates.forEach(
            ({ code, rate }) => (pairs[code] = rate)
        );
        this.pairs = pairs;

        this.sortedCurrencies = exchangeData.exchangeRates
            .map(({ code }) => code)
            .sort()
            .map((code) => {
                return (
                    <option key={code} value={code}>
                        {code}
                    </option>
                );
            });
    }

    onSelectChange(currency) {
        const rate = this.pairs[currency];
        this.props.onChange(rate);
    }

    render() {
        return (
            <select
                onChange={(e) => this.onSelectChange(e.target.value)}
                className="currency"
            >
                <option>---</option>
                {this.sortedCurrencies}
            </select>
        );
    }
}

export default CurrencyDropdown;
