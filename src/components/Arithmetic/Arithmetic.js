import React, {useState, useEffect} from 'react'


function getRandomNumber(min, max) {
  // Generate a random number between min and max (inclusive of both)
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


const Arithmetic = () => {
  const [randomNums, setRandomNums] = useState({
    numerator1 : 1,
    denominator1 : 1,
    numerator2 : 1,
    denominator2 : 1
  })

  const [result, setResult] = useState(false)

  const [inputs, setInputs] = useState({
    numerator: 1,
    denominator: 1
  })

  const [showRandom, setShowRandom] = useState(false)
  const [showCheckModal, setShowCheckModal] = useState(false)


 

  useEffect(() => {
     handleNext()
  
  }, [])


  

  const handleNext = () => {
    const numerator1 = getRandomNumber(2, 10); // Generates a random number between 1 and 10
    const denominator1 = getRandomNumber(2, 10);
    const numerator2 = getRandomNumber(2, 10);
    const denominator2 = getRandomNumber(2, 10);

    setRandomNums({
      numerator1: numerator1,
      denominator1: denominator1,
      numerator2: numerator2,
      denominator2: denominator2
    })
  }

 

  const handleCheck = () => {
   
      const checkDeno = randomNums.denominator1 * randomNums.denominator2;

      const checkNum = (randomNums.numerator1*randomNums.denominator2) + (randomNums.numerator2*randomNums.denominator1);

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

  return (
    <div className='px-[20px] w-screen flex flex-col pt-12'>
        <div className='buttons-div w-100 h-16 bg-gray-200 rounded-md flex items-center justify-center '> 
            <div className='flex flex-row justify-center  items-center'>
              <button className='p-2 px-4 rounded-md  bg-white hover:shadow-lg  hover:shadow-slate-500'>Addition</button>
              <button className='p-2 px-4 rounded-md ml-4 bg-white hover:shadow-lg  hover:shadow-slate-500'>Subtraction</button>
              <button className='p-2 px-4 rounded-md ml-4   bg-white hover:shadow-lg  hover:shadow-slate-500'>Division</button>
              <button className='p-2 px-4 rounded-md ml-4   bg-white hover:shadow-lg  hover:shadow-slate-500'>Multiplication</button>
              <button className='p-2 px-4 rounded-md ml-4   bg-white hover:shadow-lg  hover:shadow-slate-500'>Mixed</button>
            </div>
       
        </div>

        <div className='drill-div w-100 p-12 h-96  rounded-md mt-8 bg-gray-200'>
                <h1 className='text-[30px]'>Try Out this Drill</h1>
                <h5>Solve this fraction</h5>

                <div className='math  flex justify-center mt-8 '>
                      <table className='text-[25px] font-bold text-gray-600'>
                        <tr className=''>
                          <td className='first-col px-4'>
                             <table className=''>
                               <tbody className=''>
                                    <tr>
                                      {randomNums.numerator1}
                                    </tr>
                                    <tr className='flex items-center mt-4 mb-4'>
                                       <div class="border-t border-2  border-gray-600   w-6 mx-auto"></div>
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
                                      +
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
                                       <div class="border-t border-2  border-gray-600   w-6 mx-auto"></div>
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
                                       <input onChange={(e)=>setInputs({...inputs, numerator: e.target.value})} id='num' className='w-20 h-8 text-center rounded-sm bg-gray-100'/>
                                    </tr>
                                    <tr className='flex items-center mt-4 mb-4'>
                                       <div class="border-t border-2  border-gray-600   w-20 mx-auto"></div>
                                    </tr>
                                    <tr>
                                     <input id='deno' onChange={(e)=>setInputs({...inputs, denominator: e.target.value})}  className='w-20 text-center h-8 rounded-sm bg-gray-100'/>
                                    </tr>
                               </tbody>
                             </table>
                          </td>
                        </tr>
                      </table>
                </div>

                <div className='buttons w-full   flex flex-row justify-center mt-14'>
                      <button onClick={handleCheck} className='px-20 p-1 text-gray-600 rounded-[5px] hover:text-white hover:bg-green-800 border border-1  border-gray-500'>Check</button>

                      <button onClick={handleNext} className='px-20 p-1 text-gray-600 rounded-[5px] hover:text-white hover:bg-orange-500 ml-8 border border-1  border-gray-500'>Next</button>
                </div>
        </div>

        <div className='buttons-div w-100 h-16 bg-gray-200 mt-6 rounded-md flex items-center justify-center '> 
            <div className='flex flex-row justify-center  items-center'>
              <button className='p-2 px-4 rounded-md  bg-white hover:shadow-lg  hover:shadow-slate-500'>Prebuild Sheet</button>
              <button onClick={()=>setShowRandom(true)}  className='p-2 px-4 rounded-md ml-4 bg-white hover:shadow-lg  hover:shadow-slate-500'>Random Sheet</button>
              
            </div>
       
        </div>

        <RenderCards showRandom={showRandom}/>
        <CheckModal showCheckModal={showCheckModal} setShowCheckModal={setShowCheckModal} result={result}/>
    </div>
  )
}

export default Arithmetic


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
    <div className='flex justify-center mt-6 rounded-md bg-gray-200'>
        <div className='px-auto grid grid-cols-2 bg-gray-200 gap-4'>
                      {randomSheet.map((randomNum, index)=> (
                        <div className='px-[40px] pt-6 pb-4 bg-white mt-6 mx-4 rounded-md'>
                          <table key={index} className='text-[25px] px-8   font-bold text-gray-500'>
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
                                          <input onChange={(e)=>setInputs({...inputs, numerator: e.target.value})} id='num' className='w-20 h-8 text-center rounded-sm bg-gray-100'/>
                                        </tr>
                                        <tr className='flex items-center mt-4 mb-4'>
                                          <div class="border-t border-2  border-gray-500   w-20 mx-auto"></div>
                                        </tr>
                                        <tr>
                                        <input id='deno' onChange={(e)=>setInputs({...inputs, denominator: e.target.value})}  className='w-20 h-8 text-center rounded-sm bg-gray-100'/>
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

const CheckModal = ({showCheckModal, setShowCheckModal, result}) => {
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
                 <button className='bg-orange-600 hover:bg-orange-500 text-white p-2 pb-3 rounded-md px-4 text-[20px]'>Solution</button>
               </div>
   
       </div>
  </div>
  )
}