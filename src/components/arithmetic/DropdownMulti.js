import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({setOperation, setMixOperation, setSameDenoms}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAdditionSubOpen, setIsAdditionSubOpen] = useState(false);
  const [isSubtractionSubOpen, setIsSubtractionSubOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleOperation = (op, same) => {
    if(op===5){
      setOperation(0)
      setMixOperation(2)
    }
    else{
      setOperation(op)
      setMixOperation(0)
    }

    if(op<3 && same===true){
   
      setSameDenoms(true)
    }
    if(op<3 && same===false){
      
        setSameDenoms(false)
    }

    setIsOpen(false);

  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleAdditionMouseEnter = () => {
    setIsAdditionSubOpen(true);
  };

  const handleAdditionMouseLeave = () => {
    setIsAdditionSubOpen(false);
  };

  const handleSubtractionMouseEnter = () => {
    setIsSubtractionSubOpen(true);
  };

  const handleSubtractionMouseLeave = () => {
    setIsSubtractionSubOpen(false);
  };

  useEffect(() => {
    setMixOperation(0)

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setIsAdditionSubOpen(false);
        setIsSubtractionSubOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className=' pt-8 relative h-[100px]'>
         <div className=" z-50" ref={dropdownRef}>
      <button
        className="px-4 py-2 font-thin z-50  text-white bg-green-700 hover:bg-green-600 rounded-md focus:outline-none focus:bg-green-800"
        onClick={toggleDropdown}
      >
        Operation
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-42 font-thin bg-white rounded-md shadow-lg">
          <button
            className="block w-full py-2 px-4 text-left hover:bg-green-200 focus:outline-none relative"
            onMouseEnter={handleAdditionMouseEnter}
            onMouseLeave={handleAdditionMouseLeave}
             // Close dropdown when clicked
          >
            Addition
            {isAdditionSubOpen && (
              <div className="absolute top-0 left-full mt-0 w-[140px] bg-white rounded-md shadow-lg">
                <button
                  className="block w-full p-2 pl-3  text-left hover:bg-green-200 focus:outline-none"
                  onClick={()=>handleOperation(1, true)} // Close dropdown when clicked
                >
                  Same-Denoms
                </button>
                <button
                  className="block w-full py-2 pl-3 text-left hover:bg-green-200 focus:outline-none"
                  onClick={()=>handleOperation(1, false)} // Close dropdown when clicked
                >
                  Different-Denoms
                </button>
              </div>
            )}
          </button>
          <button
            className="block w-full py-2 px-4 text-left hover:bg-green-200 focus:outline-none relative"
            onMouseEnter={handleSubtractionMouseEnter}
            onMouseLeave={handleSubtractionMouseLeave}
             // Close dropdown when clicked
          >
            Subtraction
            {isSubtractionSubOpen && (
              <div className="absolute top-0 left-full mt-0 w-[140px] bg-white rounded-md shadow-lg">
                <button
                  className="block w-full py-2 pl-3 text-left hover:bg-green-200 focus:outline-none"
                  onClick={()=>handleOperation(2, true)} // Close dropdown when clicked
                >
                  Same-Denoms
                </button>
                <button
                  className="block w-full py-2 pl-3 text-left hover:bg-green-200 focus:outline-none"
                  onClick={()=>handleOperation(2, false)} // Close dropdown when clicked
                >
                  Different-Denoms
                </button>
              </div>
            )}
          </button>
          <button onClick={()=>handleOperation(3, false)} className="block w-full py-2 px-4 text-left hover:bg-green-200 focus:outline-none" >
            Multiplication
          </button>
          <button onClick={()=>handleOperation(4, false)} className="block w-full py-2 px-4 text-left hover:bg-green-200 focus:outline-none" >
            Division
          </button>
          <button onClick={()=>handleOperation(5, false)} className="block w-full py-2 px-4 text-left hover:bg-green-200 focus:outline-none" >
            Mixed
          </button>
        </div>
      )}
    </div>
    </div>
   
  );
};

export default Dropdown;
