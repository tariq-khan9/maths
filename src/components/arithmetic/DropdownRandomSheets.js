import React, { useState, useEffect, useRef } from 'react';
import RandomSheets from './RandomSheets';

const DropdownRandomSheets = ({setShowRandomSheets, setTotalSheets}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const showSheets = (sheets) => {
    
    setTotalSheets(sheets);
   
    setShowRandomSheets(true)

    setIsOpen(false)
  }


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };



  useEffect(() => {
    
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
         className=" "
        onClick={toggleDropdown}
      >
        Random Sheets
      </button>
      {isOpen && (
        <div className="absolute  left-0 mt-3 w-42 font-thin bg-white rounded-md shadow-lg">
          
          <button onClick={()=>showSheets(4)}  className="block w-full py-2 px-4 text-left hover:bg-green-200 focus:outline-none" >
           4 Sheets
          </button>
          <button onClick={()=>showSheets(8)}   className="block w-full py-2 px-4 text-left hover:bg-green-200 focus:outline-none" >
            8 Sheets
          </button>
          <button onClick={()=>showSheets(14)}   className="block w-full py-2 px-4 text-left hover:bg-green-200 focus:outline-none" >
            14 Sheets
          </button>
          <button onClick={()=>showSheets(20)}   className="block  w-full py-2 px-4 text-left hover:bg-green-200 focus:outline-none" >
            20 Sheets
          </button>
        </div>
      )}
      
    </div>
  );
};

export default DropdownRandomSheets;
