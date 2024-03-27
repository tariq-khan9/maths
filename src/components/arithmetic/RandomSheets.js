import React,{useState, useEffect, useRef} from 'react'
import CheckModal from './CheckModal'

const RandomSheets = ({getRandomNumber, showRandomSheets, totalSheets,  setShowRandom, operation, mixOperation,difficulty, inputRange, additionInputs, setAdditionInputs, sameDenoms, divisionInputs, setDivisionInputs}) => {
  // console.log("operation", operation, "mix operatio", mixOperation, "difficu", difficulty, "min", inputRange)
 
  
  let sheets = 4;
  
 
  
  const [randomSheetArray, setRandomSheetArray] = useState([])
 const [showCheckModal, setShowCheckModal] = useState(false)
 //const [showSolutionBtn, setShowSolutionBtn] = useState(false)
 const [submitted, setSubmitted] = useState(false)
 const [arrayResult, setArrayResult] = useState(false)
 const [objectSubmitCount, setObjectSubmitCount] = useState(0)
 
const [inputs, setInputs] = useState({
  numerator: 1,
  denominator: 1
})

const isFirstRun = useRef(true);

  useEffect(() => {
     
    if (isFirstRun.current) {
      // This block will run only on the first render
      handleRandomSheets(sheets)
    
      isFirstRun.current = false;
      return;
    }
    
   
  
  }, [totalSheets, showRandomSheets, arrayResult, submitted]);
 
 

  // const handleRandomSheets = () => {
  //   if (randomSheetArray.length > 0) {
  //     // Clear randomSheet by setting it to an empty array
  //     setRandomSheetArray([]);
  //   }
    
  //   for (let i = 0; i < 5; i++) {
  //     const numerator1 = getRandomNumber(2, 10);
  //     const denominator1 = getRandomNumber(2, 10);
  //     const numerator2 = getRandomNumber(2, 10);
  //     const denominator2 = getRandomNumber(2, 10);
  
  //     randomSheetArray.push({
  //       numerator1,
  //       denominator1,
  //       numerator2,
  //       denominator2
  //     });
  //   }
  
  //   setRandomSheetArray(randomSheetArray);
  // }

  const handleArrayCheck = (randomNums) => {
    setObjectSubmitCount(objectSubmitCount+1)
    const { numerator1, denominator1, numerator2, denominator2, showSolutionBtn } = randomNums.randomNums;
    console.log(numerator1, numerator2, showSolutionBtn);
    if (operation === 1) {
        if (sameDenoms) {
            const checkDeno = denominator1;
            const checkNum = numerator1 + numerator2;
            var checkResult = checkNum / checkDeno;
        } else {
            const checkDeno = denominator1 * denominator2
            const checkNum = (numerator1 * denominator2) + (numerator2 * denominator1);

            if (parseInt(additionInputs.numerator1) === denominator2 &&
                parseInt(additionInputs.denominator1) === denominator2 &&
                parseInt(additionInputs.numerator2) === denominator1 &&
                parseInt(additionInputs.denominator2) === denominator1) {
                var checkResult = checkNum / checkDeno;
            } else {
                var checkResult = checkNum;
            }
        }
    }

    if (operation === 2) {
        if (sameDenoms) {
            const checkDeno = denominator1;
            const checkNum = numerator1 - numerator2;
            var checkResult = checkNum / checkDeno;
        } else {
            const checkDeno = denominator1 * denominator2
            const checkNum = (numerator1 * denominator2) - (numerator2 * denominator1);

            if (parseInt(additionInputs.numerator1) === denominator2 &&
                parseInt(additionInputs.denominator1) === denominator2 &&
                parseInt(additionInputs.numerator2) === denominator1 &&
                parseInt(additionInputs.denominator2) === denominator1) {
                var checkResult = checkNum / checkDeno;
            } else {
                var checkResult = checkNum;
            }
        }

    }

    if (operation === 3) {
        const checkNum = numerator1 * numerator2;
        const checkDeno = denominator1 * denominator2;

        var checkResult = checkNum / checkDeno;
    }

    if (operation === 4) {
        if (difficulty === 1) {
            var deno2 = parseInt(divisionInputs.denominator2)
            var num2 = parseInt(divisionInputs.numerator2)
            if (numerator2 === deno2 && denominator2 === num2 && divisionInputs.sign === '*') {
              setArrayResult(true)
            } else {
                setArrayResult(false)
            }
        }

        if (difficulty > 1) {

            var deno2 = parseInt(divisionInputs.denominator2)
            var num2 = parseInt(divisionInputs.numerator2)
            var deno1 = parseInt(divisionInputs.denominator1)
            var num1 = parseInt(divisionInputs.numerator1)

            if ((numerator2 === deno2 &&
                    denominator2 === num2 &&
                    numerator1 === num1 &&
                    denominator1 === deno1 &&
                    divisionInputs.sign === '*') ||
                (numerator1 === deno1 &&
                    denominator1 === num1 &&
                    numerator2 === num2 &&
                    denominator2 === deno2 &&
                    divisionInputs.sign === '*')) {
                setArrayResult(true)
            }



            else {
                setArrayResult(false)
            }
        }

    }

    if (operation !== 4) {
        var inputResult = inputs.numerator / inputs.denominator;

        
         var newCheckResult = parseFloat(checkResult).toFixed(2);
         var newInputResult = parseFloat(inputResult).toFixed(2)
         console.log("check deno", newCheckResult, "check num ", newInputResult)
        if (newCheckResult === newInputResult) {
          //  const updatedSheet = { ...randomNums.randomNums, isSubmitted: true, objectResult: true};
            const updatedArray = randomSheetArray.map(item => {
              // Compare properties of the objects to determine if they are equal
              if (item.numerator1 === randomNums.randomNums.numerator1 &&
                  item.denominator1 === randomNums.randomNums.denominator1 &&
                  item.numerator2 === randomNums.randomNums.numerator2 &&
                  item.denominator2 === randomNums.randomNums.denominator2) {
                  // If the properties match, return a new object with the updated 
                  return { ...item, isSubmitted:true, objectResult: true };
              }
              // If the properties don't match, return the original object
              return item;
          });
          setRandomSheetArray(updatedArray);

            console.log("object after update ", updatedArray)
           
        } else {
          const updatedArray = randomSheetArray.map(item => {
            // Compare properties of the objects to determine if they are equal
            if (item.numerator1 === randomNums.randomNums.numerator1 &&
                item.denominator1 === randomNums.randomNums.denominator1 &&
                item.numerator2 === randomNums.randomNums.numerator2 &&
                item.denominator2 === randomNums.randomNums.denominator2) {
                // If the properties match, return a new object with the updated 
                return { ...item, isSubmitted: true, objectResult: false };
            }
            // If the properties don't match, return the original object
            return item;
        });
        setRandomSheetArray(updatedArray);
            
        }

      
    }
 
}





  

  const handleShowBtn = (randomNum) => {
    const updatedRandomSheetArray = randomSheetArray.map(sheet => {
      if (sheet === randomNum) {
        return { ...sheet, showSolutionBtn: true };
      }
      return sheet;
    });
    setRandomSheetArray(updatedRandomSheetArray);
  };
   
 const handleRandomSheets = (sheets) => {
  // if (randomSheetArray.length > 0) {
  //   // Clear randomSheet by setting it to an empty array
  //   setRandomSheetArray([]);
  // }


  
  console.log(inputRange.min, inputRange.max)
  
  for (let i = 0; i < sheets; i++) {
    const numerator1 = getRandomNumber(2, 10);
    const denominator1 = getRandomNumber(2, 10);
    const numerator2 = getRandomNumber(2, 10);
    const denominator2 = getRandomNumber(2, 10);

      // var numerator1 = getRandomNumber(inputRange.min, inputRange.max);
      // var denominator1 = getRandomNumber(inputRange.min, inputRange.max);
      // var numerator2 = getRandomNumber(inputRange.min, inputRange.max);
      // var denominator2 = getRandomNumber(inputRange.min, inputRange.max);

  

  //   do {
  //     var numerator1 = getRandomNumber(inputRange.min, inputRange.max);
  //     var denominator1 = getRandomNumber(inputRange.min, inputRange.max);
  //     var numerator2 = getRandomNumber(inputRange.min, inputRange.max);
  //     var denominator2 = getRandomNumber(inputRange.min, inputRange.max);

  //     var checkDeno = denominator1 * denominator2;
  //     if(operation>0){
  //         if(operation===1)  var checkNum = (numerator1 * denominator2) + (numerator2 * denominator1);
  //         if(operation===2)  var checkNum = (numerator1 * denominator2) - (numerator2 * denominator1);
  //         if(operation===3)  var checkNum = (numerator1 * numerator2);
  //         if(operation===4){
  //           checkDeno= denominator1*numerator2;
  //           checkNum= numerator1*denominator2
  //         }
  //     }

  //     if(mixOperation>0){
  //         if(mixOperation===1)  var checkNum = (numerator1 * denominator2) + (numerator2 * denominator1);
  //         if(mixOperation===2)  var checkNum = (numerator1 * denominator2) - (numerator2 * denominator1);
  //         if(mixOperation===3)  var checkNum = (numerator1 * numerator2);
  //         if(mixOperation===4){
  //           checkDeno= denominator1*numerator2;
  //           checkNum= numerator1*denominator2
  //         }
  //     }
      

  //     var checkResult = checkNum / checkDeno;
      
  //     if (difficulty === 3) {
  //         if (checkResult > 0) {
  //             break; // Exit the loop if checkResult is greater than 0
  //         }
  //     } else {
  //         break; // Exit the loop if difficulty is not 3
  //     }
  // } while (true);
  
    randomSheetArray.push({
      numerator1,
      denominator1,
      numerator2,
      denominator2,
      isSubmitted: false,
      objectResult: false
    });

  }
  console.log("this array ", randomSheetArray)
  setRandomSheetArray(randomSheetArray)
} 


const handleSubmit = (randomNum) => {
  const checkDeno = randomNum.denominator1 * randomNum.denominator2;

  const checkNum = (randomNum.numerator1*randomNum.denominator2) + (randomNum.numerator2*randomNum.denominator1);

  const checkResult = checkNum/checkDeno

  const inputResult = inputs.numerator/inputs.denominator;

  if(checkResult===inputResult){
    setArrayResult(true)
  }
  else{
    setArrayResult(false)
  }

  setShowCheckModal(true)
}

 if(showRandomSheets)

  return  (
    <div className='flex flex-col justify-center mt-6 rounded-md '>
        <div className='px-auto flex flex-col  gap-4 bg-gray-50'>
             
                      {randomSheetArray.map((randomNums, index)=> (
                        <div className='px-[40px]  pt-6 pb-4  mt-6 mx-4 bg-white rounded-md'>
                          
                          <div className='bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center'><h2 className='text-gray-500 italic text-[18px]' >{index+1}</h2></div>
                              {(operation===4 || mixOperation===4)?
                                    <div className='flex items-center justify-center '>
                                      {difficulty===1 &&
                                            <table className='digit '>
                                            <tr className=''>
                                              <td className='first-col px-4'>
                                                  <table className=''>
                                                    <tbody className=''>
                                                        <tr className=''>
                                                          {randomNums.numerator1}
                                                        </tr>
                                                        <tr className='flex items-center mt-4 mb-4'>
                                                            <div class="border-t border-2  border-gray-500   w-6 mx-auto"></div>
                                                        </tr>
                                                        <tr>
                                                          {randomNums.denominator1}
                                                        </tr>
                                                    </tbody>
                                                  </table>
                                                  
                                              </td>

                                          
                
                                              <td className='opertor px-4'>
                                                  <table>
                                                    <tbody>
                                                      {(operation>0)?
                                                        <tr>
                                                            {operation===1  && <h2>+</h2>}
                                                            {operation===2 && <h2>-</h2>}
                                                            {operation===3 && <h2>&times;</h2>}
                                                            {operation===4 && <h2>&divide;</h2>}
                                                        </tr>
                                                          :
                                                          <tr>
                                                            { mixOperation===1 && <h2>+</h2>}
                                                            { mixOperation===2 && <h2>-</h2>}
                                                            { mixOperation===3 && <h2>&times;</h2>}
                                                            { mixOperation===4 && <h2>&divide;</h2>}
                                                        </tr>
                
                                                        }
                                                    </tbody>
                                                  </table>
                                              </td>
                
                                              <td className='second-col px-4'>
                                                  <table>
                                                    <tbody>
                                                        <tr>
                                                          {randomNums.numerator2}
                                                        </tr>
                                                        <tr className='flex items-center mt-4 mb-4'>
                                                            <div class="border-t border-2  border-gray-500   w-6 mx-auto"></div>
                                                        </tr>
                                                        <tr>
                                                          {(operation<3 && sameDenoms)? randomNums.denominator1 : randomNums.denominator2}
                                                        </tr>
                                                    </tbody>
                                                  </table>
                                              </td>
                
                                              <td className='= px-6'>
                                                <tr>=</tr>
                                              </td>
                        {/* ================================================== input side ========================================== */}
                                              <td className='inputs px-4 flex flex-row'>
                                              <td className='first-col px-4'>
                                                  <table className=''>
                                                    <tbody className=''>
                                                        <tr className=''>
                                                          {randomNums.numerator1}
                                                        </tr>
                                                        <tr className='flex items-center mt-4 mb-4'>
                                                            <div class="border-t border-2  border-gray-500   w-6 mx-auto"></div>
                                                        </tr>
                                                        <tr>
                                                          {randomNums.denominator1}
                                                        </tr>
                                                    </tbody>
                                                  </table>
                                              </td>
                
                                              <td className='opertor px-4  flex items-center'>
                                                  <table>
                                                    <tbody className=''>
                                                        <tr>
                                                        <td className="text-center"> {/* Add a td element to center the input */}
                                                          <input onChange={(e)=>setDivisionInputs({...divisionInputs, sign: e.target.value})} id='sign' className='input-div digit-input text-center'   />
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                              </td>
                
                                              <td className='second-col px-4'>
                                                  <table>
                                                    <tbody>
                                                        <tr className=''>
                                                          <input onChange={(e)=>setDivisionInputs({...divisionInputs, numerator2: e.target.value})} id='divisionNum2' className='input digit-input'/>
                                                        </tr>
                                                        <tr className='flex items-center mt-4 mb-4'>
                                                            <div class="border-t border-2  border-gray-500   w-16 mx-auto"></div>
                                                        </tr>
                                                        <tr>
                                                          <input onChange={(e)=>setDivisionInputs({...divisionInputs, denominator2: e.target.value})} id='divisionDeno2' className='input digit-input '/>
                                                        </tr>
                                                    </tbody>
                                                  </table>
                                              </td>       
                                                </td>
                                            </tr>
                                            </table>
                                      }

                                      {difficulty>1 &&
                                            <table className='digit'>
                                            <tr className=''>
                                              <td className='first-col px-4'>
                                                  <table className=''>
                                                    <tbody className=''>
                                                        <tr className=''>
                                                          {randomNums.numerator1}
                                                        </tr>
                                                        <tr className='flex items-center mt-4 mb-4'>
                                                            <div class="border-t border-2  border-gray-500   w-6 mx-auto"></div>
                                                        </tr>
                                                        <tr>
                                                          {randomNums.denominator1}
                                                        </tr>
                                                    </tbody>
                                                  </table>
                                              </td>
                
                                              <td className='opertor px-4'>
                                                  <table>
                                                    <tbody>
                                                      {(operation>0)?
                                                        <tr>
                                                            {operation===1  && <h2>+</h2>}
                                                            {operation===2 && <h2>-</h2>}
                                                            {operation===3 && <h2>&times;</h2>}
                                                            {operation===4 && <h2>&divide;</h2>}
                                                        </tr>
                                                          :
                                                          <tr>
                                                            { mixOperation===1 && <h2>+</h2>}
                                                            { mixOperation===2 && <h2>-</h2>}
                                                            { mixOperation===3 && <h2>&times;</h2>}
                                                            { mixOperation===4 && <h2>&divide;</h2>}
                                                        </tr>
                
                                                        }
                                                    </tbody>
                                                  </table>
                                              </td>
                
                                              <td className='second-col px-4'>
                                                  <table>
                                                    <tbody>
                                                        <tr>
                                                          {randomNums.numerator2}
                                                        </tr>
                                                        <tr className='flex items-center mt-4 mb-4'>
                                                            <div class="border-t border-2  border-gray-500   w-6 mx-auto"></div>
                                                        </tr>
                                                        <tr>
                                                          {(operation<3 && sameDenoms)? randomNums.denominator1 : randomNums.denominator2}
                                                        </tr>
                                                    </tbody>
                                                  </table>
                                              </td>
                
                                              <td className='= px-6'>
                                                <tr>=</tr>
                                              </td>
                        {/* ================================================== input side ========================================== */}
                                              <td className='inputs px-4 flex flex-row'>
                                              <td className='first-col px-4'>
                                                  <table>
                                                    <tbody>
                                                        <tr className=''>
                                                          <input onChange={(e)=>setDivisionInputs({...divisionInputs, numerator1: e.target.value})} id='divisionNum1' className='input digit-input'/>
                                                        </tr>
                                                        <tr className='flex items-center mt-4 mb-4'>
                                                            <div class="border-t border-2  border-gray-500   w-16 mx-auto"></div>
                                                        </tr>
                                                        <tr>
                                                          <input onChange={(e)=>setDivisionInputs({...divisionInputs, denominator1: e.target.value})} id='divisionDeno1' className='input digit-input '/>
                                                        </tr>
                                                    </tbody>
                                                  </table>
                                              </td>  
                
                                              <td className='opertor px-4  flex items-center'>
                                                  <table>
                                                    <tbody className=''>
                                                        <tr>
                                                        <td className="text-center"> {/* Add a td element to center the input */}
                                                          <input onChange={(e)=>setDivisionInputs({...divisionInputs, sign: e.target.value})} id='divisionSign' className='input-div digit-input text-center'   />
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                              </td>
                
                                              <td className='second-col px-4'>
                                                  <table>
                                                    <tbody>
                                                        <tr className=''>
                                                          <input onChange={(e)=>setDivisionInputs({...divisionInputs, numerator2: e.target.value})} id='divisionNum2' className='input digit-input'/>
                                                        </tr>
                                                        <tr className='flex items-center mt-4 mb-4'>
                                                            <div class="border-t border-2  border-gray-500   w-16 mx-auto"></div>
                                                        </tr>
                                                        <tr>
                                                          <input onChange={(e)=>setDivisionInputs({...divisionInputs, denominator2: e.target.value})} id='divisionDeno2' className='input digit-input '/>
                                                        </tr>
                                                    </tbody>
                                                  </table>
                                              </td>       
                                                </td>
                                            </tr>
                                            </table>
                                      }
                                      
                                    </div>
                                :
                                   <div className='flex items-center justify-center '>

                                      <table className='digit'>
                                      <tr className=''>
                                        <td className='first-col flex flex-row px-4'>
                                            <table className=''>
                                              <tbody className=''>
                                                  <tr className=''>
                                                    {randomNums.numerator1}
                                                  </tr>
                                                  <tr className='flex items-center mt-4 mb-4'>
                                                      <div class="border-t border-2  border-gray-500   w-6 mx-auto"></div>
                                                  </tr>
                                                  <tr>
                                                    {randomNums.denominator1}
                                                  </tr>
                                              </tbody>
                                            </table>
                                      {/* ======= check if the operation is addition and denominators are different, then put extra inputs. */}
                                            {(operation<3 && !sameDenoms) &&
                                                    <div className='ml-4 flex flex-row'>
                                                        <table className='flex items-center'>
                                                          <tbody>
                                                          <tr className='tr-different-deno'>
                                                            <td>
                                                            &times;
                                                            </td>
                                                          </tr>
                                                          </tbody>
                                                        </table>
                                                        <table className=''>
                                                        <tbody className=''>
                                                            <tr className=''>
                                                              <div className='max-w-4'>
                                                              <input onChange={(e)=>setAdditionInputs({...additionInputs, numerator1: e.target.value})} id='num' className='input digit-input'/>
                                                              </div>
                                                            
                                                            </tr>
                                                            <tr className='flex items-center mt-4 mb-4'>
                                                                <div class="border-t border-2  border-gray-500   w-16 mx-auto"></div>
                                                            </tr>
                                                            <tr>
                                                            <input onChange={(e)=>setAdditionInputs({...additionInputs, denominator1: e.target.value})} id='num' className='input digit-input'/>
                                                            </tr>
                                                        </tbody>
                                                      </table>
                                                    </div>
                                            }
                                        </td>

                                        <td className='opertor px-4'>
                                            <table>
                                              <tbody>
                                                {(operation>0)?
                                                  <tr>
                                                      {operation===1  && <h2>+</h2>}
                                                      {operation===2 && <h2>-</h2>}
                                                      {operation===3 && <h2>&times;</h2>}
                                                      {operation===4 && <h2>&divide;</h2>}
                                                  </tr>
                                                  :
                                                  <tr>
                                                      { mixOperation===1 && <h2>+</h2>}
                                                      { mixOperation===2 && <h2>-</h2>}
                                                      { mixOperation===3 && <h2>&times;</h2>}
                                                      { mixOperation===4 && <h2>&divide;</h2>}
                                                  </tr>

                                                  }
                                              </tbody>
                                            </table>
                                        </td>

                                        <td className='second-col flex flex-row px-4'>
                                            <table>
                                              <tbody>
                                                  <tr>
                                                    {randomNums.numerator2}
                                                  </tr>
                                                  <tr className='flex items-center mt-4 mb-4'>
                                                      <div class="border-t border-2  border-gray-500   w-6 mx-auto"></div>
                                                  </tr>
                                                  <tr>
                                                    {(operation<3 && sameDenoms)? randomNums.denominator1 : randomNums.denominator2}
                                                  </tr>
                                              </tbody>
                                            </table>
                                            {(operation<3 && !sameDenoms) &&
                                                    <div className='ml-4 flex flex-row'>
                                                        <table className='flex items-center'>
                                                          <tbody>
                                                          <tr className='tr-different-deno'>
                                                            <td>
                                                            &times;
                                                            </td>
                                                          </tr>
                                                          </tbody>
                                                        </table>
                                                        <table className=''>
                                                        <tbody className=''>
                                                            <tr className=''>
                                                              <div className='max-w-4'>
                                                              <input onChange={(e)=>setAdditionInputs({...additionInputs, numerator2: e.target.value})} id='num' className='input digit-input'/>
                                                              </div>
                                                            
                                                            </tr>
                                                            <tr className='flex items-center mt-4 mb-4'>
                                                                <div class="border-t border-2  border-gray-500   w-16 mx-auto"></div>
                                                            </tr>
                                                            <tr>
                                                            <input onChange={(e)=>setAdditionInputs({...additionInputs, denominator2: e.target.value})} id='num' className='input digit-input'/>
                                                            </tr>
                                                        </tbody>
                                                      </table>
                                                    </div>
                                            }
                                        </td>

                                        <td className='= px-6'>
                                          <tr>=</tr>
                                        </td>

                                        <td className='inputs px-4'>
                                            <table>
                                              <tbody>
                                                  <tr>
                                                      <input onChange={(e)=>setInputs({...inputs, numerator: e.target.value})} id='num' className='input digit-input'/>
                                                  </tr>
                                                  <tr className='flex items-center mt-4 mb-4'>
                                                      <div class="border-t border-2  border-gray-500   w-20 mx-auto"></div>
                                                  </tr>
                                                  <tr>
                                                    <input id='deno' onChange={(e)=>setInputs({...inputs, denominator: e.target.value})}  className='input digit-input'/>
                                                  </tr>
                                              </tbody>
                                            </table>
                                        </td>
                                      </tr>
                                      </table>  
                                      </div>                 
                       }

                         <div className='mt-6 w-full  flex justify-center'>
                       
                          {randomNums.isSubmitted?
                             <div className='w-full'>
                             {submitted ? (
                                <div>
                                  { randomNums.objectResult ? (
                                    <div className='w-full flex justify-center'>
                                    <button className='w-[50%] rounded-[5px] py-1 border border-1 border-gray-400 text-white bg-green-800 hover:bg-green-600'>Exellent!</button>
                                    </div>
                                  ) : (
                                    <div className='w-full flex justify-center'>
                                    <button className='w-[50%] rounded-[5px] py-1 border border-1 border-gray-400 text-white bg-orange-600 hover:bg-orange-500'>Oops.. Solution?</button>
                                    </div>
                                  )}
                                </div>
                              ) : (
                                <div className='w-full flex justify-center'>
                                <button onClick={()=>handleArrayCheck({randomNums})} disabled={true} className=' w-[50%] rounded-[5px] py-1 border border-1 border-gray-400 bg-green-500 hover:text-white hover:bg-green-800'>submitted</button>
                                </div>
                              )}

                            </div>
                           :
                           <div className='w-full flex justify-center '>
                       
                               <button onClick={()=>handleArrayCheck({randomNums})} className=' w-[50%] rounded-[5px] py-1 border border-1 border-gray-400 hover:text-white hover:bg-green-800'>submit</button>
                          </div>
                        }
                          </div>
                        </div>
                      ))} 


                      <div className=' w-full text-center  items-center  my-4 '>
                         <button onClick={()=>{
                          console.log("object coutn" , objectSubmitCount)
                          setSubmitted(true)}} disabled={objectSubmitCount<4}  className=' w-[60%] rounded-[5px] py-1 border border-1 border-gray-400  hover:text-white hover:bg-green-800'>Submit</button>
                      </div>
              </div>
            
              <CheckModal showCheckModal={showCheckModal} setShowCheckModal={setShowCheckModal} result={arrayResult}/>
    </div>
  )
}

export default RandomSheets
