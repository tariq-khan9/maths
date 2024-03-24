import React, { useState, useEffect, useRef } from 'react';

const DropdownButton = ({title, setSameDenoms}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownOpen && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
        setSelectedValue('option1'); // Set default selected value when closing the dropdown
      }
    };
  
    document.addEventListener('mousedown', handleClickOutside);
  
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]); // Listen for changes in dropdownOpen state
  
  
  const handleOperation = (value) => {
    setSelectedValue((prevValue) => {
      console.log("Previous value:", prevValue);
      console.log("New value:", value);
      setSameDenoms(value)
      return value;
    });
    setDropdownOpen(false); // Close the dropdown after selecting an option
  };
  
  
  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
    setSelectedValue('option1'); // Set default selected value when opening dropdown
  };

  // return (
  //   <div className="relative" ref={dropdownRef}>
  //     <button onClick={handleDropdownToggle} >
  //       {title}
  //     </button>
  //     {dropdownOpen && (
  //       <div className={`absolute flex flex-col justify-center w-36 top-[40px] ${title==='Addition'? 'left-[-70%] ' : 'left-[-40%]'}  bg-green-800 text-white shadow-md rounded-md`}>
  //           <button onClick={() => handleOperation(true)} className={`dropdown-item rounded-t-md py-1 pt-2 hover:bg-green-600 `}>Same-Denoms</button>
  //         <button onClick={() => handleOperation(false)} className={`dropdown-item rounded-b-md py-1 pb-2 hover:bg-green-600`}>Different-Denoms</button>

  //         <button className="dropdown-item hover:bg-red-600" onMouseEnter={() => setSelectedValue('')}>
  //           {selectedValue === '' && (
  //             <>
  //               <button onClick={() => handleOperation(true)} className="dropdown-item py-1 hover:bg-green-600">
  //                 Same-Denoms
  //               </button>
  //               <button onClick={() => handleOperation(false)} className="dropdown-item py-1 hover:bg-green-600">
  //                 Different-Denoms
  //               </button>
  //             </>
  //           )}
  //         </button>
          
  //       </div>
  //     )}
  //   </div>
  // );


  return (
    <div className="relative" ref={dropdownRef}>
      <button onClick={handleDropdownToggle}>
        {title}
      </button>
      {dropdownOpen && (
        <div className={`absolute flex flex-col justify-center w-36 top-[40px] ${title === 'Addition' ? 'left-[-70%]' : 'left-[-40%]'}  bg-green-800 text-white shadow-md rounded-md`}>
          <button className="dropdown-item hover:bg-green-600" onMouseEnter={() => setSelectedValue('')}>
            {selectedValue === '' && (
              <>
                <button onClick={() => handleOperation(true)} className="dropdown-item py-1 hover:bg-green-600">
                  Same-Denoms
                </button>
                <button onClick={() => handleOperation(false)} className="dropdown-item py-1 hover:bg-green-600">
                  Different-Denoms
                </button>
              </>
            )}
          </button>
          <button className="dropdown-item py-1 hover:bg-green-600" onMouseEnter={() => setSelectedValue('')}>
            {selectedValue === '' && (
              <>
                <button onClick={() => handleOperation(true)} className="dropdown-item py-1 hover:bg-green-600">
                  Same-Denoms
                </button>
                <button onClick={() => handleOperation(false)} className="dropdown-item py-1 hover:bg-green-600">
                  Different-Denoms
                </button>
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
