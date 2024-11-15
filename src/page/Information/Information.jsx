let api = "http://localhost:3000/data"

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Information() {
    const { id } = useParams ()

    const [ data , setData ] = useState ( [] )

    async function getData () {
        try {
            let data = await axios.get( api )
            console.log(data);
            
            setData ( data . data ) 
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect (()=> {
        getData ()
    }, [])

    
    
  return (
    <>
    { data . map (( e ) => {
        return (
            <>
            {e.product2.filter ( el => el.id == id ).map (( elem ) => {
                console.log(elem);
                
                return ( 
                    <>
                    <div className='sm:flex sm:py-[40px] sm:justify-around sm:px-[150px]'>
                        <div>
                    <img src={elem.img} className='sm:w-[80%]' alt="ProductImg" />
                        </div>
                        <div className='sm:text-right'>
                            <h1 className='text-[30px] font-medium py-[20px] px-[25px]'>
                                {elem.ProductName}
                            </h1>
                            <div className='flex justify-center py-[5px]'>
                            <button className='py-[6px] sm:mb-0 mb-[10px] px-[70px] text-[19px] sm:px-[35px] border-[1px] border-[gray] duration-200 ease-in rounded-[50px] hover:border-[#C4956A] hover:text-[#C4956A]'>
                                لمزيد من التفاصيل  
                            </button>
                            </div>
                            <h2 className='text-[20px] py-[20px] px-[25px]'>
                                {elem.AboutProduct}
                            </h2>
                        </div>
                    </div>

                    
{ data?.map((e)=>{
      
      return (
        <>
       {
   e.product2.map((elem)=>{
    
    return <>
    
    <h1 className='text-[25px] sm:px-[380px] sm:text-[30px] py-[25px] px-[15px] font-medium text-center sm:text-center sm:py-[50px]'>
      {elem.Category}
    </h1>

    <div className='px-[15px] sm:px-[200px] sm:gap-[40px] sm:grid sm:grid-cols-2 sm:py-[80px] grid grid-cols-2 gap-[25px]'>
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
            })}
            </>
        )
    })}
    </>
  )
}

export default Information