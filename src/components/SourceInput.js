import React, { useState } from 'react';

export default function SourceInput({ onChange, inputValue }) {
    const [errorText, setErrorText] = useState('');

    const onInputChange = (input) => {
        if (isNaN(Number(input))) setErrorText('⛔ enter a number');
        else if (input < 0) setErrorText('only positive numbers');
        else setErrorText('');

        onChange(input.slice(0, 6));
    };

    return (
        <>
            <input
                onChange={({ target }) => onInputChange(target.value)}
                value={inputValue}
                type="text"
            />
            <p className="error">{errorText}</p>
        </>
    );
}
