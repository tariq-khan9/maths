import React, { useState } from 'react';

const MathInput = ({setInputs, inputs, type}) => {
  const [expression, setExpression] = useState('');

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setExpression(inputValue);
    // Evaluate the expression and update the result
    if(type==='numerator'){
      try {
        const evalResult = eval(inputValue); // Use of eval can be dangerous, make sure to validate the input
       
       // setResult(isNaN(evalResult) ? null : evalResult); // Check if the result is a valid number
        setInputs({...inputs, numerator: isNaN(evalResult) ? null : evalResult })
      } catch (error) {
        setInputs({...inputs, numerator:  null  })
      }
    }

    if(type==='denominator'){
      try {
        const evalResult = eval(inputValue); // Use of eval can be dangerous, make sure to validate the input
       
       // setResult(isNaN(evalResult) ? null : evalResult); // Check if the result is a valid number
        setInputs({...inputs, denominator: isNaN(evalResult) ? null : evalResult })
      } catch (error) {
        setInputs({...inputs, denominator:  null  })
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
