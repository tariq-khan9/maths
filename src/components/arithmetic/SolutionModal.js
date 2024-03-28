import React from 'react'




const SolutionModal = ({showSolutionModal,setShowSolutionModal,setShowCheckModal, randomNums,mixOperation,inputs, operation, sameDenoms}) => {

    
    if(showSolutionModal)
    {
     return (
       <div className=' fixed top-0 left-0 w-full h-full pt-48 bg-transparent w-scree  backdrop-blur-sm flex justify-center items-center '>
   
         <div className='bg-white rounded-md z-40 w-96 max-h-85 mt-[80px] overflow-y-auto  p-4  mb-[200px]'>
               <div className='text-center w-full'>
                 <h2 className='text-[20px] font-bold underline text-orange-500 '>Solution</h2>
               </div>
               <div className='overflow-y-auto max-h-[380px]'>
                    <div>
                                <h2 className='font-bold'>Your answer:</h2>
                                <table className='solution-digit mb-4'>
                                        
                                        <td>
                                        <tr className='px-2'>
                                            
                                            <SimplifyFraction numerator={inputs.numerator} denominator={inputs.denominator}/>
                                        </tr>
                                        </td>
                                </table>
                            </div>
                
                            <div className=''>
                                <h2 className='font-bold'>Solution:</h2>
                    {operation>0 &&
                    ( <div>
                            {operation===1  &&
                                <div>
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
                                                                {sameDenoms? randomNums.denominator1 : randomNums.denominator2}
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
                                                    {sameDenoms? 
                                                        <tbody className=''>
                                                        <tr className=''>
                                                            (  {randomNums.numerator1} )   +   ( {randomNums.numerator2} )
                                                        </tr>

                                                        <tr className='flex items-center mt-1 mb-1'>
                                                            <div class="border-t border-2  border-gray-500   w-32 mx-auto"></div>
                                                        </tr>
                                                        <tr>
                                                        ( {randomNums.denominator1} )
                                                        </tr>
                                                    </tbody>
                                                    : 
                                                    <tbody className=''>
                                                            <tr className=''>
                                                                <table className='flex items-center'>
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

                                                                    <td className='opertor-* px-1 text-center   '>
                                                                    <table className=' '>
                                                                        <tbody className='flex items-center  justify-center'>
                                                                            <tr className='flex h-full text-center '>
                                                                                    
                                                                                        <h2>&times;</h2>
                                                                                        
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                    </td>

                                                                    <td className='second-col px-1'>
                                                                    <table>
                                                                        <tbody>
                                                                            <tr>
                                                                                {randomNums.denominator2}
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

                                                                <td className='opertor-+ px-1 text-center'>
                                                                <table className=' '>
                                                                    <tbody className='flex items-center  justify-center'>
                                                                        <tr className='flex h-full text-center '>    
                                                                                        <h2>+</h2>      
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                                </td>

                                                                    <td className='first-col px-1'>
                                                                        <table className=''>
                                                                            <tbody className=''>
                                                                                <tr className=''>
                                                                                    {randomNums.numerator2}
                                                                                </tr>
                                                                                <tr className='flex items-center mt-1 mb-1'>
                                                                                    <div class="border-t border-2  border-gray-500   w-5 mx-auto"></div>
                                                                                </tr>
                                                                                <tr>
                                                                                    {randomNums.denominator2}
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>

                                                                    <td className='opertor-* px-1 text-center   '>
                                                                    <table className=' '>
                                                                        <tbody className='flex items-center  justify-center'>
                                                                            <tr className='flex h-full text-center '>
                                                                                    
                                                                                        <h2>&times;</h2>
                                                                                        
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                    </td>

                                                                    <td className='second-col px-1'>
                                                                    <table>
                                                                        <tbody>
                                                                            <tr>
                                                                                {randomNums.denominator1}
                                                                            </tr>
                                                                            <tr className='flex items-center mt-1 mb-1'>
                                                                                <div class="border-t border-2  border-gray-500   w-6 mx-auto"></div>
                                                                            </tr>
                                                                            <tr>
                                                                                {randomNums.denominator1}
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                    </td>
                                                                </table>
                                                            </tr>   
                                                    </tbody>
                                                    }
                                                    
                                                    </table>
                                                    </td>
                                                </tr>
                                </table>

                                {/**========================  third row  if different denoms =========================================**/}
                                    {!sameDenoms && 
                                        <table className='solution-digit'>
                                                <tr className=''>
                                                    <td className='= px-2'>
                                                    <tr>=</tr>
                                                    </td>
                                                    <td className='first-col px-1'>
                                                    <table className=''> 
                                                
                                                    <tbody className=''>
                                                            <tr className=''>
                                                                <table className='flex items-center'>
                                                                    <td className='first-col px-1'>
                                                                        <table className=''>
                                                                            <tbody className=''>
                                                                                <tr className=''>
                                                                                    {(randomNums.numerator1) * (randomNums.denominator2)}
                                                                                </tr>
                                                                                <tr className='flex items-center mt-1 mb-1'>
                                                                                    <div class="border-t border-2  border-gray-500   w-5 mx-auto"></div>
                                                                                </tr>
                                                                                <tr>
                                                                                {(randomNums.denominator1) * (randomNums.denominator2)}
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>

                                                                    <td className='opertor-+ px-1 text-center   '>
                                                                    <table className=' '>
                                                                        <tbody className='flex items-center  justify-center'>
                                                                            <tr className='flex h-full text-center '>
                                                                                    
                                                                                        <h2>+</h2>
                                                                                        
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                    </td>

                                                                    <td className='second-col px-1'>
                                                                    <table>
                                                                        <tbody>
                                                                            <tr>
                                                                                {(randomNums.numerator2) * (randomNums.denominator1)}
                                                                            </tr>
                                                                            <tr className='flex items-center mt-1 mb-1'>
                                                                                <div class="border-t border-2  border-gray-500   w-6 mx-auto"></div>
                                                                            </tr>
                                                                            <tr>
                                                                            {(randomNums.denominator2) * (randomNums.denominator1)}
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                    </td>

                                                                </table>
                                                            </tr>   
                                                    </tbody>
                                                    
                                                        
                                                    </table>
                                                    </td>
                                                </tr>
                                </table>
                                }
                                

                                {/**========================  third row =========================================**/}
                                <table className='solution-digit'>
                                                <tr className=''>
                                                    {!sameDenoms &&
                                                    <td className='= px-2'>
                                                    <tr>=</tr>
                                                    </td>
                                                    }
                                                    
                                                    <td className='first-col px-1'>
                                                    <table className=''>
                                                        {!sameDenoms &&
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
                                                        }
                                                    
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
                                                            {sameDenoms? 
                                                                <tbody className=''>
                                                                <tr className=''>
                                                                {randomNums.numerator1   +    randomNums.numerator2} 
                                                                </tr>

                                                                <tr className='flex items-center mt-1 mb-1'>
                                                                <div class="border-t border-2  border-gray-500   w-12 mx-auto"></div>
                                                                </tr>
                                                                <tr>
                                                                {randomNums.denominator1} 
                                                                </tr>
                                                                </tbody>
                                                                :
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


                                                                }
                                                        
                                                            </table>
                                                        </td>
                                                        </tr>
                                        </table>

                                    {/**========================  5th row =========================================**/}
                                        <table className='solution-digit'>
                                                        <tr className=''>
                                                        
                                                            <td className='first-col px-1'>
                                                            <table className=''>
                                                                {sameDenoms?
                                                                <tbody className=''>
                                                                <tr className=''> 
                                                                    <SimplifyFraction numerator={randomNums.numerator1 +   randomNums.numerator2} denominator={randomNums.denominator1}/>
                                                                </tr>
                                                                </tbody>
                                                                :
                                                                <tbody className=''>
                                                                    <tr className=''>
                                                                        <SimplifyFraction numerator={(randomNums.numerator1 * randomNums.denominator2)   +   (randomNums.denominator1 * randomNums.numerator2)} denominator={randomNums.denominator1 * randomNums.denominator2}/>
                                                                    </tr>
                                                                </tbody>
                                                                }
                                                            
                                                            </table>
                                                            </td>
                                                        </tr>
                                        </table>
                                </div>
                            }
                        {/* ===============================================  subtraction ==================================================== */}
                        {operation===2  &&
                                <div>
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
                                                                {sameDenoms? randomNums.denominator1 : randomNums.denominator2}
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
                                                    {sameDenoms? 
                                                        <tbody className=''>
                                                        <tr className=''>
                                                            (  {randomNums.numerator1} )   -   ( {randomNums.numerator2} )
                                                        </tr>

                                                        <tr className='flex items-center mt-1 mb-1'>
                                                            <div class="border-t border-2  border-gray-500   w-32 mx-auto"></div>
                                                        </tr>
                                                        <tr>
                                                        ( {randomNums.denominator1} )
                                                        </tr>
                                                    </tbody>
                                                    : 
                                                    <tbody className=''>
                                                            <tr className=''>
                                                                <table className='flex items-center'>
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

                                                                    <td className='opertor-* px-1 text-center   '>
                                                                    <table className=' '>
                                                                        <tbody className='flex items-center  justify-center'>
                                                                            <tr className='flex h-full text-center '>
                                                                                    
                                                                                        <h2>&times;</h2>
                                                                                        
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                    </td>

                                                                    <td className='second-col px-1'>
                                                                    <table>
                                                                        <tbody>
                                                                            <tr>
                                                                                {randomNums.denominator2}
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

                                                                <td className='opertor-+ px-1 text-center'>
                                                                <table className=' '>
                                                                    <tbody className='flex items-center  justify-center'>
                                                                        <tr className='flex h-full text-center '>    
                                                                                        <h2>-</h2>      
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                                </td>

                                                                    <td className='first-col px-1'>
                                                                        <table className=''>
                                                                            <tbody className=''>
                                                                                <tr className=''>
                                                                                    {randomNums.numerator2}
                                                                                </tr>
                                                                                <tr className='flex items-center mt-1 mb-1'>
                                                                                    <div class="border-t border-2  border-gray-500   w-5 mx-auto"></div>
                                                                                </tr>
                                                                                <tr>
                                                                                    {randomNums.denominator2}
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>

                                                                    <td className='opertor-* px-1 text-center   '>
                                                                    <table className=' '>
                                                                        <tbody className='flex items-center  justify-center'>
                                                                            <tr className='flex h-full text-center '>
                                                                                    
                                                                                        <h2>&times;</h2>
                                                                                        
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                    </td>

                                                                    <td className='second-col px-1'>
                                                                    <table>
                                                                        <tbody>
                                                                            <tr>
                                                                                {randomNums.denominator1}
                                                                            </tr>
                                                                            <tr className='flex items-center mt-1 mb-1'>
                                                                                <div class="border-t border-2  border-gray-500   w-6 mx-auto"></div>
                                                                            </tr>
                                                                            <tr>
                                                                                {randomNums.denominator1}
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                    </td>
                                                                </table>
                                                            </tr>   
                                                    </tbody>
                                                    }
                                                    
                                                    </table>
                                                    </td>
                                                </tr>
                                </table>

                                {/**========================  third row  if different denoms =========================================**/}
                                {!sameDenoms && 
                                        <table className='solution-digit'>
                                                <tr className=''>
                                                    <td className='= px-2'>
                                                    <tr>=</tr>
                                                    </td>
                                                    <td className='first-col px-1'>
                                                    <table className=''> 
                                                
                                                    <tbody className=''>
                                                            <tr className=''>
                                                                <table className='flex items-center'>
                                                                    <td className='first-col px-1'>
                                                                        <table className=''>
                                                                            <tbody className=''>
                                                                                <tr className=''>
                                                                                    {(randomNums.numerator1) * (randomNums.denominator2)}
                                                                                </tr>
                                                                                <tr className='flex items-center mt-1 mb-1'>
                                                                                    <div class="border-t border-2  border-gray-500   w-5 mx-auto"></div>
                                                                                </tr>
                                                                                <tr>
                                                                                {(randomNums.denominator1) * (randomNums.denominator2)}
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>

                                                                    <td className='opertor-- px-1 text-center   '>
                                                                    <table className=' '>
                                                                        <tbody className='flex items-center  justify-center'>
                                                                            <tr className='flex h-full text-center '>
                                                                                    
                                                                                        <h2>-</h2>
                                                                                        
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                    </td>

                                                                    <td className='second-col px-1'>
                                                                    <table>
                                                                        <tbody>
                                                                            <tr>
                                                                                {(randomNums.numerator2) * (randomNums.denominator1)}
                                                                            </tr>
                                                                            <tr className='flex items-center mt-1 mb-1'>
                                                                                <div class="border-t border-2  border-gray-500   w-6 mx-auto"></div>
                                                                            </tr>
                                                                            <tr>
                                                                            {(randomNums.denominator2) * (randomNums.denominator1)}
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                    </td>

                                                                </table>
                                                            </tr>   
                                                    </tbody>
                                                    
                                                        
                                                    </table>
                                                    </td>
                                                </tr>
                                </table>
                                }
                                {/**========================  third row =========================================**/}
                                <table className='solution-digit'>
                                                <tr className=''>
                                                    {!sameDenoms &&
                                                    <td className='= px-2'>
                                                    <tr>=</tr>
                                                    </td>
                                                    }
                                                    
                                                    <td className='first-col px-1'>
                                                    <table className=''>
                                                        {!sameDenoms &&
                                                        <tbody className=''>
                                                            <tr className=''>
                                                                (  {randomNums.numerator1 * randomNums.denominator2} )   -   ( {randomNums.denominator1 * randomNums.numerator2} )
                                                            </tr>

                                                            <tr className='flex items-center mt-1 mb-1'>
                                                                <div class="border-t border-2  border-gray-500   w-24 mx-auto"></div>
                                                            </tr>
                                                            <tr>
                                                            ( {randomNums.denominator1 * randomNums.denominator2} )
                                                            </tr>
                                                    </tbody>
                                                        }
                                                    
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
                                                            {sameDenoms? 
                                                                <tbody className=''>
                                                                <tr className=''>
                                                                {randomNums.numerator1   -   randomNums.numerator2} 
                                                                </tr>

                                                                <tr className='flex items-center mt-1 mb-1'>
                                                                <div class="border-t border-2  border-gray-500   w-12 mx-auto"></div>
                                                                </tr>
                                                                <tr>
                                                                {randomNums.denominator1} 
                                                                </tr>
                                                                </tbody>
                                                                :
                                                                <tbody className=''>
                                                                    <tr className=''>
                                                                    {(randomNums.numerator1 * randomNums.denominator2)   -   (randomNums.denominator1 * randomNums.numerator2)} 
                                                                    </tr>

                                                                    <tr className='flex items-center mt-1 mb-1'>
                                                                    <div class="border-t border-2  border-gray-500   w-12 mx-auto"></div>
                                                                    </tr>
                                                                    <tr>
                                                                    {randomNums.denominator1 * randomNums.denominator2} 
                                                                    </tr>
                                                                </tbody>


                                                                }
                                                        
                                                            </table>
                                                        </td>
                                                        </tr>
                                        </table>

                                    {/**========================  5th row =========================================**/}
                                        <table className='solution-digit'>
                                                        <tr className=''>
                                                        
                                                            <td className='first-col px-1'>
                                                            <table className=''>
                                                                {sameDenoms?
                                                                <tbody className=''>
                                                                <tr className=''>
                                                                
                                                                    <SimplifyFraction numerator={randomNums.numerator1 -   randomNums.numerator2} denominator={randomNums.denominator1}/>
                                                                </tr>
                                                                </tbody>
                                                                :
                                                                <tbody className=''>
                                                                    <tr className=''>
                                                                        
                                                                        <SimplifyFraction numerator={(randomNums.numerator1 * randomNums.denominator2)   -   (randomNums.denominator1 * randomNums.numerator2)} denominator={randomNums.denominator1 * randomNums.denominator2}/>
                                                                    </tr>
                                                                </tbody>
                                                                }
                                                            
                                                            </table>
                                                            </td>
                                                        </tr>
                                        </table>
                                </div>
                            }

                        {/* ===============================================  multiply ==================================================== */}
                            {operation===3 &&
                                <div>
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
                                                                    &times;
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
                                                                        ( {randomNums.numerator1} * {randomNums.numerator2} )
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
                                                                        {randomNums.numerator1 * randomNums.numerator2}   
                                                                    </tr>

                                                                    <tr className='flex items-center mt-1 mb-1'>
                                                                        <div class="border-t border-2  border-gray-500   w-24 mx-auto"></div>
                                                                    </tr>
                                                                    <tr>
                                                                        {randomNums.denominator1 * randomNums.denominator2} 
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            </td>
                                                        </tr>
                                        </table>

                                        {/**========================  4th row =========================================**/}
                                            <table className='solution-digit'>
                                                                <tr className=''>
                                    
                                                                <td className='first-col px-1'>
                                                                    <table className=''>
                                                                    <tbody className=''>
                                                                            <tr className=''>
                                                                        
                                                                            <SimplifyFraction numerator={randomNums.numerator1 * randomNums.numerator2} denominator={randomNums.denominator1 * randomNums.denominator2} />
                                                                            </tr>

                                                                        
                                                                    </tbody>
                                                                    </table>
                                                                </td>
                                                                </tr>
                                                </table>

                                            
                                </div>
                            }

                        {/* =========================================  divide ==================================================== */}
                            {operation===4 &&
                                <div>
                                        {/**========================  first row =========================================**/}
                                                <table className='solution-digit'>
                                                        <tr className=''>
                                                        
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
                                                                    &divide;
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
                                                                        ( {randomNums.numerator1} * {randomNums.denominator2} )
                                                                    </tr>

                                                                    <tr className='flex items-center mt-1 mb-1'>
                                                                        <div class="border-t border-2  border-gray-500   w-32 mx-auto"></div>
                                                                    </tr>
                                                                    <tr>
                                                                    ( {randomNums.denominator1} * {randomNums.numerator2} )
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
                                                                        {randomNums.numerator1 * randomNums.denominator2}   
                                                                    </tr>

                                                                    <tr className='flex items-center mt-1 mb-1'>
                                                                        <div class="border-t border-2  border-gray-500   w-24 mx-auto"></div>
                                                                    </tr>
                                                                    <tr>
                                                                        {randomNums.denominator1 * randomNums.numerator2} 
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            </td>
                                                        </tr>
                                        </table>

                                        {/**========================  4th row =========================================**/}
                                            <table className='solution-digit'>
                                                                <tr className=''>
                                                                
                                                                <td className='first-col px-1'>
                                                                    <table className=''>
                                                                    <tbody className=''>
                                                                            <tr className=''>
                                                                    
                                                                            <SimplifyFraction numerator={randomNums.numerator1 * randomNums.denominator2} denominator={randomNums.denominator1 * randomNums.numerator2}/>
                                                                            </tr>

                                                                        
                                                                    </tbody>
                                                                    </table>
                                                                </td>
                                                                </tr>
                                                </table>

                                            
                                </div>
                            }
                    </div>  )   
                    }

                    {mixOperation>0 &&
                            ( <div>
                            {mixOperation===1  &&
                                <div>
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
                                                                        +
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
                                                                    
                                                                    <td className='first-col px-1'>
                                                                    <table className=''>
                                                                        <tbody className=''>
                                                                            <tr className=''>
                                                                        
                                                                                <SimplifyFraction numerator={(randomNums.numerator1 * randomNums.denominator2)   +   (randomNums.denominator1 * randomNums.numerator2)} denominator={randomNums.denominator1 * randomNums.denominator2}/>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                    </td>
                                                                </tr>
                                                </table>
                                </div>
                            }
                        {/* ===============================================  subtraction ==================================================== */}
                            {mixOperation===2 &&
                                <div>
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
                                                                        -
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
                                                                        (  {randomNums.numerator1} * {randomNums.denominator2} )   -  ( {randomNums.denominator1} * {randomNums.numerator2} )
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
                                                                        (  {randomNums.numerator1 * randomNums.denominator2} )   -  ( {randomNums.denominator1 * randomNums.numerator2} )
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
                                                                            {(randomNums.numerator1 * randomNums.denominator2)   -  (randomNums.denominator1 * randomNums.numerator2)} 
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
                                                            
                                                                    <td className='first-col px-1'>
                                                                    <table className=''>
                                                                        <tbody className=''>
                                                                            <tr className=''>
                                                                            
                                                                                <SimplifyFraction numerator={(randomNums.numerator1 * randomNums.denominator2)   -   (randomNums.denominator1 * randomNums.numerator2)} denominator={randomNums.denominator1 * randomNums.denominator2}/>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                    </td>
                                                                </tr>
                                                </table>
                                </div>
                            }

                        {/* ===============================================  multiply ==================================================== */}
                            {mixOperation===3 &&
                                <div>
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
                                                                    &times;
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
                                                                        ( {randomNums.numerator1} * {randomNums.numerator2} )
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
                                                                        {randomNums.numerator1 * randomNums.numerator2}   
                                                                    </tr>

                                                                    <tr className='flex items-center mt-1 mb-1'>
                                                                        <div class="border-t border-2  border-gray-500   w-24 mx-auto"></div>
                                                                    </tr>
                                                                    <tr>
                                                                        {randomNums.denominator1 * randomNums.denominator2} 
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
                                                                        
                                                                            <SimplifyFraction numerator={randomNums.numerator1 * randomNums.numerator2} denominator={randomNums.denominator1 * randomNums.denominator2}/>
                                                                            </tr>

                                                                        
                                                                    </tbody>
                                                                    </table>
                                                                </td>
                                                                </tr>
                                                </table>

                                            
                                </div>
                            }

                        {/* =========================================  divide ==================================================== */}
                            {mixOperation===4 &&
                                <div>
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
                                                                    &divide;
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
                                                                        ( {randomNums.numerator1} * {randomNums.denominator2} )
                                                                    </tr>

                                                                    <tr className='flex items-center mt-1 mb-1'>
                                                                        <div class="border-t border-2  border-gray-500   w-32 mx-auto"></div>
                                                                    </tr>
                                                                    <tr>
                                                                    ( {randomNums.denominator1} * {randomNums.numerator2} )
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
                                                                        {randomNums.numerator1 * randomNums.denominator2}   
                                                                    </tr>

                                                                    <tr className='flex items-center mt-1 mb-1'>
                                                                        <div class="border-t border-2  border-gray-500   w-24 mx-auto"></div>
                                                                    </tr>
                                                                    <tr>
                                                                        {randomNums.denominator1 * randomNums.numerator2} 
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            </td>
                                                        </tr>
                                        </table>

                                        {/**========================  4th row =========================================**/}
                                            <table className='solution-digit'>
                                                                <tr className=''>
                                                            
                                                                <td className='first-col px-1'>
                                                                    <table className=''>
                                                                    <tbody className=''>
                                                                            <tr className=''>
                                                                    
                                                                            <SimplifyFraction numerator={randomNums.numerator1 * randomNums.denominator2} denominator={randomNums.denominator1 * randomNums.numerator2}/>
                                                                            </tr>

                                                                        
                                                                    </tbody>
                                                                    </table>
                                                                </td>
                                                                </tr>
                                                </table>

                                            
                                </div>
                            }
                        </div>  )   
                    }
                        
                
                         
                            </div>
               </div>
                  {/* ====================================== close button ======================================== */}
                  <div className='flex flex-row w-full  justify-end mt-4 pr-4'>
                        <button className='flex justify-items-end p-1 pb-2 px-8 text-white rounded-md bg-orange-500' onClick={()=>
                        { setShowCheckModal(false)
                        setShowSolutionModal(false)}}>Close</button>
                </div>
   
         </div>
      </div>
     )
    }
}

export default SolutionModal


const SimplifyFraction = ({numerator, denominator}) => {
    // Find the greatest common divisor (GCD) of numerator and denominator
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
    const divisor = gcd(numerator, denominator);

    // Simplify the fraction by dividing both numerator and denominator by their GCD
    let simplifiedNumerator = numerator / divisor;
    let simplifiedDenominator = denominator / divisor;

    if(numerator===simplifiedNumerator && denominator===simplifiedDenominator) return null;

    if (numerator < 0 && denominator < 0) {
        simplifiedNumerator = Math.abs(simplifiedNumerator);
        simplifiedDenominator = Math.abs(simplifiedDenominator);
    }

    if (simplifiedNumerator > 0 && simplifiedDenominator < 0) {
        simplifiedNumerator = -simplifiedNumerator;
        simplifiedDenominator = Math.abs(simplifiedDenominator);
    }

    // if(simplifiedNumerator<0 && simplifiedDenominator>0){
    //     simplifiedNumerator = -simplifiedNumerator;
    //     simplifiedDenominator = Math.abs(simplifiedDenominator);
    // }

    if(simplifiedNumerator===0 || simplifiedDenominator===0){
        return (
            <div className='flex flex-row'>
            <div className='flex items-center align-center mr-4 ml-1'>=</div>
            <div className='flex flex-col items-center justify-center'>
               <div>0</div> 
                
            </div>
            </div>
        )
    } 

    if(simplifiedDenominator===1){
        return (
            <div className='flex flex-row'>
            <div className='flex items-center align-center mr-4 ml-1'>=</div>
            <div className='flex flex-col items-center justify-center'>
               <div>{simplifiedNumerator}</div> 
                
            </div>
            </div>
        )  
    }
    
    return (
        <div className='flex flex-row'>
            <div className='flex items-center align-center mr-4 ml-1'>=</div>
            <div className='flex flex-col items-center justify-center'>
            <div>{simplifiedNumerator}</div> 
                <div class="border-t my-1 border-2  border-gray-500   w-7 mx-auto"></div>
                <div>{simplifiedDenominator}</div>
            </div>
        </div>
    )

    // return { numerator: simplifiedNumerator, denominator: simplifiedDenominator };
}