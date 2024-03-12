import React from 'react'

const Arithmetic = () => {
  return (
    <div className='px-[20px] w-screen flex flex-col pt-12'>
        <div className='buttons-div w-100 h-16 bg-gray-200 rounded-md flex items-center justify-center '> 
            <div className='flex flex-row justify-center  items-center'>
              <button className='p-2 px-4 rounded-sm  bg-gray-100'>Addition</button>
              <button className='p-2 px-4 rounded-sm ml-4 bg-gray-100'>Subtraction</button>
              <button className='p-2 px-4 rounded-sm ml-4   bg-gray-100'>Division</button>
              <button className='p-2 px-4 rounded-sm ml-4   bg-gray-100'>Multiplication</button>
              <button className='p-2 px-4 rounded-sm ml-4   bg-gray-100'>Mixed</button>
            </div>
       
        </div>

        <div className='drill-div w-100 p-12 h-96 rounded-md mt-8 bg-gray-200'>
                <h1 className='text-[30px]'>Try Out this Drill</h1>
                <h5>Solve this fraction</h5>

                <div className='math '>
                      <table>
                        <tr>
                          <td className='first-col'>
                             <table>
                               <tbody>
                                    <tr>
                                      25
                                    </tr>
                                    <tr>
                                      ___
                                    </tr>
                                    <tr>
                                      45
                                    </tr>
                               </tbody>
                             </table>
                          </td>

                          <td className='opertor'>
                             <table>
                               <tbody>
                                    <tr>
                                      +
                                    </tr>
                               </tbody>
                             </table>
                          </td>

                          <td className='second-col'>
                             <table>
                               <tbody>
                                    <tr>
                                      25
                                    </tr>
                                    <tr>
                                      ___
                                    </tr>
                                    <tr>
                                      45
                                    </tr>
                               </tbody>
                             </table>
                          </td>

                          <td className='='>
                            <tr>=</tr>
                          </td>

                          <td className='inputs'>
                             <table>
                               <tbody>
                                    <tr>
                                      25
                                    </tr>
                                    <tr className='flex items-center'>
                                       <div class="border-t  border-black  w-6 mx-auto"></div>
                                    </tr>
                                    <tr>
                                      45
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

export default Arithmetic
