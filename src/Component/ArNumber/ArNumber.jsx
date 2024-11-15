import React from 'react'

function ArNumber({ number , info , text }) {
  return (
    <>
    <div className='m-auto flex justify-center mt-[15px]'>
        <div className='w-[80%] px-[50px] sm:w-full sm:px-0 sm:cursor-default'>

        <h1 className='text-[#C2986F] font-mono text-[50px]'>
            { number }
        </h1>

        <h3 className='text-[#27456E] text-[22px] mb-[10px]'>
            {info}
        </h3>

        <p className='text-gray-800 text-[16px]'>
            {text}
        </p>

        </div>
    
    </div>


    </>
)
}

export default ArNumber