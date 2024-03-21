import React,{useState, useEffect} from 'react'
import CheckModal from './CheckModal'

const RandomSheets = ({getRandomNumber, showRandom,setShowRandom, operation, mixOperation,difficulty, inputRange}) => {
  // console.log("operation", operation, "mix operatio", mixOperation, "difficu", difficulty, "min", inputRange)
 const [randomSheet, setRandomSheet] = useState([])
 const [showCheckModal, setShowCheckModal] = useState(false)
 const [result, setResult] = useState(false)
 
const [inputs, setInputs] = useState({
  numerator: 1,
  denominator: 1
})


  useEffect(() => {
    
    // Skip initial render
   
  
      handleRandomSheets()
      setShowRandom(true)
      console.log(showRandom)
   
  
  }, [inputRange]);
   
 const handleRandomSheets = () => {
  if (randomSheet.length > 0) {
    // Clear randomSheet by setting it to an empty array
    setRandomSheet([]);
  }
  console.log(inputRange.min, inputRange.max)
  for (let i = 0; i < 5; i++) {
    // const numerator1 = getRandomNumber(2, 10);
    // const denominator1 = getRandomNumber(2, 10);
    // const numerator2 = getRandomNumber(2, 10);
    // const denominator2 = getRandomNumber(2, 10);

      var numerator1 = getRandomNumber(inputRange.min, inputRange.max);
      var denominator1 = getRandomNumber(inputRange.min, inputRange.max);
      var numerator2 = getRandomNumber(inputRange.min, inputRange.max);
      var denominator2 = getRandomNumber(inputRange.min, inputRange.max);

  

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
  
    randomSheet.push({
      numerator1,
      denominator1,
      numerator2,
      denominator2
    });

  }
  console.log(randomSheet)
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
}

export default RandomSheets
