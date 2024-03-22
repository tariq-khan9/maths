import React, {useState, useEffect, useRef} from 'react'
import DropdownButton from './DropdownButton';
import CheckModal from './CheckModal';
import RandomSheets from './RandomSheets';
import SolutionModal from './SolutionModal';







// ========================================================================================
// =========================== main arithmetic component ==================================
// ========================================================================================
const Arithmetic = () => {

  const [randomNums, setRandomNums] = useState({
    numerator1 : 1,
    denominator1 : 1,
    numerator2 : 1,
    denominator2 : 1
  })

  const [result, setResult] = useState(false)
  const [difficulty, setDifficulty] =  useState(1)
  const [operation, setOperation] = useState(1);
  const [sameDenoms, setSameDenoms] = useState(false)
  const [mixOperation, setMixOperation] =  useState(1);

  const [inputs, setInputs] = useState({
    numerator: 1,
    denominator: 1
  })

  const [inputRange, setInputRange] = useState({
    min:1,
    max:9
  })

  const [showRandom, setShowRandom] = useState(false)
  const [showCheckModal, setShowCheckModal] = useState(false)
  const [showSolutionModal, setShowSolutionModal]= useState(false)

  
  
 

  useEffect(() => {
     handleNext()
  
  }, [difficulty, operation])

  
  const handleOperation = (op) => {
    if(op===5){
      setOperation(0)
      setMixOperation(2)
    }
    else{
      setOperation(op)
      setMixOperation(0)
    }

  }
 
  function getRandomNumber(min, max) {
    // Generate a random number between min and max (inclusive of both)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

 

  const handleNext = () => {
    // let min ;
    // let max ;
   
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
        if ((difficulty === 3 && negativeCount > 1) || (sameDenoms && denominator1<0) ) {
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
    console.log("check result", checkResult)
  }

 

  const handleCheck = () => {
    if(operation===1){
        if(sameDenoms){
          const checkDeno = randomNums.denominator1;
          const checkNum = randomNums.numerator1  + randomNums.numerator2;
          var checkResult = checkNum / checkDeno;
        }
        else{
              const checkDeno = randomNums.denominator1 * randomNums.denominator2
              const checkNum = (randomNums.numerator1 * randomNums.denominator2) + (randomNums.numerator2 * randomNums.denominator1);
              var checkResult = checkNum / checkDeno;
        }
    }
    if(operation===2){
      if(sameDenoms){
        const checkDeno = randomNums.denominator1;
        const checkNum = randomNums.numerator1  - randomNums.numerator2;
        var checkResult = checkNum / checkDeno;
      }
      else{
            const checkDeno = randomNums.denominator1 * randomNums.denominator2
            const checkNum = (randomNums.numerator1 * randomNums.denominator2) - (randomNums.numerator2 * randomNums.denominator1);
             var checkResult = checkNum / checkDeno;
      }
      
    }
    if(operation===3){
      const checkNum = randomNums.numerator1 * randomNums.numerator2;
      const checkDeno = randomNums.denominator1 * randomNums.denominator2;
     
      var checkResult = checkNum / checkDeno;
    }
    if(operation===4){
      const checkNum = randomNums.numerator1 * randomNums.denominator2;
      const checkDeno = randomNums.denominator1 * randomNums.numerator2;
     
      var checkResult = checkNum / checkDeno;
    }
                var inputResult = inputs.numerator/inputs.denominator;
            
               // console.log("check deno", checkDeno, "check num ", checkNum)
                if(checkResult===inputResult){
                  setResult(true)
                }
                else{
                  setResult(false)
                }

                // console.log("check result", checkResult,"input result", inputResult)

                // console.log("num1", randomNums.numerator1, "num2", randomNums.numerator2, "dem1", randomNums.denominator1, "dem2", randomNums.denominator2)

                // console.log("checkNum", checkNum, "checkDeno", checkDeno)

        
    /////////////////////////////////////////////////////////////////////////////////////////// 

    // if(difficulty===2){
    //   if (operation===1){
    //           const checkDeno = randomNums.numerator1 + randomNums.numerator2;

    //           const checkNum = (randomNums.numerator1*randomNums.denominator2) + (randomNums.numerator2*randomNums.denominator1);

    //           var checkResult = checkNum/checkDeno

    //           var inputResult = inputs.numerator/inputs.denominator;

    //           console.log(checkResult, inputResult)
    //   }

    //   if (operation===2){
    //         const checkDeno = randomNums.denominator1 * randomNums.denominator2;

    //         const checkNum = (randomNums.numerator1*randomNums.denominator2) - (randomNums.numerator2*randomNums.denominator1);

    //         var checkResult = checkNum/checkDeno

    //         var inputResult = inputs.numerator/inputs.denominator;
    //   }

    //   if (operation===3) {
    //         const checkDeno = randomNums.denominator1 * randomNums.denominator2;

    //         const checkNum =  randomNums.numerator1 * randomNums.numerator2;

    //         var checkResult = checkNum/checkDeno

    //         var inputResult = inputs.numerator/inputs.denominator;
    //   }
    // }

    //////////////////////////////////////////////////////////////////////////////////////////
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
        <div className='buttons-div w-100 h-16 bg-slate-50 rounded-md flex items-center justify-center '> 
            <div className='flex flex-row justify-center  items-center'>
              
              <button onClick={()=>handleOperation(1)} className={`btn-tab ${operation === 1 ? 'btn-selected' : ''}`}><DropdownButton title='Addition' setSameDenoms={setSameDenoms}/></button> 
              <button onClick={()=>handleOperation(2)} className={`btn-tab ${operation === 2 ? 'btn-selected' : ''}`}><DropdownButton title='Subtraction' setSameDenoms={setSameDenoms}/></button>
              <button onClick={()=>handleOperation(3)} className={`btn-tab ${operation === 3 ? 'btn-selected' : ''}`}>Multiplication</button>
              <button onClick={()=>handleOperation(4)} className={`btn-tab ${operation === 4 ? 'btn-selected' : ''}`}>Division</button>
              <button onClick={()=>handleOperation(5)} className={`btn-tab ${operation === 0 ? 'btn-selected' : ''}`}>Mixed</button>
            </div>
       
        </div>
    {/******************************  difficulty level *******************************/}
        <div className='difficulty-div w-100 h-20 mt-6  bg-slate-50 rounded-md flex flex-col text-center  justify-center '> 
            <h4 className='sub-hd italic text-center'>Difficulty level</h4>
             <div className='flex gap-[50px] justify-center  mt-3'>                      
                   <div className='flex items-center'>
                      <input checked={difficulty===1? true : false}  onChange={(e)=>setDifficulty(1)} type="radio" className='appearance-none w-4 h-4 border border-gray-400 rounded-[3px] checked:bg-green-600 checked:border-transparent    focus:ring-opacity-50' id="level1" name="options" value="1"/>
                      <label className='ml-2 text-gray-500 text-[15px]'>Level 1</label>
                   </div>

                   <div className='flex items-center'>
                      <input onChange={(e)=>setDifficulty(2)} type="radio" className='appearance-none w-4 h-4 border border-gray-400 rounded-[3px] checked:bg-green-800 checked:border-transparent    focus:ring-opacity-50' id="level2" name="options" value="2"/>
                      <label className='ml-2 text-gray-500 text-[15px]'>Level 2</label>
                   </div>


                   <div className='flex items-center'>
                      <input onChange={(e)=>setDifficulty(3)} type="radio" className='appearance-none w-4 h-4 border border-gray-400 rounded-[3px] checked:bg-orange-500 checked:border-transparent    focus:ring-opacity-50' id="level4" name="options" value="4"/>
                      <label className='ml-2 text-gray-500 text-[15px]'>Level 3</label>
                   </div>

                   <div className='flex items-center'>
                      <input onChange={(e)=>setDifficulty(4)} type="radio" className='appearance-none w-4 h-4 border border-gray-400 rounded-[3px] checked:bg-orange-700 checked:border-transparent    focus:ring-opacity-50' id="level5" name="options" value="5"/>
                      <label className='ml-2 text-gray-500 text-[15px]'>Level 4</label>
                   </div> 
            </div>
       
        </div>


   {/******************************  Drill section  *******************************/}
        <div className='card-drill'>
                <h1 className='hd-drill'>Try Out this Drill..</h1>
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
                                                <input className='input-div digit-input text-center'   />
                                              </td>
                                            </tr>
                                           </tbody>
                                         </table>
                                     </td>
      
                                     <td className='second-col px-4'>
                                         <table>
                                           <tbody>
                                               <tr className=''>
                                                 <input className='input digit-input'/>
                                               </tr>
                                               <tr className='flex items-center mt-4 mb-4'>
                                                   <div class="border-t border-2  border-gray-500   w-16 mx-auto"></div>
                                               </tr>
                                               <tr>
                                                 <input className='input digit-input '/>
                                               </tr>
                                           </tbody>
                                         </table>
                                     </td>       
                                      </td>
                                   </tr>
                                   </table>
                            }

                            {difficulty===2 &&
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
                                                 <input className='input digit-input'/>
                                               </tr>
                                               <tr className='flex items-center mt-4 mb-4'>
                                                   <div class="border-t border-2  border-gray-500   w-16 mx-auto"></div>
                                               </tr>
                                               <tr>
                                                 <input className='input digit-input '/>
                                               </tr>
                                           </tbody>
                                         </table>
                                     </td>  
      
                                     <td className='opertor px-4  flex items-center'>
                                         <table>
                                           <tbody className=''>
                                              <tr>
                                              <td className="text-center"> {/* Add a td element to center the input */}
                                                <input className='input-div digit-input text-center'   />
                                              </td>
                                            </tr>
                                           </tbody>
                                         </table>
                                     </td>
      
                                     <td className='second-col px-4'>
                                         <table>
                                           <tbody>
                                               <tr className=''>
                                                 <input className='input digit-input'/>
                                               </tr>
                                               <tr className='flex items-center mt-4 mb-4'>
                                                   <div class="border-t border-2  border-gray-500   w-16 mx-auto"></div>
                                               </tr>
                                               <tr>
                                                 <input className='input digit-input '/>
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
                      }
                           
                          
                    {/* //////////////////////////////////////////////////////////////////////////////////////////// */}
                          {/* {
                          difficulty===2 &&
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
                                          <tr>
                                            {getOperator(operation)}
                                          </tr>
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
                                            {randomNums.denominator2}
                                          </tr>
                                    </tbody>
                                  </table>
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
                          } */}

                     {/* //////////////////////////////////////////////////////////////////////////////////////////// */}
                       
                </div>

                <div className='buttons w-full   flex flex-row justify-center mt-14'>
                      <button onClick={handleCheck} className='btn-green'>Check</button>

                      <button onClick={handleNext} className='btn-orange'>Next</button>
                     
                      
                </div>
        </div>

        <div className='buttons-div w-100 h-16 bg-slate-50 mt-6 rounded-md flex items-center justify-center '> 
            <div className='flex flex-row justify-center  items-center'>
              <button className='btn-tab'>Prebuild Sheet</button>
              <button onClick={()=>setShowRandom(true)}  className='btn-tab'>Random Sheet</button>
              
            </div>
       
        </div>

        <RandomSheets getRandomNumber={getRandomNumber} showRandom={showRandom} setShowRandom={setShowRandom} operation={operation} mixOperation={mixOperation} inputRange={inputRange}  difficulty={difficulty}/>
        <CheckModal showCheckModal={showCheckModal}  setShowSolutionModal={setShowSolutionModal} setShowCheckModal={setShowCheckModal} result={result}/>
        <SolutionModal showSolutionModal={showSolutionModal} setShowSolutionModal={setShowSolutionModal} setShowCheckModal={setShowCheckModal} randomNums={randomNums} operation={operation} mixOperation={mixOperation} inputs={inputs} sameDenoms={sameDenoms}/>
    </div>
  )
}

export default Arithmetic




