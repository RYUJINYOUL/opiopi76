"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import React, { useMemo } from 'react'
import { FaHeart } from "react-icons/fa";
import useUIState from "@/hooks/useUIState";
import { cn } from "@/lib/utils"

import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { AiTwotoneNotification } from "react-icons/ai";
import { BsChatText } from "react-icons/bs";

function Navigator() {
    const { push } = useRouter();
    const pathname = usePathname()
    const dispatch = useDispatch();


    const { homeCategory, setHomeCategory, setHeaderImageSrc } = useUIState();
    const homeCategoryList = [
      {
      label: "도어락 비파손 전문업체",
      src: "/",
    },
      {
      label: "도어락 비밀번호 분실",
      src: "/so",
    },
     {
      label: "출장 요청전 필독 사항",
      src: "/map",
    },
    ];
    const onClickCategory = (item) => {
      if (homeCategory === item.label) {
        setHeaderImageSrc("");
        setHomeCategory(item.label);
      } else {
        setHeaderImageSrc(item.src);
        setHomeCategory(item.label);
        console.log(item.label)
      }
    };

 
  

  return (
    <div>
    
      <section className='flex flex-col gap-2 p-4'>
        {homeCategoryList.map((item) => {
             return (
               <div
                 onClick={() => onClickCategory(item)}
                 key={item.label}
                 className={cn(
                   "h-[38px] text-white min-w-fit px-2 flex justify-start items-center border border-transparent rounded-lg hover:bg-gray-200",
                   item.label === homeCategory &&
                     "underline underline-offset-8"
                 )}
               >
                 <div onClick={() => {push(item.src, {scroll: false})}}>{item.label}</div>
               </div>
             );
           })}
      </section>
      
    </div>
  )
}

export default Navigator
