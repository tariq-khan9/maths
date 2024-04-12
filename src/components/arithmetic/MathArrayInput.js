import React, { useState, useEffect } from 'react';
import { toast } from 'sonner';

const MathInput = ({ index, randomSheetArray, setRandomSheetArray, type, difficulty, operation, sameDenoms }) => {
  const [expression, setExpression] = useState('');

  useEffect(() => {
    console.log("randomSheetArray in MathInput", randomSheetArray);
    setExpression('');
  }, [difficulty, operation, sameDenoms]);

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setExpression(inputValue);
    
    const newArray = [...randomSheetArray];
    const objectToUpdate = newArray[index];

    // Validate input
    if (!inputValue.trim()) {
      toast.error('Input is required.');
      return;
    }

    // Evaluate the expression and update the specified field of the object
    try {
      const evalResult = eval(inputValue); // Use of eval can be dangerous, make sure to validate the input
      if (type === 'inputNum') {
        objectToUpdate.inputNum = isNaN(evalResult) ? null : evalResult;
      } else if (type === 'inputDenom') {
        objectToUpdate.inputDenom = isNaN(evalResult) ? null : evalResult;
      }
    } catch (error) {
      if (type === 'inputNum') {
        objectToUpdate.inputNum = null;
      } else if (type === 'inputDenom') {
        objectToUpdate.inputDenom = null;
      }
    }

    // Update the array with the modified object
    newArray[index] = objectToUpdate;
    setRandomSheetArray(newArray);
  };

  return (
    <div className=''>
      <input
        className='input-digit input'
        type="text"
        value={expression}
        onChange={handleChange}
      />
    </div>
  );
};

export default MathInput;
