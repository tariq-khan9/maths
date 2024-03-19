import React, {useState, useEffect} from 'react'



function getRandomNumber(min, max) {
  // Generate a random number between min and max (inclusive of both)
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


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
  const [mixOperation, setMixOperation] =  useState(0);

  const [inputs, setInputs] = useState({
    numerator: 1,
    denominator: 1
  })

  const [showRandom, setShowRandom] = useState(false)
  const [showCheckModal, setShowCheckModal] = useState(false)
  const [showSolutionModal, setShowSolutionModal]= useState(false)
  
 

  useEffect(() => {
     handleNext()
  
  }, [difficulty])

  
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
 

  const handleNext = () => {
    let min ;
    let max ;

    if(mixOperation>0){
       setOperation(0)
       const operator = getRandomNumber(1, 4)
       setMixOperation(operator)
    }

    switch (difficulty) {
      case 1: 
          min = 1;
          max = 9;
        break;

      case 2:    
          min = 1;
          max = 99;
        break;

      case 3:
          min = -9;
          max =  9;
      break;

      case 4:
        min = -99;
        max =  99;
    break;

      default:
          min = 1;
          max = 9;
        break;
    }
   
    do {
        var numerator1 = getRandomNumber(min, max);
        var denominator1 = getRandomNumber(min, max);
        var numerator2 = getRandomNumber(min, max);
        var denominator2 = getRandomNumber(min, max);

        const checkDeno = denominator1 * denominator2;
        const checkNum = numerator1 * denominator2 + numerator2 * denominator1;
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
    console.log(checkResult)
  }

 

  const handleCheck = () => {
    console.log(operation)
    if(operation===1){
                const checkDeno = randomNums.denominator1 * randomNums.denominator2;
                const checkNum = (randomNums.numerator1 * randomNums.denominator2) + (randomNums.numerator2 * randomNums.denominator1);
                var checkResult = checkNum / checkDeno;

                var inputResult = inputs.numerator/inputs.denominator;
            
                if(checkResult===inputResult){
                  setResult(true)
                  console.log("result  true/false is ", result)
                }
                else{
                  setResult(false)
                }

                // console.log("check result", checkResult,"input result", inputResult)

                // console.log("num1", randomNums.numerator1, "num2", randomNums.numerator2, "dem1", randomNums.denominator1, "dem2", randomNums.denominator2)

                // console.log("checkNum", checkNum, "checkDeno", checkDeno)

        }
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
        console.log("result  true/false is ", result)
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
              <button onClick={()=>handleOperation(1)} className={`btn-tab ${operation === 1 ? 'btn-selected' : ''}`}>Addition</button>
              <button onClick={()=>handleOperation(2)} className={`btn-tab ${operation === 2 ? 'btn-selected' : ''}`}>Subtraction</button>
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

                          { (difficulty===1 || difficulty===2 || difficulty===4 || difficulty===3) &&
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

        <RenderCards showRandom={showRandom}/>
        <CheckModal showCheckModal={showCheckModal} setShowSolutionModal={setShowSolutionModal} setShowCheckModal={setShowCheckModal} result={result}/>
        <SolutionModal showSolutionModal={showSolutionModal} randomNums={randomNums} operation={operation}/>
    </div>
  )
}

export default Arithmetic


// ========================================================================================
// ========= Render cards for random sheets with random numbers  ===========================
// ========================================================================================

export const  RenderCards = ({showRandom}) => {
 const [randomSheet, setRadomSheet] = useState([])
 const [showCheckModal, setShowCheckModal] = useState(false)
 const [result, setResult] = useState(false)

const [inputs, setInputs] = useState({
  numerator: 1,
  denominator: 1
})

useEffect(() => {
  handleRandomSheets()

}, [])
   
 const handleRandomSheets = () => {
  for (let i = 0; i < 10; i++) {
    const numerator1 = getRandomNumber(2, 10);
    const denominator1 = getRandomNumber(2, 10);
    const numerator2 = getRandomNumber(2, 10);
    const denominator2 = getRandomNumber(2, 10);

    randomSheet.push({
      numerator1,
      denominator1,
      numerator2,
      denominator2
    });
  }
} 


const handleSubmit = (randomNum) => {
  const checkDeno = randomNum.denominator1 * randomNum.denominator2;

  const checkNum = (randomNum.numerator1*randomNum.denominator2) + (randomNum.numerator2*randomNum.denominator1);

  const checkResult = checkNum/checkDeno

  const inputResult = inputs.numerator/inputs.denominator;

  if(checkResult===inputResult){
    setResult(true)
  }
  else{
    setResult(false)
  }

  setShowCheckModal(true)
}

 if(showRandom)

  return  (
    <div className='flex justify-center mt-6 rounded-md bg-slate-50'>
        <div className='px-auto grid grid-cols-2 bg-slate-50 gap-4'>
                      {randomSheet.map((randomNum, index)=> (
                        <div className='px-[40px] pt-6 pb-4 bg-white mt-6 mx-4 rounded-md'>
                          <table key={index} className='digit'>
                            <tr className=''>
                              <td className='first-col  '>
                                <table className=''>
                                  <tbody className=''>
                                        <tr>
                                          {randomNum.numerator1}
                                        </tr>
                                        <tr className='flex items-center mt-4 mb-4'>
                                          <div class="border-t border-2  border-gray-500   w-6 mx-auto"></div>
                                        </tr>
                                        <tr>
                                          {randomNum.denominator1}
                                        </tr>
                                  </tbody>
                                </table>
                              </td>

                              <td className='opertor px-4'>
                                <table>
                                  <tbody>
                                        <tr>
                                          +
                                        </tr>
                                  </tbody>
                                </table>
                              </td>

                              <td className='second-col px-4'>
                                <table>
                                  <tbody>
                                        <tr>
                                          {randomNum.numerator2}
                                        </tr>
                                        <tr className='flex items-center mt-4 mb-4'>
                                          <div class="border-t border-2  border-gray-500   w-6 mx-auto"></div>
                                        </tr>
                                        <tr>
                                          {randomNum.denominator2}
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
                         <div className='mt-6 w-full flex justify-center'>
                            <button onClick={()=>handleSubmit(randomNum)}  className=' w-full rounded-[5px] py-1 border border-1 border-gray-400 hover:text-white hover:bg-green-800'>Submit</button>
                          </div>
                        </div>
                      ))} 
              </div>
              <CheckModal showCheckModal={showCheckModal} setShowCheckModal={setShowCheckModal} result={result}/>
    </div>
  )
                      
};

// ========================================================================================
// ============ Checking modal for both main drill and radom sheet     ====================
// ========================================================================================

const CheckModal = ({showCheckModal, setShowCheckModal, setShowSolutionModal, result}) => {

  
      
 

  if(showCheckModal)
  return(
  <div className='fixed inset-0 bg-black  bg-opacity-10 backdrop-blur-sm flex justify-center items-center '>

        <div className='bg-white rounded-md z-50 w-96  p-4  mb-[200px] '> 
               <div className='flex flex-row justify-between '>
                   <h3 className='text-[25px]'>Validation</h3>
                   <p class='text-xl text-gray-200 mt-1  '>&#x2717;</p>
               </div>
               <div className='w-full flex justify-center mb-6'>
                {result? <h2 className='text-[50px] text-green-800  mt-2'>Correct!</h2> :
                         <h2 className='text-[50px] text-red-600  mt-2'>Wrong!</h2>
                }
               </div>
               <div className='flex justify-end'>
                 <button onClick={()=>setShowCheckModal(false)} className='bg-green-800 hover:bg-green-700 mx-2 text-white p-2 pb-3 rounded-md px-4 text-[20px]'>{result? 'Try more' : 'Try again'}</button>
                 <button onClick={()=>setShowSolutionModal(true)} className='bg-orange-600 hover:bg-orange-500 text-white p-2 pb-3 rounded-md px-4 text-[20px]'>Solution</button>
               </div>
   
       </div>
       
  </div>
  )
}

// ========================================================================================
// =============================== Solution modal    =====================================
// ========================================================================================

// const SolutionModal = ({showSolutionModal, setShowSolutionModal}) => {
//   if(showSolutionModal)
//   console.log(showSolutionModal)
//   return(
//   <div className='fixed inset-0 bg-black w-scree h-full bg-opacity-10 backdrop-blur-sm flex justify-center items-center '>

//         <div className='bg-white rounded-md z-40 w-96  p-4  mb-[200px] '> 
//                          <h2 className='text-[50px] text-green-800  mt-2'>Solution</h2> :
                         
                
//                </div>

//         </div>
   
       
//   )
// }

const SolutionModal = ({showSolutionModal, randomNums, operation}) => {

  if(showSolutionModal)
 {
  return (
    <div className=' absolute inset-0 pt-48 bg-transparent w-scree h-screen backdrop-blur-sm flex justify-center items-center '>

      <div className='bg-white rounded-md z-40 w-96  p-4  mb-[200px]'>
            <div className='text-center w-full'>
              <h2 className='text-[20px] font-semibold text-orange-500 font-thin'>Solution</h2>
            </div>

            <div>
              <h2>Your answer:</h2>
              <table className='solution-digit'>
                        <tr className=''>
                          <td className='= px-6'>
                            <tr>=</tr>
                          </td>
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
                                              {operation===1 && <h2>+</h2>}
                                              {operation===2 && <h2>-</h2>}
                                              {operation===3 && <h2>&times;</h2>}
                                              {operation===4 && <h2>&divide;</h2>}
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

                         

                          
                        </tr>
              </table>
            </div>

            <div>
               <h2>Solution:</h2>
       {/**========================  first row =========================================**/}
               <table className='solution-digit'>
                        <tr className=''>
                          <td className='= px-2'>
                            <tr>=</tr>
                          </td>
                          <td className='first-col px-1'>
                             <table className=''>
                               <tbody className=''>
                                    <tr className=''>
                                      {randomNums.numerator1}
                                    </tr>
                                    <tr className='flex items-center mt-1 mb-1'>
                                       <div class="border-t border-2  border-gray-500   w-5 mx-auto"></div>
                                    </tr>
                                    <tr>
                                      {randomNums.denominator1}
                                    </tr>
                               </tbody>
                             </table>
                          </td>

                          <td className='opertor px-1'>
                             <table>
                               <tbody>
                                    <tr>
                                              {operation===1 && <h2>+</h2>}
                                              {operation===2 && <h2>-</h2>}
                                              {operation===3 && <h2>&times;</h2>}
                                              {operation===4 && <h2>&divide;</h2>}
                                    </tr>
                               </tbody>
                             </table>
                          </td>

                          <td className='second-col px-1'>
                             <table>
                               <tbody>
                                    <tr>
                                      {randomNums.numerator2}
                                    </tr>
                                    <tr className='flex items-center mt-1 mb-1'>
                                       <div class="border-t border-2  border-gray-500   w-6 mx-auto"></div>
                                    </tr>
                                    <tr>
                                      {randomNums.denominator2}
                                    </tr>
                               </tbody>
                             </table>
                          </td>

                         

                          
                        </tr>
              </table>
       {/**========================  second row =========================================**/}
       <table className='solution-digit'>
                        <tr className=''>
                          <td className='= px-2'>
                            <tr>=</tr>
                          </td>
                          <td className='first-col px-1'>
                             <table className=''>
                               <tbody className=''>
                                    <tr className=''>
                                      (  {randomNums.numerator1} * {randomNums.denominator2} )   +   ( {randomNums.denominator1} * {randomNums.numerator2} )
                                    </tr>

                                    <tr className='flex items-center mt-1 mb-1'>
                                       <div class="border-t border-2  border-gray-500   w-32 mx-auto"></div>
                                    </tr>
                                    <tr>
                                     ( {randomNums.denominator1} * {randomNums.denominator2} )
                                    </tr>
                               </tbody>
                             </table>
                          </td>
                        </tr>
        </table>
         {/**========================  third row =========================================**/}
       <table className='solution-digit'>
                        <tr className=''>
                          <td className='= px-2'>
                            <tr>=</tr>
                          </td>
                          <td className='first-col px-1'>
                             <table className=''>
                               <tbody className=''>
                                    <tr className=''>
                                      (  {randomNums.numerator1 * randomNums.denominator2} )   +   ( {randomNums.denominator1 * randomNums.numerator2} )
                                    </tr>

                                    <tr className='flex items-center mt-1 mb-1'>
                                       <div class="border-t border-2  border-gray-500   w-24 mx-auto"></div>
                                    </tr>
                                    <tr>
                                     ( {randomNums.denominator1 * randomNums.denominator2} )
                                    </tr>
                               </tbody>
                             </table>
                          </td>
                        </tr>
        </table>

         {/**========================  4th row =========================================**/}
            <table className='solution-digit'>
                              <tr className=''>
                                <td className='= px-2'>
                                  <tr>=</tr>
                                </td>
                                <td className='first-col px-1'>
                                  <table className=''>
                                    <tbody className=''>
                                          <tr className=''>
                                             {(randomNums.numerator1 * randomNums.denominator2)   +   (randomNums.denominator1 * randomNums.numerator2)} 
                                          </tr>

                                          <tr className='flex items-center mt-1 mb-1'>
                                            <div class="border-t border-2  border-gray-500   w-12 mx-auto"></div>
                                          </tr>
                                          <tr>
                                           {randomNums.denominator1 * randomNums.denominator2} 
                                          </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
              </table>

          {/**========================  5th row =========================================**/}
              <table className='solution-digit'>
                                <tr className=''>
                                  <td className='= px-2'>
                                    <tr>=</tr>
                                  </td>
                                  <td className='first-col px-1'>
                                    <table className=''>
                                      <tbody className=''>
                                            <tr className=''>
                                                {((randomNums.numerator1 * randomNums.denominator2)   +   (randomNums.denominator1 * randomNums.numerator2)) / (randomNums.denominator1 * randomNums.denominator2)}  
                                            </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                </table>

        
            </div>

      </div>
      </div>
  )
 }
}