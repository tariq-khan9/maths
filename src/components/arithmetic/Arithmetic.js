import React, {useState, useEffect, useRef} from 'react'

import CheckModal from './CheckModal';
import RandomSheets from './RandomSheets';
import SolutionModal from './SolutionModal';
import DropdownMulti from './DropdownMulti';
import MathInput from './MathInput';





const Arithmetic = () => {

  const [randomNums, setRandomNums] = useState({
    numerator1 : 1,
    denominator1 : 1,
    numerator2 : 1,
    denominator2 : 1
  })

  const [divisionInputs, setDivisionInputs] = useState({
    numerator1: 0,
    numerator2: 0,
    denominator1: 0,
    denominator2: 0,
    sign: ''
  })

  const [additionInputs, setAdditionInputs] = useState({
    numerator1: 0,
    numerator2: 0,
    denominator1: 0,
    denominator2: 0
  })

  const [result, setResult] = useState(false)
  const [difficulty, setDifficulty] =  useState(1)
  const [operation, setOperation] = useState(1);
  const [sameDenoms, setSameDenoms] = useState(true)
  const [mixOperation, setMixOperation] =  useState(0);

  const [inputs, setInputs] = useState({
    numerator: 0,
    denominator: 0
  })

  const [inputRange, setInputRange] = useState({
    min:1,
    max:9
  })

  const [showRandomSheets, setShowRandomSheets] = useState(false)
  const [totalSheets, setTotalSheets] = useState(0);
  const [showCheckModal, setShowCheckModal] = useState(false)
  const [showSolutionModal, setShowSolutionModal]= useState(false)

  
 

  useEffect(() => {

   


     handleNext()
     setInputs({
      numerator: '',
      denominator: ''
     })

     setAdditionInputs({
      numerator1:'',
      numerator2:'',
      denominator1:'',
      denominator2:''
     })

     setDivisionInputs({
      numerator1:'',
      numerator2:'',
      denominator1:'',
      denominator2:''
     })
 
    
    
  
  }, [difficulty, operation, sameDenoms, showRandomSheets, totalSheets])


 
  
  
 
  function getRandomNumber(min, max) {
    let randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    } 
    while (randomNumber===0)
    
    return randomNumber;
  }

 

  const handleNext = () => {
    console.log(additionInputs)

    if(mixOperation>0){
       setOperation(0)
       const operator = getRandomNumber(1, 4)
       setMixOperation(operator)
    }

    switch (difficulty) {
      case 1: 
          setInputRange({min:1, max:9});
        break;

      case 2:    
      setInputRange({min:1, max:30});
        break;

      case 3:
        setInputRange({min:-9, max:9});
      break;

      case 4:
        setInputRange({min:-9, max:9});
    break;

      default:
        setInputRange({min:1, max:9});
        break;
    }
   
    do {
        var negativeCount = 0;
        var numerator1 = getRandomNumber(inputRange.min, inputRange.max);
        var denominator1 = getRandomNumber(inputRange.min, inputRange.max);
        var numerator2 = getRandomNumber(inputRange.min, inputRange.max);
        var denominator2 = getRandomNumber(inputRange.min, inputRange.max);

        if (numerator1 < 0) negativeCount++;
        if (denominator1 < 0) negativeCount++;
        if (numerator2 < 0) negativeCount++;
        if (denominator2 < 0) negativeCount++;  
         // Check if difficulty is 3 and there are more than 1 negative numbers
        if ((difficulty === 3 && negativeCount>1) || (sameDenoms && denominator1<0)) {
          continue; // Skip this iteration and generate new numbers
        }

        

       

      // when operation is add or subtranct and sameDenoms is true
        if(operation<3 && sameDenoms){
          var checkDeno = denominator1 * denominator1;
        }
        else{
          checkDeno = denominator1 * denominator2;
        }
        
        if(operation>0){
            if(operation===1)  var checkNum = (numerator1 * denominator2) + (numerator2 * denominator1);
            if(operation===2)  var checkNum = (numerator1 * denominator2) - (numerator2 * denominator1);
            if(operation===3)  var checkNum = (numerator1 * numerator2);
            if(operation===4){
              checkDeno= denominator1*numerator2;
              checkNum= numerator1*denominator2
            }
        }

        if(mixOperation>0){
            if(mixOperation===1)  var checkNum = (numerator1 * denominator2) + (numerator2 * denominator1);
            if(mixOperation===2)  var checkNum = (numerator1 * denominator2) - (numerator2 * denominator1);
            if(mixOperation===3)  var checkNum = (numerator1 * numerator2);
            if(mixOperation===4){
              checkDeno= denominator1*numerator2;
              checkNum= numerator1*denominator2
            }
        }
        

        var checkResult = checkNum / checkDeno;
        
        if (difficulty === 3) {
            if (checkResult > 0) {
                break; // Exit the loop if checkResult is greater than 0
            }
        } else {
            break; // Exit the loop if difficulty is not 3
        }
    } while (true);

    setRandomNums({
        numerator1: numerator1,
        denominator1: denominator1,
        numerator2: numerator2,
        denominator2: denominator2
    });
    
  }

  // const handleShowRandom = () => {
  //   if(totalSheets>2){
  //     if(showRandomSheets){
  //       setShowRandomSheets(false)
  //       setShowRandomSheets(true)
  //     }
  //     else{
  //       setShowRandomSheets(true)
  //     }
      
  //   }
  //   else{
  //     setTotalSheets(0)
  //   }
    
  // }

  const handleSetTotalSheets = (value) => {
    const intValue = parseInt(value);
  if (!isNaN(intValue) && intValue >= 3 && intValue <= 20 ) {
    setTotalSheets(intValue);
    setShowRandomSheets(true)
  } else {
    setTotalSheets(0)
    console.log("Invalid input. Please enter an even number between 6 and 20.");
  }
    
  };

  const handleCheck = () => {
    let checkResult;
    let inputResult = inputs.numerator/inputs.denominator;

    if(operation===1 || mixOperation===1){
        if(sameDenoms){
          const checkDeno = randomNums.denominator1;
          const checkNum = randomNums.numerator1  + randomNums.numerator2;
           checkResult = checkNum / checkDeno;
        }
        else{
              const checkDeno = randomNums.denominator1 * randomNums.denominator2
              const checkNum = (randomNums.numerator1 * randomNums.denominator2) + (randomNums.numerator2 * randomNums.denominator1);
            
              if(parseInt(additionInputs.numerator1)===randomNums.denominator2 
                && parseInt(additionInputs.denominator1)===randomNums.denominator2 
                && parseInt(additionInputs.numerator2)===randomNums.denominator1 
                && parseInt(additionInputs.denominator2)===randomNums.denominator1)
              {
                 checkResult = checkNum / checkDeno;
              }
              else{
                 checkResult = checkNum;
              }
              
        }
        inputResult = inputs.numerator/inputs.denominator;
    }

    if(operation===2 || mixOperation===2){
      if(sameDenoms){
        const checkDeno = randomNums.denominator1;
        const checkNum = randomNums.numerator1  - randomNums.numerator2;
         checkResult = checkNum / checkDeno;
      }
      else{
            const checkDeno = randomNums.denominator1 * randomNums.denominator2
            const checkNum = (randomNums.numerator1 * randomNums.denominator2) - (randomNums.numerator2 * randomNums.denominator1);

            if(parseInt(additionInputs.numerator1)===randomNums.denominator2 
            && parseInt(additionInputs.denominator1)===randomNums.denominator2 
            && parseInt(additionInputs.numerator2)===randomNums.denominator1 
            && parseInt(additionInputs.denominator2)===randomNums.denominator1)
          {
             checkResult = checkNum / checkDeno;
          }
          else{
             checkResult = checkNum;
          }
            
      }
      inputResult = inputs.numerator/inputs.denominator;
    }

    if(operation===3 || mixOperation===3){
      const checkNum = randomNums.numerator1 * randomNums.numerator2;
      const checkDeno = randomNums.denominator1 * randomNums.denominator2;
     
      checkResult = checkNum / checkDeno;
      inputResult = inputs.numerator/inputs.denominator;
    }

    if(operation===4 || mixOperation===4){
        if(difficulty===1){
          
          var deno2 = parseInt(divisionInputs.denominator2)
          var num2 = parseInt(divisionInputs.numerator2)
          console.log(randomNums.numerator2, deno2, randomNums.denominator2, num2, divisionInputs.sign)
          if(randomNums.numerator2===deno2 && randomNums.denominator2===num2 && divisionInputs.sign==='*'){
            //setResult(true)
            checkResult=1;
            inputResult=1;
            console.log(checkResult, inputResult)
          }
          else{
            //setResult(false)
            checkResult=1;
            inputResult=2;
          }
        }

        if(difficulty>1){
          console.log("operation 4 and diffi is >1==")
          var deno2 = parseInt(divisionInputs.denominator2)
          var num2 = parseInt(divisionInputs.numerator2)
          var deno1 = parseInt(divisionInputs.denominator1)
          var num1 = parseInt(divisionInputs.numerator1)
         
          if((randomNums.numerator2===deno2 
            && randomNums.denominator2===num2 
            && randomNums.numerator1===num1 
            && randomNums.denominator1===deno1  
            && divisionInputs.sign==='*')
            ||
            (randomNums.numerator1===deno1 
            && randomNums.denominator1===num1 
            && randomNums.numerator2===num2 
            && randomNums.denominator2===deno2  
            && divisionInputs.sign==='*')){
            //setResult(true)
            checkResult=1;
            inputResult=1;
          }
         
        

          else{
           // setResult(false)
           checkResult=1;
           inputResult=2;
          }
        }
     
    }

   
  
    if(checkResult===inputResult){
      setResult(true)
    }
    else{
      setResult(false)
    }
  
    setShowCheckModal(true)
  }

  return (
    <div className='px-[20px] w-full flex flex-col pt-12 mt-[30px]'>
        
    {/******************************  difficulty level *******************************/}
    
     
       <div className='difficulty-div w-100 h-20 mt-6  bg-slate-50 rounded-md flex flex-row text-center  justify-center'>
          <div className=' w-[25%]  flex items-center justify-center'>
              <DropdownMulti setOperation={setOperation} setMixOperation={setMixOperation} setSameDenoms={setSameDenoms}/>
          </div >
          <div className=' w-[50%] pt-1 '> 
            <h4 className='sub-hd italic text-orange-600 text-center'>Difficulty level</h4>
             <div className='flex gap-[50px] justify-center  mt-3'>                      
                   <div className='flex items-center'>
                      <input checked={difficulty===1? true : false}  onChange={(e)=>setDifficulty(1)} type="radio" className='appearance-none w-4 h-4 border border-gray-400 rounded-[3px] checked:bg-green-600 checked:border-transparent    focus:ring-opacity-50' id="level1" name="options" value="1"/>
                      <label className='ml-2 text-gray-500 text-[15px]'>First</label>
                   </div>

                   <div className='flex items-center'>
                      <input onChange={(e)=>setDifficulty(2)} type="radio" className='appearance-none w-4 h-4 border border-gray-400 rounded-[3px] checked:bg-green-800 checked:border-transparent    focus:ring-opacity-50' id="level2" name="options" value="2"/>
                      <label className='ml-2 text-gray-500 text-[15px]'>Second</label>
                   </div>


                   <div className='flex items-center'>
                      <input onChange={(e)=>setDifficulty(3)} type="radio" className='appearance-none w-4 h-4 border border-gray-400 rounded-[3px] checked:bg-orange-500 checked:border-transparent    focus:ring-opacity-50' id="level4" name="options" value="4"/>
                      <label className='ml-2 text-gray-500 text-[15px]'>Third</label>
                   </div>

                   <div className='flex items-center'>
                      <input onChange={(e)=>setDifficulty(4)} type="radio" className='appearance-none w-4 h-4 border border-gray-400 rounded-[3px] checked:bg-orange-700 checked:border-transparent    focus:ring-opacity-50' id="level5" name="options" value="5"/>
                      <label className='ml-2 text-gray-500 text-[15px]'>Fourth</label>
                   </div> 
            </div>
       
        </div>
       </div>
       

       
   {/******************************  Drill section  *******************************/}
        <div className='card-drill'>
                <h1 className='hd-drill text-green-600'>Try Out this Drill..</h1>
                <h5 className='sub-hd'>Solve this fraction</h5>

                <div className='math  flex justify-center mt-6 '>
                      {(operation===4 || mixOperation===4)?
                          <div>
                            {difficulty===1 &&
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
                                            
                                            <MathInput  type='numerator' setInputs={setInputs} inputs={inputs} difficulty={difficulty} operation={operation} sameDenoms={sameDenoms}/>
                                            
                                        </tr>
                                        <tr className='flex items-center mt-4 mb-4'>
                                            <div class="border-t border-2  border-gray-500   w-20 mx-auto"></div>
                                        </tr>
                                        <tr>
                                        <MathInput type='denominator' setInputs={setInputs} inputs={inputs} difficulty={difficulty} operation={operation} sameDenoms={sameDenoms}/>
                                        </tr>
                                    </tbody>
                                  </table>
                              </td>
                            </tr>
                            </table>                   
                      }
                           
                       
                </div>

                <div className='buttons w-full   flex flex-row justify-center mt-14'>
                      <button onClick={handleCheck} className='btn-green'>Check</button>

                      <button onClick={handleNext} className='btn-orange'>Next</button>
                     
                      
                </div>
        </div>

        <div className='buttons-div w-100 h-16 bg-slate-50 mt-6 rounded-md flex items-center justify-center '> 
            <div className='flex flex-row justify-center  items-center'>
              <label className=' text-[20px] font-thin text-gray-700 mx-2'>Random Sheets:</label>
               <input  className='input digit-input' onChange={(e)=>handleSetTotalSheets(e.target.value)}/>
               <div className=' items-end h-4'>
                 <label className='text-[12px] italic mx-2 text-orange-500'>Please provide even numbers ranging from 6 to 20.</label>
               </div>

            </div>
       
        </div>
        {totalSheets>2 && 
          <RandomSheets getRandomNumber={getRandomNumber} showRandomSheets={showRandomSheets}  operation={operation} mixOperation={mixOperation} totalSheets={totalSheets} inputRange={inputRange} additionInputs={additionInputs} setAdditionInputs={setAdditionInputs} sameDenoms={sameDenoms} divisionInputs={divisionInputs} setDivisionInputs={setDivisionInputs}  difficulty={difficulty}  handleCheck={handleCheck}/>
        }
        

        {/* <Temp totalSheets={totalSheets} temp={temp}/> */}
        
        <CheckModal showCheckModal={showCheckModal}  setShowSolutionModal={setShowSolutionModal} setShowCheckModal={setShowCheckModal} result={result}/>
        <SolutionModal showSolutionModal={showSolutionModal} setShowSolutionModal={setShowSolutionModal} setShowCheckModal={setShowCheckModal} randomNums={randomNums} operation={operation} mixOperation={mixOperation} inputs={inputs} sameDenoms={sameDenoms}/>
    </div>
  )
}

export default Arithmetic




