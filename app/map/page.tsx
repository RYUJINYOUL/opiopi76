import React from 'react'
import Image from "next/image";
import Footer from '@/components/template/Footer'
import { BsTelephone } from "react-icons/bs";

function page (){
  return (
    <div>
    <div className='md:my-20 my-25 p-3.5'>
      <section className='flex flex-col justify-center items-center'>
      <div className='lg:mt-13' />
       <div className='flex md:flex-row flex-col md:justify-between items-start lg:w-[1100px] w-screen'>
             <div className='flex md:flex-row flex-col md:justify-between items-start lg:w-[1100px] w-screen'>
          <div className='lg:px-0 px-3 flex flex-col h-[40px] justify-end'>
          <div className='lg:text-start font-semibold text-center text-[20px] text-[#474b53]'>출장 요청전 필독 사항</div>
          <hr className="mt-1 h-0.5 md:bg-[#474b53] border-t-0 bg-neutral-700 opacity-100 w-[180px] dark:opacity-50"/>
       </div>
       <div className='flex flex-col md:h-[40px] h-[10px] justify-end'>
          <div className='lg:text-end md:block hidden text-center text-[14px]'></div>
          <hr className="mt-1 h-0.5 hidden md:block border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 w-[920px]"/>
       </div>
       </div>
       </div>
          <div className='mt-10' />
        <div className='flex flex-col md:w-[1100px] w-full items-start justify-start'>
         <p>
            ​✿&nbsp;출장&nbsp;요청&nbsp;전에&nbsp;✿
            <br />
            현관문&nbsp;전체&nbsp;사진,&nbsp;도어락&nbsp;사진,&nbsp;
            <br />
            상세한&nbsp;주소를&nbsp;문자로&nbsp;전송해&nbsp;주시면&nbsp;
            <br />
            비용과&nbsp;출발하기전&nbsp;도착&nbsp;시간을&nbsp;알려드립니다.
          </p>
          <div className='mt-10' />
        </div>
          <div className='md:w-[1100px] w-full md:px-0 px-3 flex flex-row md:justify-start md:items-start justify-center items-center md:gap-7 gap-3 rounded-md'>

       <Image
          alt="mediaItem"
          className="md:w-[540px] md:h-[350px] w-[170px] h-[170px] rounded-md"
          width={540}
          height={350}
          src={"/Image/mosafWHFc4.jpeg"}
        />
   

        <Image
          alt="mediaItem"
          className="md:w-[540px] md:h-[350px] w-[170px] h-[170px] rounded-md"
          width={540}
          height={350}
          src={"/Image/mosaFQYq4H.jpeg"}
        />  

      
      </div>
        <div className='mt-10' />
        <div className='flex flex-col md:w-[1100px] w-full items-start justify-start'>
             <div className="component_box _component" data-index={2}>
              {" "}
              <div className="txt_box">
                {" "}
                <div className="txt_component  big align_l t_space ">
                  {" "}
                  <p>
                    ✿&nbsp;출장&nbsp;중에&nbsp;✿
                    <br />
                    <br />
                    야간&nbsp;및&nbsp;장거리&nbsp;출장
                    <br />
                    도착&nbsp;직전에&nbsp;취소하는&nbsp;경우&nbsp;엄청난&nbsp;손해입니다
                    <br />
                    출장&nbsp;중에&nbsp;취소&nbsp;시&nbsp;출장비&nbsp;또는&nbsp;전액이&nbsp;청구되니
                    <br />
                    신중한&nbsp;요청&nbsp;부탁드립니다
                    <br />​<br />
                    출퇴근&nbsp;시간&nbsp;및&nbsp;교통&nbsp;상황에&nbsp;따라서&nbsp;
                    <br />
                    지연&nbsp;될&nbsp;수&nbsp;있으니
                    <br />
                    인내심을&nbsp;가지고&nbsp;기다려&nbsp;주세요
                    <br />
                    교통&nbsp;법규도&nbsp;지켜야&nbsp;하고&nbsp;안전운전&nbsp;해야지요
                    <br />
                    <br />
                  </p>{" "}
                </div>
              </div>
            </div>
          <div className='mt-10' />

          <p>
            ✿&nbsp;​개문&nbsp;전&nbsp;주의사항&nbsp;✿
            <br />​<br />
            ◐&nbsp;본인의&nbsp;집이&nbsp;아닌&nbsp;경우&nbsp;◑
            <br />
            ​경찰관&nbsp;입회하에&nbsp;만&nbsp;개문이&nbsp;가능합니다.
            <br />
            신분증&nbsp;확인이&nbsp;안되면&nbsp;개문이&nbsp;불가능합니다
            <br />
            친구&nbsp;집,&nbsp;연인&nbsp;집&nbsp;개문&nbsp;불가
            <br />​<br />
            ◐&nbsp;본인의&nbsp;집인데&nbsp;신분증이&nbsp;없는&nbsp;경우&nbsp;◑
            <br />
            경찰관,&nbsp;관리실&nbsp;직원,&nbsp;경비원의&nbsp;입회하에&nbsp;만
            <br />
            개문이&nbsp;가능합니다
            <br />​<br />
            ◐&nbsp;신분증이&nbsp;집&nbsp;안에&nbsp;있을&nbsp;경우&nbsp;◑
            <br />
            개문&nbsp;후&nbsp;​본인의&nbsp;집이라고&nbsp;
            <br />
            확인할&nbsp;수&nbsp;있는&nbsp;근거&nbsp;서류
            <br />
            임대차계약서&nbsp;및&nbsp;신분증&nbsp;확인해주셔야&nbsp;합니다
            <br />​<br />
            ◐&nbsp;​도어락&nbsp;고장인&nbsp;경우&nbsp;◑
            <br />
            제품을&nbsp;파손&nbsp;할&nbsp;수&nbsp;있습니다
          </p>

          <div className='mt-10' />
        </div>


        <Image
          alt="mediaItem"
          className="object-contain"
            width={1100}
            height={800}
          src={"/Image/mosa9YMcJV.jpeg"}
        />  


      <div className='mt-10' />
         <div className='md:w-[1100px] w-full'>
             <a href="tel:010-2742-7377 " className="w-full md:w-[1100px] md:h-[70px] h-[45px] 
             flex flex-row lg:px-8 md:pl-0 pl-3 items-center md:justify-center justify-start border-1 bg-[#2b2929] gap-2">
                  <BsTelephone className='text-white text-[23px]' />
                      <span className="md:text-[18px] text-[15px] text-white">
                          클릭시 전화연결
                      </span>
              </a>   
        </div>
      <div className='mt-10' />  



          <div className='flex flex-col md:w-[1100px] w-full items-start justify-start'>
            <p>
              일부&nbsp;업체에서&nbsp;제품에&nbsp;흠집을&nbsp;내거나&nbsp;
              <br />
              현관문&nbsp;드릴로&nbsp;구멍을&nbsp;뚫어서&nbsp;
              <br />
              진행하는&nbsp;업체도&nbsp;있으며
              <br />
              드릴로&nbsp;작업할&nbsp;경우&nbsp;즉시&nbsp;작업을&nbsp;
              <br />
              중단&nbsp;요청을&nbsp;하셔야&nbsp;합니다.
              <br />
              <br />
              제품이나&nbsp;현관문에&nbsp;타공을&nbsp;하여
              <br />
              작업을&nbsp;하게되면&nbsp;누구나&nbsp;쉽게&nbsp;열&nbsp;수&nbsp;있게&nbsp;되며,
              <br />
              보안성이&nbsp;취약하게&nbsp;됩니다.
              <br />​<br />
              업체&nbsp;선정시&nbsp;작업&nbsp;방식을
              <br />
              반드시&nbsp;확인하셔야&nbsp;합니다
            </p>
          <div className='mt-10' />

      


          <div className='mt-10' />
        </div>

      </section>
       </div>
         <Footer />
      </div> 
  )
}

export default page
