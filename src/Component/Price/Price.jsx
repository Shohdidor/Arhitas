import React from 'react'

function Praice() {
  return (
    <>
    <div className='flex justify-between items-center'>
        <div className='ml-[150px]'>
            <h1 className='font-bold text-[35px]'>
            ПРАЙС:
            </h1>
            <p className='text-[35px] w-[107%]'>
            Скачайте прайс-лист <br />
            на всю нашу продукцию
            </p>
            <span>
            Актуальные цены
            </span>
            <br />
            <button className='bg-[#27456E] rounded-[50px] text-white px-[25px] py-[10px]'>
                Получить прайс сейчас 
            </button>
        </div>
        <div className='w-[70%]'>
            <img src="https://optim.tildacdn.pro/tild6332-6334-4337-a233-303761373562/-/format/webp/96_1.png" alt="Arhitas" />
        </div>
    </div>
    </>
  )
}

export default Praice