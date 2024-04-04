import React, { useState } from 'react';
import katex from '@matejmazur/react-katex';


const  FractionInput = ()  => {
    const [numerator, setNumerator] = useState('');
    const [denominator, setDenominator] = useState('');

    // Construct the KaTeX expression
    const texExpression = `\\frac{${numerator}}{${denominator}}`;

    return (
        <div>
            <input
                type="number"
                placeholder="Numerator"
                value={numerator}
                onChange={(e) => setNumerator(e.target.value)}
            />
            <katex.Render math={texExpression} />
            <input
                type="number"
                placeholder="Denominator"
                value={denominator}
                onChange={(e) => setDenominator(e.target.value)}
            />
        </div>
    );
}

export default FractionInput;
