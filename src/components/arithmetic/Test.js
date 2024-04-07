import React, { useState, useEffect } from 'react';

const Test = ({ sheet }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const newData = Array.from({ length: sheet }, () => ({
      num1: Math.floor(Math.random() * 100),
      num2: Math.floor(Math.random() * 100),
      numerator: '',
      denominator: ''
    }));
    setData(newData);
  }, [sheet]);

  const handleInputChange = (index, field, value) => {
    const newData = [...data];
    newData[index][field] = value;
    setData(newData);
  };

  const handleClick = (numerator, denominator) => {
    console.log(`Numerator: ${numerator}, Denominator: ${denominator}`);
  };

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <p>Num1: {item.num1}, Num2: {item.num2}</p>
          <input
            type="text"
            value={item.numerator}
            onChange={(e) => handleInputChange(index, 'numerator', e.target.value)}
          />
          <input
            type="text"
            value={item.denominator}
            onChange={(e) => handleInputChange(index, 'denominator', e.target.value)}
          />
          <button onClick={() => handleClick(item.numerator, item.denominator)}>
            Log Values
          </button>
        </div>
      ))}
    </div>
  );
};

export default Test;
