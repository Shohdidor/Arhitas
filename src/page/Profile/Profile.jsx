// api 
let api = "http://localhost:3000/data"
import axios from 'axios'

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'



function Profile() {

  const [ data , setData ] = useState ( [] )

  
async function getData () {
  try {
    let data = await axios.get ( api )
    setData ( data.data )
  } catch (error) {
    console.log( error );
    
  }
}

  useEffect (( ) => {
    getData ()
  }, [])

  const {id} = useParams()
  // console.log(data.product1);
  
  return (
    <>


    
{ data?.map((e)=>{
      
        return (
          <>
         {
     e.product1.filter(el=> el.id==id).map((elem)=>{
      return <>
      <h1 className='text-[25px] sm:px-[380px] sm:text-[30px] py-[25px] px-[15px] font-medium'>
        {elem.ProductName}
      </h1>
      <div className='px-[15px] sm:px-[380px]'>
      {elem.img && <img src={elem.img} className='pb-[15px]' alt="Product Image" />}
      {elem.img2 && <img src={elem.img2} className='pb-[15px]' alt="Product Image" />}
      {elem.img3 && <img src={elem.img3} className='pb-[15px]' alt="Product Image" />}
      {elem.img4 && <img src={elem.img4} className='pb-[15px]' alt="Product Image" />}
      {elem.img5 && <img src={elem.img5} className='pb-[15px]' alt="Product Image" />}
      {elem.img6 && <img src={elem.img6} className='pb-[15px]' alt="Product Image" />}
      {elem.img7 && <img src={elem.img7} className='pb-[15px]' alt="Product Image" />}
      </div>

      <h1 className='text-[18px] sm:px-[380px] sm:text-[20px] py-[25px] text-gray-500 px-[15px] font-mono'>
        {elem.data}
      </h1>

      
      </>
     })
         }
          </>
        )
    })}




    </>
  )
}

export default Profile