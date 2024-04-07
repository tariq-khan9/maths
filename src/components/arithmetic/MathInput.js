import React, { useState, useEffect } from 'react';

const MathInput = ({setInputs, inputs, type, difficulty, operation, sameDenoms}) => {
  const [expression, setExpression] = useState('');

  useEffect(() => {
    console.log("inputs in mathInput", inputs)
    setExpression('')
 
 }, [difficulty, operation, sameDenoms])

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setExpression(inputValue);
    // Evaluate the expression and update the result
    if(type==='inputNum'){
      try {
        const evalResult = eval(inputValue); // Use of eval can be dangerous, make sure to validate the input
       
       // setResult(isNaN(evalResult) ? null : evalResult); // Check if the result is a valid number
        setInputs({...inputs, inputNum: isNaN(evalResult) ? null : evalResult })
      } catch (error) {
        setInputs({...inputs, inputNum:  null  })
      }
    }

    if(type==='inputDenom'){
      try {
        const evalResult = eval(inputValue); // Use of eval can be dangerous, make sure to validate the input
       
       // setResult(isNaN(evalResult) ? null : evalResult); // Check if the result is a valid number
        setInputs({...inputs, inputDenom: isNaN(evalResult) ? null : evalResult })
      } catch (error) {
        setInputs({...inputs, inputDenom:  null  })
      }
    }
  

  };

  return (
    <div className=''>
      <input
        className='input-digit   input'
        type="text"
        value={expression}
        onChange={handleChange}
      />
    
    </div>
  );
};

export default MathInput;
