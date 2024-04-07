import React,{useState, useEffect, useRef} from 'react'
import CheckModal from './CheckModal'
import SolutionModal from './SolutionModal';
import MathArrayInput from './MathArrayInput'
import {  toast } from 'sonner'


const RandomSheets = ({getRandomNumber, showRandomSheets, totalSheets,  setShowRandom, operation, mixOperation,difficulty, inputRange, additionInputs, setAdditionInputs, sameDenoms, divisionInputs, setDivisionInputs}) => {
  // console.log("operation", operation, "mix operatio", mixOperation, "difficu", difficulty, "min", inputRange)
 
  
  let sheets = totalSheets;
 
  
 const [randomSheetArray, setRandomSheetArray] = useState([])
 const [showCheckModal, setShowCheckModal] = useState(false)
 const [showSolutionModal, setShowSolutionModal] = useState(false)
 const [showSubmitResultModal, setShowSubmitResultModal] = useState(false)
 const [submitted, setSubmitted] = useState(false)
 const [arrayResult, setArrayResult] = useState(false)
 const [submitResult, setSubmitResult] =  useState(0)
 const [objectSubmitCount, setObjectSubmitCount] = useState(0)
 
 const [inputs, setInputs] = useState(randomSheetArray.map(() => ({
  numerator: 1,
  denominator: 1
})));



  useEffect(() => {
     
   
    handleRandomSheets(sheets)
   
  
   
  
  }, [totalSheets, showRandomSheets,showSolutionModal, arrayResult]);
 
 



  const handleArrayCheck = (randomNums) => {
    if(!randomNums.randomNums.inputNum || !randomNums.randomNums.inputDenom){
      toast.error('Please enter numerator and denominator for inputs.')
      return;
    }
    setObjectSubmitCount(objectSubmitCount+1)
    const { numerator1, denominator1, numerator2, denominator2, showSolutionBtn } = randomNums.randomNums;
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
                setSubmitResult(submitResult+1)
            }



            else {
                setArrayResult(false)
            }
        }

    }

    if (operation !== 4) {
        var inputResult = randomNums.randomNums.inputNum / randomNums.randomNums.inputDenom;

        console.log(inputResult)
         var newCheckResult = parseFloat(checkResult).toFixed(2);
         var newInputResult = parseFloat(inputResult).toFixed(2)
         console.log("check deno", newCheckResult, "check num ", newInputResult)
        if (newCheckResult === newInputResult) {
            const updatedArray = randomSheetArray.map(item => {
              // Compare properties of the objects to determine if they are equal
              if (item.numerator1 === randomNums.randomNums.numerator1 &&
                  item.denominator1 === randomNums.randomNums.denominator1 &&
                  item.numerator2 === randomNums.randomNums.numerator2 &&
                  item.denominator2 === randomNums.randomNums.denominator2) {
                  // If the properties match, return a new object with the updated 
                  return { ...item, isSubmitted:true, objectResult: true, showSolutionModal: false };
              }
              // If the properties don't match, return the original object
              return item;
          });
          setRandomSheetArray(updatedArray);
          setSubmitResult(submitResult+1)
            
           
        } else {
          const updatedArray = randomSheetArray.map(item => {
            // Compare properties of the objects to determine if they are equal
            if (item.numerator1 === randomNums.randomNums.numerator1 &&
                item.denominator1 === randomNums.randomNums.denominator1 &&
                item.numerator2 === randomNums.randomNums.numerator2 &&
                item.denominator2 === randomNums.randomNums.denominator2) {
                // If the properties match, return a new object with the updated 
                return { ...item, isSubmitted: true, objectResult: false, showSolutionModal: false };
            }
            // If the properties don't match, return the original object
            return item;
        });
        setRandomSheetArray(updatedArray);
            
        }
    }
 
}

const handleShowSolutionModal = (index) => {
  // Create a copy of the randomNums array
  const updatedRandomNums = [...randomSheetArray];
  // Set the showSolutionModal property of the specific object to true
  updatedRandomNums[index] = { ...updatedRandomNums[index], showSolutionModal: true };
  // Update the state with the modified array
  setRandomSheetArray(updatedRandomNums);
};

const handleCloseSolutionModal = (index) => {
  // Create a copy of the randomNums array
  const updatedRandomNums = [...randomSheetArray];
  // Set the showSolutionModal property of the specific object to true
  updatedRandomNums[index] = { ...updatedRandomNums[index], showSolutionModal: false };
  // Update the state with the modified array
  setRandomSheetArray(updatedRandomNums);
};

   
 const handleRandomSheets = (sheets) => {

   const updatedArray= [];

  const getRandomOperation = () => Math.floor(Math.random() * 4) + 1;
  
 
  
  for (let i = 0; i < sheets; i++) {
    if(operation===0){
      var arrayOperation = getRandomOperation()
    }
 
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
  
    updatedArray.push({
      numerator1,
      denominator1,
      numerator2,
      denominator2,
      arrayOperation,
      inputNum:'',
      inputDenom:'',
      isSubmitted: false,
      objectResult: false

    });

  }

  setRandomSheetArray(updatedArray)
} 

const handleArrayInputChange = (index, field, value) => {
  const newData = [...randomSheetArray];
  newData[index][field] = parseInt(value);
  setRandomSheetArray(newData);
};


const handleSubmit = (randomNum) => {
  const checkDeno = randomNum.denominator1 * randomNum.denominator2;

  const checkNum = (randomNum.numerator1*randomNum.denominator2) + (randomNum.numerator2*randomNum.denominator1);

  const checkResult = checkNum/checkDeno

  const inputResult = randomNum.inputNum/randomNum.inputDenom;

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
                                                            <input required onChange={(e)=>setAdditionInputs({...additionInputs, denominator1: e.target.value})} id='num' className='input digit-input'/>
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
                                                  <MathArrayInput  type='inputNum' index={index}  randomSheetArray={randomSheetArray} setRandomSheetArray={setRandomSheetArray} difficulty={difficulty} operation={operation} sameDenoms={sameDenoms}/>
                                                  </tr>
                                                  <tr className='flex items-center mt-4 mb-4'>
                                                      <div class="border-t border-2  border-gray-500   w-20 mx-auto"></div>
                                                  </tr>
                                                  <tr>
                                                  <MathArrayInput  type='inputDenom' index={index}  randomSheetArray={randomSheetArray} setRandomSheetArray={setRandomSheetArray} difficulty={difficulty} operation={operation} sameDenoms={sameDenoms}/>
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
                                          
                                        <button className='w-[50%] rounded-[5px] py-1 border border-1 border-gray-400 text-white bg-green-800 hover:bg-green-600'>Excellent!</button>
                                        </div>
                                      ) : (
                                        <div className='w-full flex justify-center'>
                                            {console.log("after submited random objectresult ", randomNums.objectResult)}
                                        <button  onClick={() => handleShowSolutionModal(index, true)} className='w-[50%] rounded-[5px] py-1 border border-1 border-gray-400 text-white bg-orange-600 hover:bg-orange-500'>Oops.. Solution?</button>
                                        </div>
                                      )}
                                    </div>
                                  ) : (
                                    <div className='w-full flex justify-center'>
                                    <button  disabled={true} className=' w-[50%] rounded-[5px] py-1 border border-1 border-gray-400 bg-yellow-300 italic'>Submitted</button>
                                    </div>
                                  )}

                            </div>
                           :
                           <div className='w-full flex justify-center '>
                       
                               <button onClick={()=>handleArrayCheck({randomNums})} className=' w-[50%] rounded-[5px] py-1 border border-1 border-gray-400 hover:text-white hover:bg-green-800'>Submit</button>
                          </div>
                        }
                          </div>
                          {randomNums.showSolutionModal && (
                            <SolutionModal
                              showSolutionModal={randomNums.showSolutionModal}
                              setShowSolutionModal={(value) => handleCloseSolutionModal(index, value)}
                              setShowCheckModal={setShowCheckModal}
                              randomNums={randomNums}
                              operation={operation}
                              mixOperation={mixOperation}
                              inputs={randomNums}
                              sameDenoms={sameDenoms}
                            />
                          )}
                        </div>
                      ))} 


                      <div className=' w-full text-center  items-center  my-4 '>
                         <button onClick={()=>{
                          setSubmitted(true)
                          setShowSubmitResultModal(true)
                          }} disabled={objectSubmitCount<totalSheets}  className=' w-[60%] rounded-[5px] py-1 border border-1 border-gray-400  hover:text-white hover:bg-green-800'>Submit</button>
                      </div>
              </div>
              
              <CheckModal showCheckModal={showCheckModal} setShowCheckModal={setShowCheckModal} result={arrayResult}/>
              <SubmitResultModal showSubmitResultModal={showSubmitResultModal} setShowSubmitResultModal={setShowSubmitResultModal} submitResult={submitResult} sheets={sheets}/>
           
    </div>
  )
}

export default RandomSheets


const SubmitResultModal = ({showSubmitResultModal, setShowSubmitResultModal, submitResult, sheets}) => {

  const percentage = ((submitResult/sheets) * 100).toFixed(0);
  const handleFinalSubmit = () => {
    setShowSubmitResultModal(false)
    console.log(submitResult, "and the sheets are ", sheets)
  }
  if(showSubmitResultModal)
  {
   return (
     <div className=' fixed top-0 left-0 w-full h-full pt-48 bg-transparent w-scree  backdrop-blur-sm flex justify-center items-center '>
 
       <div className='bg-white rounded-md z-40 w-96 max-h-85 mt-[80px] overflow-y-auto  p-4  mb-[200px]'>
             <div className='text-center w-full'>
               <h2 className='text-[25px] font-bold italic  text-green-800 '>Final Result</h2>
               <div className='mt-10 mb-10 p-6'>
                  {percentage<50 && 
                    <p className='text-[22px] font-thin'><span className='text-orange-600 italic text-[25px]'>Oops!</span> you secured <span className='font-semibold text-[30px] italic'>{percentage}%</span> result.</p>
                  }
                    {percentage>=50 && 
                    <p className='text-[22px] font-thin'><span className='text-green-800 italic text-[25px]'>Excellent!</span> you secured <span className='font-semibold text-[30px] italic'>{percentage}%</span> result.</p>
                  }
               </div>
             </div>
           
                {/* ====================================== close button ======================================== */}
                <div onClick={()=>handleFinalSubmit()} className='flex flex-row w-full  justify-end mt-4 pr-4'>
                      <button className='flex justify-items-end p-1 pb-2 px-8 text-white rounded-md bg-orange-500' >Close</button>
              </div>
             
       </div>
    </div>
   )
  }
}
