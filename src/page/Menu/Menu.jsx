// api 
let api = "http://localhost:3000/data"

import React, { useEffect, useState } from 'react'
import ArNumber from '../../Component/ArNumber/ArNumber'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'




function Menu() {

  const [ data , setData ] = useState (null)
  
  const navigate = useNavigate()

  async function getData () {
    try {

      let data = await axios.get ( api )
      console.log( data.data );
      
      setData ( data.data )
    } catch (error) {
      console.log( error );
    }
  }


  useEffect (() => {
    getData ( )
  }, [])


  return (
    <>
    <h1 className='text-[30px] text-center cursor-default font-medium pt-[100px] '>
    ARHITAS بالأرقام
    </h1>

    <div className='sm:grid sm:grid-cols-3 sm:px-[150px] sm:pt-[50px]'> 
    <ArNumber number={"٢"} info={"إنتاج الورش"} text={"إنتاج خاص في ألماتي وشيمنكت"} />
    <ArNumber number={"٧"} info={"سَنَوات"} text={"نحوّل المساحات العامة"} />
    <ArNumber number={"٥٠+"} info={"مُحْتَرِفُون"} text={"يعملون على تحسين المساحات العامة"} />
    <ArNumber number={"٣٠٠+"} info={"مَشَارِيع مُنفَّذَة"} text={"في المواقع الهامة عبر كازاخستان"} />
    <ArNumber number={"٥٠%"} info={"العملاء"} text={"يأتون عن طريق التوصيات"} />
    <ArNumber number={"٣٥٠٠"} info={"بِلاط"} text={"تم إنتاجه في ٦ أشهر من هذا العام"} />
    </div>

    <h1 className='pt-[150px] font-medium text-[30px] text-center pb-[50px]'>
    المشاريع المنفذة
    </h1>

    <div className='sm:grid sm:grid-cols-4 sm:items-center sm:px-[160px]'>
      
    { data?.map((e)=>{
      console.log(e);
      
        return (
          <>
         {
     e.product1.map((elem)=>{
      console.log(elem);
      return <>
      <div className='px-[20px] pb-[75px] sm:h-[50vh]'>

      <img onClick={()=> navigate(`/Profile/${elem.id}`)} src={elem.img} alt="product Image" className='mb-[15px] sm:w-full sm:cursor-pointer sm:h-[25vh]' />
      <h1 className='mb-[15px] font-medium cursor-default'>
        { elem . ProductName . slice ( 0 , 25 ) + "..."}
      </h1>
      <p className='text-gray-400 font-mono cursor-default'>
        {elem.data}
      </p>
      </div>
      </>
     })
         }
          </>
        )
    })}
    
    </div>


    <div className='pb-[100px]'>
    <button className='bg-[#496D9D] m-auto flex justify-center rounded-[50px] text-white px-[50px] text-[19px] py-[10px]'>
    عرض جميع المشاريع
    </button>
    </div>


    <div className='bg-[#F0F0F0] sm:pb-[50px]'>

      <h1 className='text-[35px] py-[65px] font-medium text-center'>
      منتجاتنا
      </h1>
      <div className='sm:grid sm:grid-cols-3 sm:gap-[20px] sm:pl-[100px]'>
     
    { data?.map((e)=>{
            
        return (
          
          <>
          {
          e.product2.map((elem)=>{
      
      return <>
    
      <div className='px-[20px] pb-[75px] sm:h-full'>

        <img onClick={()=> navigate (`/Catalog/${elem.Category}`)} src={elem.img} className='sm:w-[80%]' alt="Product Image" />

        <div className='bg-white px-[25px] sm:w-[80%]'>
        <h1 className='text-[17px] font-medium py-[10px]'>
          {elem.ProductName}
        </h1>
        <p>
          {elem.AboutProduct}
        </p>
        <div className='py-[10px]' onClick={()=> navigate (`/Catalog/${elem.id}`)}>
        <button className='text-[#C4956A] font-medium'>
        المزيد →  
        </button>
        <button onClick={()=> navigate (`/Catalog/${elem.id}`)} className='hover:text-[#C4956A] text-white pl-[10px] font-medium'>
        اطلب الآن →  
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

</div>

    </div>


    <div className='sm:flex sm:items-center'>
      
    <div>

<h1 className='sm:text-[40px] font-medium py-[10px]'>
بنقرة واحدة:
</h1>
<p className='sm:text-[40px] py-[10px]'>
قم بتنزيل كتالوج الأشكال المعمارية الصغيرة
</p>
<p className='sm:text-[20px]'>
تم التحديث: 11 نوفمبر 2023
</p>

<button className='bg-[#C4956A] sm:inline-block sm:ml-[15px] hidden text-[15px] sm:text-[30px] font-medium text-white px-[25px] py-[7px] rounded-[50px]'>
احصل على الكتالوج
</button>
</div>
      <div>
      <img src="https://optim.tildacdn.pro/tild3338-3534-4166-b639-666530373035/-/format/webp/68.png" alt="Arhitas" />
      </div>

    </div>

    </>
  )
}

export default Menu