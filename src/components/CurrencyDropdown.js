import React from 'react';
import exchangeData from '../data/exchangeData.json';

class CurrencyDropdown extends React.Component {
    constructor(props) {
        super(props);

        // for state.pairs
        const pairs = {};
        exchangeData.exchangeRates.forEach(
            ({ code, rate }) => (pairs[code] = rate)
        );

        // for state.sortedCurrencies
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

        this.state = {
            sortedCurrencies: sortedCurrencies,
            pairs: pairs,
        };
    }

    onSelectChange(currency) {
        const rate = this.state.pairs[currency];
        this.props.onChange(rate);
    }

    render() {
        return (
            <select
                onChange={(e) => this.onSelectChange(e.target.value)}
                className="currency"
            >
                <option>---</option>
                {this.state.sortedCurrencies}
            </select>
        );
    }
}

export default CurrencyDropdown;
