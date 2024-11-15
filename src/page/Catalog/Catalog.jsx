let api = "http://localhost:3000/data"
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Catalog() {

  
  const [ data , setData ] = useState ( [] )

  const navigate = useNavigate()

  
  async function getData () {
    try {
      let data = await axios . get ( api )
      setData ( data.data )
    } catch (error) {
      console.log( error);
    }
  }



  const { category } = useParams ()
  
  

  useEffect (( ) => {
    window.scrollTo(0, 0);
    getData ( )
  } , [])

  return (
    <>

    
{ data?.map((e)=>{
      
      return (
        <>
       {
   e.product2.filter(el => el.Category == category ).map((elem)=>{
    
    return <>
    
    <h1 className='text-[25px] sm:px-[380px] sm:text-[30px] py-[25px] px-[15px] font-medium text-center sm:text-center sm:py-[50px]'>
      {elem.Category}
    </h1>

    <div className='px-[15px] sm:px-[200px] sm:gap-[40px] sm:grid sm:grid-cols-3 grid grid-cols-2 gap-[25px]'>
      <div>
    {elem.img && <img src={elem.img} onClick={()=> navigate(`/Information/${elem.id}`)} className='pb-[15px]' alt="Product Image" />}  
    <h1 className='sm:text-[30px] text-right'>
      {elem.ProductName}
    </h1>

    <div className='sm:flex sm:justify-center sm:ml-auto sm:gap-[12px] py-0 sm:py-[20px]'>

      <button className='py-[6px] sm:mb-0 mb-[10px] px-[15px] text-[15px] sm:px-[35px] border-[1px] border-[gray] duration-200 ease-in rounded-[50px] hover:border-[#C4956A] hover:text-[#C4956A]'>
      لمزيد من التفاصيل 
      </button>

        <button  className='py-[6px] text-[15px] px-[20px] border-[1px] rounded-[50px] duration-200 ease-in bg-[#C4956A] hover:bg-transparent hover:text-[#C4956A] hover:border-[#C4956A] text-white'>
        أضف إلى السلة       
        </button>
    </div>

    
    
      </div>
      <div>
    {elem.img2 && <img src={elem.img2} onClick={()=> navigate(`/Information/${elem.id}`)} className='pb-[15px]' alt="Product Image" />}
    <h1 className='sm:text-[30px] text-right'>
    {elem.ProductName}
    </h1>

    <div className='sm:flex sm:justify-center sm:ml-auto sm:gap-[12px] py-0 sm:py-[20px]'>
      <button className='py-[6px] sm:mb-0 mb-[10px] px-[15px] text-[15px] sm:text-[13px] sm:px-[35px] border-[1px] border-[gray] duration-200 ease-in rounded-[50px] hover:border-[#C4956A] hover:text-[#C4956A]'>
      لمزيد من التفاصيل 
      </button>

        <button  className='py-[6px] text-[15px] sm:text-[13px] px-[20px] border-[1px] rounded-[50px] duration-200 ease-in bg-[#C4956A] hover:bg-transparent hover:text-[#C4956A] hover:border-[#C4956A] text-white'>
        أضف إلى السلة       
        </button>
    </div>
    
      </div>
    </div>



    
    </>
   })
       }
        </>
      )
  })}


    </>
  )
}

export default Catalog



