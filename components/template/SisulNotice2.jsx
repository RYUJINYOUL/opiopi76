"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from "next/image";
import useUIState from "@/hooks/useUIState";
import Gallery2 from '@/components/Gallery2'

const SisulNotice2 = () => {
   const { push } = useRouter();
       const [ widths, setWidths ] = useState(false);
       const { homeCategory, setHomeCategory, setHeaderImageSrc } = useUIState();
         let slides = [
    '/Image/mosafWHFc4.jpeg'
     ,
    "/Image/mosaFQYq4H.jpeg"
    
   ]
     
    
       const onClickCategory = (item ,src) => {
        if (homeCategory === item) {
          setHeaderImageSrc("");
          setHomeCategory(item);
        } else {
          setHeaderImageSrc(src);
          setHomeCategory(item);
          push(src)
        }
      };



      
  return (
    <div>
            <section className='flex flex-col justify-center items-center'>
      
      <div className='flex flex-col'>
      <div className='flex md:flex-row flex-col md:justify-between items-start lg:w-[1100px] w-screen'>
          <div className='lg:px-0 px-3 flex flex-col h-[40px] justify-end'>
          <div className='lg:text-start font-semibold text-center text-[20px]'>출장 요청전 필독 사항</div>
          <hr className="mt-1 h-0.5  border-t-0 md:bg-neutral-700 bg-white opacity-100 w-[180px] dark:opacity-50"/>
       </div>
       <div className='flex flex-col md:h-[40px] h-[20px] justify-end'>
          <div className='lg:text-end md:block hidden text-center text-[14px]' onClick={() => {onClickCategory("출장 요청전 필독 사항" ,"/map")}}>더보기 &nbsp;&gt;</div>
          <hr className="mt-1 h-0.5 hidden md:block border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 w-[920px]"/>
       </div>
       </div>
       </div>
      
       
       <div className='md:mt-7' />

       <div className='md:hidden w-full px-3 py-1 justify-start items-start rounded-md'>
       <Gallery2 images={slides} />
       </div>

      <div className='md:w-[1100px] w-full md:px-0 px-3 flex md:flex-row flex-col justify-start items-start gap-7 rounded-md'>

       <Image
          alt="mediaItem"
          className="w-[540px] h-[350px] hidden md:block rounded-md"
          width={540}
          height={350}
          src={"/Image/mosafWHFc4.jpeg"}
        />
   

        <Image
          alt="mediaItem"
          className="w-[540px] h-[350px] hidden md:block rounded-md"
          width={540}
          height={350}
          src={"/Image/mosaFQYq4H.jpeg"}
        />  

      
      </div>

      <div className='flex md:p-0 p-3 flex-col md:w-[1100px] w-full'>
        <div className='md:mt-10 mt-5' />
        <div class="txt_summary">
      <div class="txt_box">
        <div class="txt_component align_l color1">
          <p class="text-[15px] text-[#666666]" data-max-line="4">​✿ 출장 요청 전에 ✿
현관문 전체 사진, 도어락 사진, 
상세한 주소를 문자로 전송해 주시면 
비용과 출발하기전 도착 시간을 알려드립니다.</p>
        </div>
      </div>

      <div className='mt-3'/>

      <div class="txt_box">
        <div class="txt_component align_l ">
           <p class="text-[15px] text-[#666666]" data-max-line="4">✿ 출장 중에 ✿

야간 및 장거리 출장
도착 직전에 취소하는 경우 엄청난 손해입니다
출장 중에 취소 시 출장비 또는 전액이 청구되니
신중한 요청 부탁드립니다
​
출퇴근 시간 및 교통 상황에 따라서 
지연 될 수 있으니
인내심을 가지고 기다려 주세요
교통 법규도 지켜야 하고 안전운전 해야지요

</p>
        </div>
      </div>

      <div className='mt-3'/>

      <div class="txt_box">
        <div class="txt_component align_l ">
          <p class="text-[15px] text-[#666666]" data-max-line="4">✿ ​개문 전 주의사항 ✿
​
◐ 본인의 집이 아닌 경우 ◑
​경찰관 입회하에 만 개문이 가능합니다.
신분증 확인이 안되면 개문이 불가능합니다
친구 집, 연인 집 개문 불가
​
◐ 본인의 집인데 신분증이 없는 경우 ◑
경찰관, 관리실 직원, 경비원의 입회하에 만
개문이 가능합니다
​
◐ 신분증이 집 안에 있을 경우 ◑
개문 후 ​본인의 집이라고 
확인할 수 있는 근거 서류
임대차계약서 및 신분증 확인해주셔야 합니다
​
◐ ​도어락 고장인 경우 ◑
제품을 파손 할 수 있습니다</p>
        </div>
      </div>

      <div className='mt-3'/>

      <div class="txt_box">
        <div class="txt_component align_l ">
           <p class="text-[15px] text-[#666666]" data-max-line="4">일부 업체에서 제품에 흠집을 내거나 
현관문 드릴로 구멍을 뚫어서 
진행하는 업체도 있으며
드릴로 작업할 경우 즉시 작업을 
중단 요청을 하셔야 합니다.

제품이나 현관문에 타공을 하여
작업을 하게되면 누구나 쉽게 열 수 있게 되며,
보안성이 취약하게 됩니다.
​
업체 선정시 작업 방식을
반드시 확인하셔야 합니다</p>
        </div>
      </div>
  </div>
          <div className='md:hidden block flex flex-col h-[40px] justify-end'>
          <hr className="mt-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 w-full"/>
          <div className='md:mt-10 mt-3' />
          <div className='lg:text-end text-center text-[14px]' onClick={() => {onClickCategory("출장 요청전 필독 사항" ,"/map")}}>더보기 &nbsp;&gt;</div>
          </div>
        </div>  
       </section>
    </div>
  )
}

export default SisulNotice2
