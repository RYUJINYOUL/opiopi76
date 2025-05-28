"use client"
import React, { useRef } from "react"
// import Link from "next/link"
import { useState, useEffect } from 'react'
import useUIState from "@/hooks/useUIState";
import useUIState2 from "@/hooks/useUIState2";
import { cn } from "@/lib/utils"
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'



export default function Menu(props) {
  const { push } = useRouter();
  const pathname = usePathname()
  const { homeCategory, setHomeCategory, setHeaderImageSrc, headerImageSrc} = useUIState();

  let total = props
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
      push(item.src, {scroll: false})
    }
  };

  useEffect(() => {
   

    slideRight()
}, []);





const slideRight = () => {

};
  
  return (
    <nav id="nav" className="md:m-0 md:px-60 ml-5 w-full+10 flex gap-3 overflow-x-auto md:pr-0 pr-4">
    {homeCategoryList.map((item, i) => {
      return (
        <div
          onClick={() => onClickCategory(item)}
          key={item.label}
          id={i}
          className={cn(
            "md:h-[62px] h-[55px] md:text-[16px] text-[15px] lg:text-white text-[#ffffff80] min-w-fit px-2 flex justify-center items-center",
            total.total&&"md:text-black text-[#ffffff80]",
            pathname !== "/"&&"lg:text-black",
            item.label === homeCategory &&
              "underline underline-offset-8 md:text-[17px] text-[16px] lg:text-[#474b53] text-white font-medium",
            pathname === "/"&&total.total&&"lg:text-black"
          )}
        >
            {item.label}
        </div>
        
      );
    })}
  </nav>
  )
}


