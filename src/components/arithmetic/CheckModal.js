import React from 'react'

const CheckModal = ({showCheckModal, setShowCheckModal, setShowSolutionModal, result}) => {

  const correctFlavors = ["Well done!", "Great job!", "Excellent!", "Fantastic!", "Perfect!"];
  const wrongFlavors = ["Oops!", "Try again!", "Not quite!", "Incorrect!", "Keep trying!"];

  // Randomly select a flavor from the correct and wrong arrays
  const randomCorrectFlavor = correctFlavors[Math.floor(Math.random() * correctFlavors.length)];
  const randomWrongFlavor = wrongFlavors[Math.floor(Math.random() * wrongFlavors.length)];

    if(showCheckModal)
    return(
    <div className='fixed inset-0 bg-black  bg-opacity-10 backdrop-blur-sm flex justify-center items-center '>
  
          <div className='bg-white rounded-md z-50 w-96  p-4  mb-[200px] '> 
                 <div className='flex flex-row justify-between '>
                     <h3 className='text-[25px]'>Validation</h3>
                     <p class='text-xl text-gray-200 mt-1  '>&#x2717;</p>
                 </div>
                 <div className='w-full flex justify-center mb-6'>
                  {result? <h2 className='text-[50px] text-green-800  mt-2'>{randomCorrectFlavor}</h2> :
                           <h2 className='text-[50px] text-red-600  mt-2'>{randomWrongFlavor}</h2>
                  }
                 </div>
                 <div className='flex justify-end'>
                   <button onClick={()=>setShowCheckModal(false)} className='bg-green-800 hover:bg-green-700 mx-2 text-white p-2 pb-3 rounded-md px-4 text-[20px]'>{result? 'Try more' : 'Try again'}</button>
                   {!result && <button onClick={()=>setShowSolutionModal(true)} className='bg-orange-600 hover:bg-orange-500 text-white p-2 pb-3 rounded-md px-4 text-[20px]'>Solution</button>}
                 </div>
     
         </div>
         
    </div>
    )
}

export default CheckModal
