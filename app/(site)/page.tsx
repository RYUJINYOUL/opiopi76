"use client"
import React, { useState } from 'react'
// import Image from "next/image";
// import { HiPhone } from "react-icons/hi2";
// import { useRouter } from 'next/navigation'

import Sisul from '@/components/template/sisul'
import ImageGallery from '@/components/template/imageGallery'
import Question from '@/components/template/question'
import SisulNotice from '@/components/template/SisulNotice'
import SisulNotice2 from '@/components/template/SisulNotice2'
import Footer from '@/components/template/Footer';

// import useUIState from "@/hooks/useUIState";

const page = () => {
  //  const { push } = useRouter();
  //  const [ widths, setWidths ] = useState(false);
  //  const { homeCategory, setHomeCategory, setHeaderImageSrc } = useUIState();
 

  //  const onClickCategory = (item:any ,src:any) => {
  //   if (homeCategory === item) {
  //     setHeaderImageSrc("");
  //     setHomeCategory(item);
  //   } else {
  //     setHeaderImageSrc(src);
  //     setHomeCategory(item);
  //     push(src)
  //   }
  // };

return (
     
    <div>
   {/* ---모바일간격--- */}
      <section className='md:hidden block'>
          <hr className="h-2.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 md:w-[1000px] w-screen"/>
      </section>   
    {/* ---간격--- */}    

    <div className='md:mb-25 mb-4' />


     <section className='w-full flex flex-row items-center justify-center'>
      <div className="w-[1100px] md:block hidden items-center justify-center gap-1">
        <div className='flex flex-col'>
     
          <span className="text-[#333333] text-center text-[18px]" id="introText">
             도어락 비밀번호 분실 파손없이 열어드립니다
          </span>
        
       </div>   
       <div className='mt-5'/>
      </div>
     </section> 
 

   {/* ---모바일 갤러리 사진링크 열기 닫기--- */}
       <Sisul />
    {/* ---end--- */}



    {/* ---모바일간격--- */}
      <section className='md:hidden block'>
      <div className='md:mb-18 mb-1'></div>
       <hr className="h-2.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 md:w-[1000px] w-screen"/>
       </section>
    {/* ---end--- */}
     
     
     
       <div className='md:mb-18 mb-4'></div>


   
    {/* ---시설안내 start--- */}
       <SisulNotice />
    {/* ---end--- */}  


      <div className='md:mt-0 mt-4' />
      <section className='md:hidden block'>
      <div className='md:mb-18 mb-1'></div>
       <hr className="h-2.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 md:w-[1000px] w-screen"/>
       </section>


       {/* ---모바일간격--- */}
      <section className='md:hidden block'>
      <div className='md:mb-18 mb-1'></div>
       <hr className="h-2.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 md:w-[1000px] w-screen"/>
       </section>
    {/* ---end--- */}
     
     
     
       <div className='md:mb-40 mb-4'></div>


   
    {/* ---시설안내 start--- */}
       <SisulNotice2 />
    {/* ---end--- */}  


      <div className='md:mt-0 mt-4' />
      <section className='md:hidden block'>
      <div className='md:mb-18 mb-1'></div>
       <hr className="h-2.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 md:w-[1000px] w-screen"/>
       </section>


       <div className='md:h-[150px]' />

    {/* ---질문--- */}  
       <Question />
     {/* ---질문 끝--- */}  



  

    
    <div className='md:h-[100px]' />
  
      {/* 이미지 갤러리 시작 */}
         <ImageGallery />
      {/* 이미지 갤러리 끝 */}

    <div className='md:mt-0 mt-4' />

   <div className='md:h-[100px]' />
      <Footer />
   </div>
   
 )
}

export default page;