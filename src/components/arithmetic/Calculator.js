import React, { useState, useEffect } from 'react';

const Calculator = () => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState(null); // Initialize result as null

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.keyCode === 8) {
        setExpression(expression.slice(0, -1));
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [expression]);

  const handleChange = (event) => {
    const inputValue = event.target.value;

    if (inputValue === '') {
      setResult(null); // Set result to null if input is empty
      setExpression('');
      return;
    }

    const lastChar = inputValue[inputValue.length - 1];

    if (/[\d+−*/]/.test(lastChar)) {
      try {
        setResult(eval(inputValue).toString());
      } catch (error) {
        setResult('Error');
      }
      setExpression(inputValue);
    } else {
      setExpression(expression);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={expression}
        onChange={handleChange}
        placeholder="Enter expression"
      />
      {result !== null && <div>Result: {result}</div>}
    </div>
  );
};

export default Calculator;
