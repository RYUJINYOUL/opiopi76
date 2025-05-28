"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from "next/image";
import useUIState from "@/hooks/useUIState";

const SisulNotice = () => {
   const { push } = useRouter();
       const [ widths, setWidths ] = useState(false);
       const { homeCategory, setHomeCategory, setHeaderImageSrc } = useUIState();
     
    
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
          <div className='lg:text-start font-semibold text-center text-[20px]'>도어락 비밀번호 분실</div>
          <hr className="mt-1 h-0.5 md:block hidden border-t-0 bg-neutral-700 opacity-100 w-[170px] dark:opacity-50"/>
       </div>
          <div className='flex flex-col md:h-[40px] h-[20px] justify-end'>
          <div className='lg:text-end md:block hidden text-center text-[14px]' onClick={() => {onClickCategory("도어락 비밀번호 분실" ,"/so")}}>더보기 &nbsp;&gt;</div>
          <hr className="mt-1 h-0.5 hidden md:block border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 w-[930px]"/>
       </div>
       </div>
       </div>
      
       <div className='md:mt-7' />
       <div className='md:w-[1100px] w-full md:px-0 px-3 flex md:flex-row flex-col justify-start items-start gap-10'>
        <div className='relative md:w-[530px] w-full h-[353px]'>
       <Image
          alt="mediaItem"
          className="object-cover rounded-md"
          // width={530}
          // height={353}
          fill
          src={"/Image/mosaFMHhSO.gif"}
        />  
        </div>
        <div className='flex flex-col md:w-[530px] w-full'>
          <div className="area_text">
  <div className="txt_box">
    <div className="txt_component align_l ">
      <p className="text-[15px] text-[#666666]" data-max-line={10}>
        조은열쇠 출장 지역은 수원, 오산 화성, 동탄, 용인, 광교, 수지, 평택,
        안성, 안양, 분당, 판교, 안산, 과천, 의왕, 군포, 천안
      </p>
    </div>
  </div>
  <div className='mt-3'></div>
  <div className="txt_box">
    <div className="txt_component align_l ">
       <p className="text-[15px] text-[#666666]" data-max-line={10}>
        파손없이 개문 가능한 가까운 협력업체로 연결해드립니다 서울, 경기, 인천,
        고양, 일산, 파주, 문산, 운정, 김포,
      </p>
    </div>
  </div>
    <div className='mt-3'></div>
  <div className="txt_box">
    <div className="txt_component align_l ">
      <p className="text-[15px] text-[#666666]" data-max-line={10}>
        안녕하세요 국내 시판되고 있는 모든 제품 도어락 파손없이 열 수 있는 개문
        전문가입니다.
      </p>
    </div>
  </div>
    <div className='mt-3'></div>
  <div className="txt_box">
    <div className="txt_component align_l ">
      <p className="text-[15px] text-[#666666]" data-max-line={10}>
        현관문 디지털 도어락 비밀번호 분실, 오류로 집에 들어가지 못할 때 어떻게
        하시나요? 비밀번호 분실했을 때 제품 파손없이 열어서 다시 사용할 수
        있습니다.
      </p>
    </div>
  </div>
</div>

          <div className='md:mt-10 mt-8' />
          <div className='md:hidden block flex flex-col h-[40px] justify-end'>
          <hr className="mt-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 w-full"/>
          <div className='md:mt-10 mt-3' />
          <div className='lg:text-end text-center text-[14px]' onClick={() => {onClickCategory("도어락 비밀번호 분실" ,"/so")}}>더보기 &nbsp;&gt;</div>
       </div>
        </div>  
        </div>
       </section>
    </div>
  )
}

export default SisulNotice
