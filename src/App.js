import React from 'react';
import './App.css';
import CurrencyDropdown from './components/CurrencyDropdown';

class App extends React.Component {
    state = { moneyQuantity: '', rateFrom: null, rateTo: null, error: '' };

    onCurrencyChangeFrom = (rate) => {
        this.setState({ rateFrom: rate });
    };

    onCurrencyChangeTo = (rate) => {
        this.setState({ rateTo: rate });
    };

    onInputChange(value) {
        if (isNaN(Number(value)))
            this.setState({
                error: '⛔ enter a number',
            });
        else if (value < 0)
            this.setState({
                error: 'only positive numbers',
            });
        else this.setState({ error: '' });
        this.setState({
            moneyQuantity: value.slice(0, 6),
        });
    }

    calcResult() {
        const result =
            (this.state.moneyQuantity * this.state.rateFrom) /
            this.state.rateTo;

        if (
            isNaN(result) ||
            result === -Infinity ||
            result === Infinity ||
            result !== Math.abs(result)
        )
            return '';
        return result.toFixed(2);
    }

    render() {
        return (
            <div className="app">
                <h1>Currency Converter</h1>
                <div className="input-box">
                    <div className="box-left">
                        <div className="text">from</div>
                        <CurrencyDropdown
                            onChange={this.onCurrencyChangeFrom}
                        />
                        <input
                            onChange={({ target }) => {
                                this.onInputChange(target.value);
                            }}
                            value={this.state.moneyQuantity}
                            type="text"
                        />
                        <p className="error">{this.state.error}</p>
                    </div>
                    <div className="box-right">
                        <div className="text">to</div>
                        <CurrencyDropdown onChange={this.onCurrencyChangeTo} />
                        <input value={this.calcResult()} type="text" disabled />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
