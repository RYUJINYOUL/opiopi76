"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { cn } from "@/lib/utils";
import useUIState from "@/hooks/useUIState";


const Question = () => {
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
    <div className='flex flex-col justify-center items-center'>
           <div className='md:mb-18 mb-4'></div>
    <div className='flex flex-col md:p-0 p-3 md:w-[1100px] w-full'>
    <section className='flex flex-col justify-center items-center'>
      
      <div className='flex flex-col'>
      <div className='flex md:flex-row flex-col md:justify-between items-start lg:w-[1100px] w-screen'>
          <div className='lg:px-0 px-3 flex flex-col h-[40px] justify-end'>
            <div className='md:text-start font-semibold text-center text-[20px] md:text-[#474b53] text-[#000000]'>화성시 출장 지역</div>
            <hr className="mt-1 h-0.5 md:bg-[#474b53] bg-[#474b53] border-t-0 opacity-100 w-[140px] dark:opacity-50"/>
          </div>
           <div className='flex flex-col md:h-[40px] h-[20px] justify-end'>
          <hr className="mt-1 h-0.5 hidden md:block border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 w-[960px]"/>
       </div>
       </div>
       </div>

       <div className='md:w-[1100px] w-full md:px-0 px-1 flex md:flex-col flex-row justify-center items-start md:gap-7 gap-1 rounded-md'>
           {/* pc */}
           <section className='md:block hidden flex flex-col justify-center items-center'>
                <div className='md:w-[1100px] w-full flex flex-col'>
                  {/* <hr className="my-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50"/> */}
                  <div className='md:mt-7' />
                  <div className='flex flex-row gap-30'>
                    <div className='flex flex-col gap-1.5 lg:text-start text-center text-[15px]'>
                  
                    <div className='text-[#999999] text-[15px]'>
                      <p>
  <br />
  병점동,&nbsp;진안동,&nbsp;반송동,&nbsp;능동,&nbsp;석우동,&nbsp;반월동,&nbsp;
  <br />
  동탄동,&nbsp;동탄,&nbsp;기배동,&nbsp;향남,&nbsp;향남읍,&nbsp;우정읍,&nbsp;화산동,&nbsp;정남면,&nbsp;기산동,&nbsp;비봉면,&nbsp;서신면,&nbsp;마도면,&nbsp;양감면,&nbsp;장안면,&nbsp;팔탄면,&nbsp;안녕동,&nbsp;영천동,&nbsp;산척동,&nbsp;목동,&nbsp;봉담,&nbsp;봉담읍,&nbsp;수영리,&nbsp;동화리,&nbsp;남양읍,&nbsp;남양뉴타운,&nbsp;송산면,&nbsp;새솔동,&nbsp;송산그린시티,&nbsp;동탄면,&nbsp;동탄신도시,&nbsp;동탄1신도시,&nbsp;동탄2신도시
</p>
</div>
                  </div>
                   
                 
                  </div>  
                  <div className='mt-7' />
                  <hr className="my-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50"/>
                </div>
             </section>
             <div className='md:mt-7' />
   
           {/* pc */}


           {/* 모바일 */}
            <section className='md:hidden block w-full'>
                
                    <div className='mt-1' />
                    <div className='text-[#999999] text-[16px]'>
                       <p>
  병점동,&nbsp;진안동,&nbsp;반송동,&nbsp;능동,&nbsp;석우동,&nbsp;반월동,&nbsp;
  <br />
  동탄동,&nbsp;동탄,&nbsp;기배동,&nbsp;향남,&nbsp;향남읍,&nbsp;우정읍,&nbsp;화산동,&nbsp;정남면,&nbsp;기산동,&nbsp;비봉면,&nbsp;서신면,&nbsp;마도면,&nbsp;양감면,&nbsp;장안면,&nbsp;팔탄면,&nbsp;안녕동,&nbsp;영천동,&nbsp;산척동,&nbsp;목동,&nbsp;봉담,&nbsp;봉담읍,&nbsp;수영리,&nbsp;동화리,&nbsp;남양읍,&nbsp;남양뉴타운,&nbsp;송산면,&nbsp;새솔동,&nbsp;송산그린시티,&nbsp;동탄면,&nbsp;동탄신도시,&nbsp;동탄1신도시,&nbsp;동탄2신도시
</p>
                    </div>

                   
             </section>
             </div>
           {/* 모바일 */}
             
          </section>      

    <div className='md:mt-0 mt-3' />
     <section className='flex flex-col justify-center items-center'>
      
      <div className='flex flex-col'>
      <div className='flex md:flex-row flex-col md:justify-between items-start lg:w-[1100px] w-screen'>
          <div className='lg:px-0 px-3 flex flex-col h-[40px] justify-end'>
            <div className='md:text-start font-semibold text-center text-[20px] md:text-[#474b53] text-[#000000]'>수원시 출장 지역</div>
            <hr className="mt-1 h-0.5 md:bg-[#474b53] bg-[#474b53] border-t-0 opacity-100 w-[140px] dark:opacity-50"/>
          </div>
           <div className='flex flex-col md:h-[40px] h-[20px] justify-end'>
          <hr className="mt-1 h-0.5 hidden md:block border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 w-[960px]"/>
       </div>
       </div>
       </div>

       <div className='md:w-[1100px] w-full md:px-0 px-1 flex md:flex-col flex-row justify-center items-start md:gap-7 gap-1 rounded-md'>
           {/* pc */}
           <section className='md:block hidden flex flex-col justify-center items-center'>
                <div className='md:w-[1100px] w-full flex flex-col'>
                  {/* <hr className="my-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50"/> */}
                  <div className='md:mt-7' />
                  <div className='flex flex-row gap-30'>
                    <div className='flex flex-col gap-1.5 lg:text-start text-center text-[15px]'>
                  
                    <div className='text-[#999999] text-[15px]'>
                    <p>

  수원시

  영통구&nbsp;매탄동,&nbsp;영통동,&nbsp;망포동,&nbsp;신동,&nbsp;원천동,&nbsp;

  하동,&nbsp;이의동,&nbsp;광교신도시
  <br />
  팔달구
  <br />
  인계동,&nbsp;우만동,&nbsp;화서동,&nbsp;지동,&nbsp;매교동,&nbsp;행궁동,&nbsp;

  광교동,&nbsp;남창동,&nbsp;영동,&nbsp;중동,&nbsp;구천동,&nbsp;남수동,&nbsp;

  매향동,&nbsp;북수동,&nbsp;장안동,&nbsp;시풍동,&nbsp;교동,&nbsp;고등동
  <br />
  장안구&nbsp;
  <br />
  연무동,&nbsp;영화동,&nbsp;정자동,&nbsp;천천동,&nbsp;율전동&nbsp;이목동,&nbsp;

  파장동,&nbsp;정자동,&nbsp;조원동,&nbsp;하광교동,&nbsp;상광교동,&nbsp;송죽동,&nbsp;곡선동,&nbsp;입북동  <br />
  권선구
  <br />
  당수동,&nbsp;입북동,&nbsp;세류동,&nbsp;금곡동,&nbsp;구운동,호매실동,&nbsp;탑동,&nbsp;서둔동,&nbsp;평동,&nbsp;고색동,&nbsp;오목천동,평리동,&nbsp;정자동,&nbsp;대황교동,&nbsp;곡반정동,&nbsp;권선동
  <br />
</p>

</div>
                  </div>
                   
                 
                  </div>  
                  <div className='mt-7' />
                  <hr className="my-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50"/>
                </div>
             </section>
             <div className={cn('mt-0', widths&&"block mt-7")} />
 
           {/* pc */}


           {/* 모바일 */}
            <section className='md:hidden block w-full'>
                
                    <div className='mt-1' />
                    <div className='text-[#999999] text-[16px]'><p>

  수원시

  영통구&nbsp;매탄동,&nbsp;영통동,&nbsp;망포동,&nbsp;신동,&nbsp;원천동,&nbsp;

  하동,&nbsp;이의동,&nbsp;광교신도시
  <br />
  팔달구
  <br />
  인계동,&nbsp;우만동,&nbsp;화서동,&nbsp;지동,&nbsp;매교동,&nbsp;행궁동,&nbsp;

  광교동,&nbsp;남창동,&nbsp;영동,&nbsp;중동,&nbsp;구천동,&nbsp;남수동,&nbsp;

  매향동,&nbsp;북수동,&nbsp;장안동,&nbsp;시풍동,&nbsp;교동,&nbsp;고등동
  <br />
  장안구&nbsp;
  <br />
  연무동,&nbsp;영화동,&nbsp;정자동,&nbsp;천천동,&nbsp;율전동&nbsp;이목동,&nbsp;

  파장동,&nbsp;정자동,&nbsp;조원동,&nbsp;하광교동,&nbsp;상광교동,&nbsp;송죽동,&nbsp;곡선동,&nbsp;입북동  <br />
  권선구
  <br />
  당수동,&nbsp;입북동,&nbsp;세류동,&nbsp;금곡동,&nbsp;구운동,호매실동,&nbsp;탑동,&nbsp;서둔동,&nbsp;평동,&nbsp;고색동,&nbsp;오목천동,평리동,&nbsp;정자동,&nbsp;대황교동,&nbsp;곡반정동,&nbsp;권선동
  <br />
</p></div>

                   
             </section>
             </div>
           {/* 모바일 */}
             
          </section>      

    <div className='md:mt-0 mt-3' />


    <div className={cn('hidden text-[15px] text-[#222222] text-start', widths&&"block")}>
     <section className='flex flex-col justify-center items-center'>
      
      <div className='flex flex-col'>
      <div className='flex md:flex-row flex-col md:justify-between items-start lg:w-[1100px] w-screen'>
          <div className='lg:px-0 px-3 flex flex-col h-[40px] justify-end'>
            <div className='md:text-start font-semibold text-center text-[20px] md:text-[#474b53] text-[#000000]'>평택시 출장 지역</div>
            <hr className="mt-1 h-0.5 md:bg-[#474b53] bg-[#474b53] border-t-0 opacity-100 w-[140px] dark:opacity-50"/>
          </div>
           <div className='flex flex-col md:h-[40px] h-[20px] justify-end'>
          <hr className="mt-1 h-0.5 hidden md:block border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 w-[960px]"/>
       </div>
       </div>
       </div>

       <div className='md:w-[1100px] w-full md:px-0 px-1 flex md:flex-col flex-row justify-center items-start md:gap-7 gap-1 rounded-md'>
           {/* pc */}
           <section className='md:block hidden flex flex-col justify-center items-center'>
                <div className='md:w-[1100px] w-full flex flex-col'>
                  {/* <hr className="my-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50"/> */}
                  <div className='md:mt-7' />
                  <div className='flex flex-row gap-30'>
                    <div className='flex flex-col gap-1.5 lg:text-start text-center text-[15px]'>
                  
                    <div className='text-[#999999] text-[15px]'>
                      <p>
  평택동, 비전동, 동삭동, 지제동, 죽백동, 용이동, 
합정동, 통복동, 칠괴동, 가재동, 칠원동, 군문동, 소사동, 월곡동, 팽성읍, 유천동, 신대동, 청룡동, 진위면, 고덕면, 장당동, 도일동, 장안동, 지산동, 신장동, 도곡동, 이충동, 안중읍, 포승읍, 오성면, 현덕면, 청북읍, 중앙동, 송탄동, 서정동, 송북동, 원평동, 서탄면, 고덕면, 고덕동 고덕신도시, 
고덕국제신도시
</p>
</div>
                  </div>
                   
                 
                  </div>  
                  <div className='mt-7' />
                  <hr className="my-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50"/>
                </div>
             </section>
             <div className='md:mt-7' />
   
           {/* pc */}


           {/* 모바일 */}
            <section className='md:hidden block w-full'>
                
                    <div className='mt-1' />
                    <div className='text-[#999999] text-[16px]'><p>
  평택동, 비전동, 동삭동, 지제동, 죽백동, 용이동, 
합정동, 통복동, 칠괴동, 가재동, 칠원동, 군문동, 소사동, 월곡동, 팽성읍, 유천동, 신대동, 청룡동, 진위면, 고덕면, 장당동, 도일동, 장안동, 지산동, 신장동, 도곡동, 이충동, 안중읍, 포승읍, 오성면, 현덕면, 청북읍, 중앙동, 송탄동, 서정동, 송북동, 원평동, 서탄면, 고덕면, 고덕동 고덕신도시, 
고덕국제신도시
</p></div>

                   
             </section>
             </div>
           {/* 모바일 */}
             
          </section>               


    <div className='md:mt-0 mt-3' />
     <section className='flex flex-col justify-center items-center'>
      
      <div className='flex flex-col'>
      <div className='flex md:flex-row flex-col md:justify-between items-start lg:w-[1100px] w-screen'>
          <div className='lg:px-0 px-3 flex flex-col h-[40px] justify-end'>
            <div className='md:text-start font-semibold text-center text-[20px] md:text-[#474b53] text-[#000000]'>오산시 출장 지역</div>
            <hr className="mt-1 h-0.5 md:bg-[#474b53] bg-[#474b53] border-t-0 opacity-100 w-[140px] dark:opacity-50"/>
          </div>
           <div className='flex flex-col md:h-[40px] h-[20px] justify-end'>
          <hr className="mt-1 h-0.5 hidden md:block border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 w-[960px]"/>
       </div>
       </div>
       </div>

       <div className='md:w-[1100px] w-full md:px-0 px-1 flex md:flex-col flex-row justify-center items-start md:gap-7 gap-1 rounded-md'>
           {/* pc */}
           <section className='md:block hidden flex flex-col justify-center items-center'>
                <div className='md:w-[1100px] w-full flex flex-col'>
                  {/* <hr className="my-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50"/> */}
                  <div className='md:mt-7' />
                  <div className='flex flex-row gap-30'>
                    <div className='flex flex-col gap-1.5 lg:text-start text-center text-[15px]'>
                  
                    <div className='text-[#999999] text-[15px]'><p>
 양산동, 서랑동, 지곶동, 세교동, 외삼미동, 
내삼미동, 금암동, 가장동, 갈매동, 궐동, 서동, 별음동, 두곡동, 탑동, 누읍동, 가수동, 청학동, 은계동, 오산동, 갈곶동, 청호동, 고현동, 부산동,원동
</p></div>
                  </div>
                   
                 
                  </div>  
                  <div className='mt-7' />
                  <hr className="my-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50"/>
                </div>
             </section>
             <div className='md:mt-7' />
   
           {/* pc */}


           {/* 모바일 */}
            <section className='md:hidden block w-full'>
                
                    <div className='mt-1' />
                    <div className='text-[#999999] text-[16px]'>
                     <p>
 양산동, 서랑동, 지곶동, 세교동, 외삼미동, 
내삼미동, 금암동, 가장동, 갈매동, 궐동, 서동, 별음동, 두곡동, 탑동, 누읍동, 가수동, 청학동, 은계동, 오산동, 갈곶동, 청호동, 고현동, 부산동,원동
</p>
                    </div>

                   
             </section>
             </div>
           {/* 모바일 */}
             
          </section>          

 <div className='md:mt-0 mt-3' />
         <section className='flex flex-col justify-center items-center'>
      
      <div className='flex flex-col'>
      <div className='flex md:flex-row flex-col md:justify-between items-start lg:w-[1100px] w-screen'>
          <div className='lg:px-0 px-3 flex flex-col h-[40px] justify-end'>
            <div className='md:text-start font-semibold text-center text-[20px] md:text-[#474b53] text-[#000000]'>안양시 출장 지역</div>
            <hr className="mt-1 h-0.5 md:bg-[#474b53] bg-[#474b53] border-t-0 opacity-100 w-[140px] dark:opacity-50"/>
          </div>
           <div className='flex flex-col md:h-[40px] h-[20px] justify-end'>
          <hr className="mt-1 h-0.5 hidden md:block border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 w-[960px]"/>
       </div>
       </div>
       </div>

       <div className='md:w-[1100px] w-full md:px-0 px-1 flex md:flex-col flex-row justify-center items-start md:gap-7 gap-1 rounded-md'>
           {/* pc */}
           <section className='md:block hidden flex flex-col justify-center items-center'>
                <div className='md:w-[1100px] w-full flex flex-col'>
                  {/* <hr className="my-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50"/> */}
                  <div className='md:mt-7' />
                  <div className='flex flex-row gap-30'>
                    <div className='flex flex-col gap-1.5 lg:text-start text-center text-[15px]'>
                  
                    <div className='text-[#999999] text-[15px]'><p>
만안구 <br/>
석수동, 박달동, 안양동, 
<br/>
동안구 <br/>
비산동, 관양동, 달안동,부흥동, 부림동, 평안동, 범계동, 평촌동, 신촌동, 귀인동, 갈산동, 호계동
</p></div>
                  </div>
                   
                 
                  </div>  
                  <div className='mt-7' />
                  <hr className="my-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50"/>
                </div>
             </section>
             <div className='md:mt-7' />
   
           {/* pc */}


           {/* 모바일 */}
            <section className='md:hidden block w-full'>
                
                    <div className='mt-1' />
                    <div className='text-[#999999] text-[16px]'>
                       <p>
만안구 <br/>
석수동, 박달동, 안양동, 
<br/>
동안구 <br/>
비산동, 관양동, 달안동,부흥동, 부림동, 평안동, 범계동, 평촌동, 신촌동, 귀인동, 갈산동, 호계동
</p>
                    </div>

                   
             </section>
             </div>
           {/* 모바일 */}
             
          </section>    

 <div className='md:mt-0 mt-3' />
     <section className='flex flex-col justify-center items-center'>
      
      <div className='flex flex-col'>
      <div className='flex md:flex-row flex-col md:justify-between items-start lg:w-[1100px] w-screen'>
          <div className='lg:px-0 px-3 flex flex-col h-[40px] justify-end'>
            <div className='md:text-start font-semibold text-center text-[20px] md:text-[#474b53] text-[#000000]'>안산시 출장 지역</div>
            <hr className="mt-1 h-0.5 md:bg-[#474b53] bg-[#474b53] border-t-0 opacity-100 w-[140px] dark:opacity-50"/>
          </div>
           <div className='flex flex-col md:h-[40px] h-[20px] justify-end'>
          <hr className="mt-1 h-0.5 hidden md:block border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 w-[960px]"/>
       </div>
       </div>
       </div>

       <div className='md:w-[1100px] w-full md:px-0 px-1 flex md:flex-col flex-row justify-center items-start md:gap-7 gap-1 rounded-md'>
           {/* pc */}
           <section className='md:block hidden flex flex-col justify-center items-center'>
                <div className='md:w-[1100px] w-full flex flex-col'>
                  {/* <hr className="my-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50"/> */}
                  <div className='md:mt-7' />
                  <div className='flex flex-row gap-30'>
                    <div className='flex flex-col gap-1.5 lg:text-start text-center text-[15px]'>
                  
                    <div className='text-[#999999] text-[15px]'><p>
수암동, 장하동, 장상동, 양상동, 월피동, 부곡동, 성포동, 사동, 이동, 일동, 본오동, 팔곡일동, 건건동, 사사동, 고잔동,원곡동, 초지동, 중앙동, 와동,호수동, 해양동, 안산동, 월피동, 반월동, 부곡동,사이동, 백운동, 선길동, 선부동, 신길동, 성곡동,목내동, 원시동, 원곡동, 화정동, 양상동, 장상동, 성포동, 수암동
</p></div>
                  </div>
                   
                 
                  </div>  
                  <div className='mt-7' />
                  <hr className="my-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50"/>
                </div>
             </section>
             <div className='md:mt-7' />
   
           {/* pc */}


           {/* 모바일 */}
            <section className='md:hidden block w-full'>
                
                    <div className='mt-1' />
                    <div className='text-[#999999]  text-[16px]'><p>
수암동, 장하동, 장상동, 양상동, 월피동, 부곡동, 성포동, 사동, 이동, 일동, 본오동, 팔곡일동, 건건동, 사사동, 고잔동,원곡동, 초지동, 중앙동, 와동,호수동, 해양동, 안산동, 월피동, 반월동, 부곡동,사이동, 백운동, 선길동, 선부동, 신길동, 성곡동,목내동, 원시동, 원곡동, 화정동, 양상동, 장상동, 성포동, 수암동
</p></div>

                   
             </section>
             </div>
           {/* 모바일 */}
             
          </section>    

 <div className='md:mt-0 mt-3' />
    <section className='flex flex-col justify-center items-center'>
      
      <div className='flex flex-col'>
      <div className='flex md:flex-row flex-col md:justify-between items-start lg:w-[1100px] w-screen'>
          <div className='lg:px-0 px-3 flex flex-col h-[40px] justify-end'>
            <div className='md:text-start font-semibold text-center text-[20px] md:text-[#474b53] text-[#000000]'>안성시 출장 지역</div>
            <hr className="mt-1 h-0.5 md:bg-[#474b53] bg-[#474b53] border-t-0 opacity-100 w-[140px] dark:opacity-50"/>
          </div>
           <div className='flex flex-col md:h-[40px] h-[20px] justify-end'>
          <hr className="mt-1 h-0.5 hidden md:block border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 w-[960px]"/>
       </div>
       </div>
       </div>

       <div className='md:w-[1100px] w-full md:px-0 px-1 flex md:flex-col flex-row justify-center items-start md:gap-7 gap-1 rounded-md'>
           {/* pc */}
           <section className='md:block hidden flex flex-col justify-center items-center'>
                <div className='md:w-[1100px] w-full flex flex-col'>
                  {/* <hr className="my-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50"/> */}
                  <div className='md:mt-7' />
                  <div className='flex flex-row gap-30'>
                    <div className='flex flex-col gap-1.5 lg:text-start text-center text-[15px]'>
                  
                    <div className='text-[#999999] text-[15px]'><p>
고삼면, 양성면, 원곡면, 대덕면, 공도읍, 미양면, 서운면, 금광면, 죽산면, 보개면, 삼죽면, 일죽면, 안성동
</p></div>
                  </div>
                   
                 
                  </div>  
                  <div className='mt-7' />
                  <hr className="my-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50"/>
                </div>
             </section>
             <div className='md:mt-7' />
   
           {/* pc */}


           {/* 모바일 */}
            <section className='md:hidden block w-full'>
                
                    <div className='mt-1' />
                    <div className='text-[#999999] text-[16px]'><p>
고삼면, 양성면, 원곡면, 대덕면, 공도읍, 미양면, 서운면, 금광면, 죽산면, 보개면, 삼죽면, 일죽면, 안성동
</p></div>

                   
             </section>
             </div>
           {/* 모바일 */}
             
          </section>      

 <div className='md:mt-0 mt-3' />
     <section className='flex flex-col justify-center items-center'>
      
      <div className='flex flex-col'>
      <div className='flex md:flex-row flex-col md:justify-between items-start lg:w-[1100px] w-screen'>
          <div className='lg:px-0 px-3 flex flex-col h-[40px] justify-end'>
            <div className='md:text-start font-semibold text-center text-[20px] md:text-[#474b53] text-[#000000]'>성남시 출장 지역</div>
            <hr className="mt-1 h-0.5 md:bg-[#474b53] bg-[#474b53] border-t-0 opacity-100 w-[140px] dark:opacity-50"/>
          </div>
           <div className='flex flex-col md:h-[40px] h-[20px] justify-end'>
          <hr className="mt-1 h-0.5 hidden md:block border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 w-[960px]"/>
       </div>
       </div>
       </div>

       <div className='md:w-[1100px] w-full md:px-0 px-1 flex md:flex-col flex-row justify-center items-start md:gap-7 gap-1 rounded-md'>
           {/* pc */}
           <section className='md:block hidden flex flex-col justify-center items-center'>
                <div className='md:w-[1100px] w-full flex flex-col'>
                  {/* <hr className="my-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50"/> */}
                  <div className='md:mt-7' />
                  <div className='flex flex-row gap-30'>
                    <div className='flex flex-col gap-1.5 lg:text-start text-center text-[15px]'>
                  
                    <div className='text-[#999999] text-[15px]'><p>
수정구<br/>
고등동, 둔전동, 심곡동, 신촌동, 오야동, 복정동, 상적동, 금토동, 시흥동, 사송동, 수진동, 태평동, 창곡동, 산성동, 단대동, 양지동, 
<br/>
중원구<br/>
은행동, 금광동, 중앙동, 성남동, 여수동, 하대원동, 상대원동, 갈현동, 도촌동
<br/>
분당구<br/>
운중동, 석운동, 대장동, 하산운동, 삼평동, 판교동, 백현동, 판교동, 백현동, 궁내동, 금곡동, 동원동, 구미동, 정자동, 수내동, 이매동, 서현동, 야탑동, 율동, 분당동, 구미동

</p></div>
                  </div>
                   
                 
                  </div>  
                  <div className='mt-7' />
                  <hr className="my-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50"/>
                </div>
             </section>
             <div className='md:mt-7' />
   
           {/* pc */}


           {/* 모바일 */}
            <section className='md:hidden block w-full'>
                
                    <div className='mt-1' />
                    <div className='text-[#999999] text-[16px]'>
                      <p>
수정구<br/>
고등동, 둔전동, 심곡동, 신촌동, 오야동, 복정동, 상적동, 금토동, 시흥동, 사송동, 수진동, 태평동, 창곡동, 산성동, 단대동, 양지동, 
<br/>
중원구<br/>
은행동, 금광동, 중앙동, 성남동, 여수동, 하대원동, 상대원동, 갈현동, 도촌동
<br/>
분당구<br/>
운중동, 석운동, 대장동, 하산운동, 삼평동, 판교동, 백현동, 판교동, 백현동, 궁내동, 금곡동, 동원동, 구미동, 정자동, 수내동, 이매동, 서현동, 야탑동, 율동, 분당동, 구미동

</p>
                    </div>

                   
             </section>
             </div>
           {/* 모바일 */}
             
          </section>       

 <div className='md:mt-0 mt-3' />
     <section className='flex flex-col justify-center items-center'>
      
      <div className='flex flex-col'>
      <div className='flex md:flex-row flex-col md:justify-between items-start lg:w-[1100px] w-screen'>
          <div className='lg:px-0 px-3 flex flex-col h-[40px] justify-end'>
            <div className='md:text-start font-semibold text-center text-[20px] md:text-[#474b53] text-[#000000]'>용인시 출장 지역</div>
            <hr className="mt-1 h-0.5 md:bg-[#474b53] bg-[#474b53] border-t-0 opacity-100 w-[140px] dark:opacity-50"/>
          </div>
           <div className='flex flex-col md:h-[40px] h-[20px] justify-end'>
          <hr className="mt-1 h-0.5 hidden md:block border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 w-[960px]"/>
       </div>
       </div>
       </div>

       <div className='md:w-[1100px] w-full md:px-0 px-1 flex md:flex-col flex-row justify-center items-start md:gap-7 gap-1 rounded-md'>
           {/* pc */}
           <section className='md:block hidden flex flex-col justify-center items-center'>
                <div className='md:w-[1100px] w-full flex flex-col'>
                  {/* <hr className="my-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50"/> */}
                  <div className='md:mt-7' />
                  <div className='flex flex-row gap-30'>
                    <div className='flex flex-col gap-1.5 lg:text-start text-center text-[15px]'>
                  
                    <div className='text-[#999999] text-[15px]'><p>
수지구<br/>
풍덕천동, 신봉동, 
죽전동, 동천동, 상현동, 성복동
<br/>
​기흥구<br/>
신갈동, 영덕동, 구갈동, 상갈동, 보라동, 기흥동, 서농동, 구성동, 마북동, 동백동, 상하동, 보정동, 지곡동, 공세동, 고매동, 서농동, 서천동, 언남동, 청덕동, 중동, 상하동, 동천동, 고기동
<br/>
​처인구<br/>
포곡읍, 모현읍, 이동읍, 남사읍, 원삼면, 백암면, 중앙동, 역삼동, 동부동, 김량장동, 삼가동, 유방동, 고림동, 역북동, 운학동, 해곡동

</p></div>
                  </div>
                   
                 
                  </div>  
                  <div className='mt-7' />
                  <hr className="my-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50"/>
                </div>
             </section>
             <div className='md:mt-7' />
   
           {/* pc */}


           {/* 모바일 */}
            <section className='md:hidden block w-full'>
                
                    <div className='mt-1' />
                    <div className='text-[#999999] text-[16px]'>
                      <p>
수지구<br/>
풍덕천동, 신봉동, 
죽전동, 동천동, 상현동, 성복동
<br/>
​기흥구<br/>
신갈동, 영덕동, 구갈동, 상갈동, 보라동, 기흥동, 서농동, 구성동, 마북동, 동백동, 상하동, 보정동, 지곡동, 공세동, 고매동, 서농동, 서천동, 언남동, 청덕동, 중동, 상하동, 동천동, 고기동
<br/>
​처인구<br/>
포곡읍, 모현읍, 이동읍, 남사읍, 원삼면, 백암면, 중앙동, 역삼동, 동부동, 김량장동, 삼가동, 유방동, 고림동, 역북동, 운학동, 해곡동

</p>
                    </div>

                   
             </section>
             </div>
           {/* 모바일 */}
             
          </section>    


 <div className='md:mt-0 mt-3' />
      <section className='flex flex-col justify-center items-center'>
      
      <div className='flex flex-col'>
      <div className='flex md:flex-row flex-col md:justify-between items-start lg:w-[1100px] w-screen'>
          <div className='lg:px-0 px-3 flex flex-col h-[40px] justify-end'>
            <div className='md:text-start font-semibold text-center text-[20px] md:text-[#474b53] text-[#000000]'>군포시 출장 지역</div>
            <hr className="mt-1 h-0.5 md:bg-[#474b53] bg-[#474b53] border-t-0 opacity-100 w-[140px] dark:opacity-50"/>
          </div>
           <div className='flex flex-col md:h-[40px] h-[20px] justify-end'>
          <hr className="mt-1 h-0.5 hidden md:block border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 w-[960px]"/>
       </div>
       </div>
       </div>

       <div className='md:w-[1100px] w-full md:px-0 px-1 flex md:flex-col flex-row justify-center items-start md:gap-7 gap-1 rounded-md'>
           {/* pc */}
           <section className='md:block hidden flex flex-col justify-center items-center'>
                <div className='md:w-[1100px] w-full flex flex-col'>
                  {/* <hr className="my-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50"/> */}
                  <div className='md:mt-7' />
                  <div className='flex flex-row gap-30'>
                    <div className='flex flex-col gap-1.5 lg:text-start text-center text-[15px]'>
                  
                    <div className='text-[#999999] text-[15px]'><p>
당정동. 당동.부곡동. 산본동. 금정동. 대야미동. 
둔대동. 속달동. 도마교동

</p></div>
                  </div>
                   
                 
                  </div>  
                  <div className='mt-7' />
                  <hr className="my-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50"/>
                </div>
             </section>
             <div className='md:mt-7' />
   
           {/* pc */}


           {/* 모바일 */}
            <section className='md:hidden block w-full'>
                
                    <div className='mt-1' />
                    <div className='text-[#999999] text-[16px]'><p>
당정동. 당동.부곡동. 산본동. 금정동. 대야미동. 
둔대동. 속달동. 도마교동

</p></div>

                   
             </section>
             </div>
           {/* 모바일 */}
             
          </section>       

 <div className='md:mt-0 mt-3' />
      <section className='flex flex-col justify-center items-center'>
      
      <div className='flex flex-col'>
      <div className='flex md:flex-row flex-col md:justify-between items-start lg:w-[1100px] w-screen'>
          <div className='lg:px-0 px-3 flex flex-col h-[40px] justify-end'>
            <div className='md:text-start font-semibold text-center text-[20px] md:text-[#474b53] text-[#000000]'>과천시 출장 지역</div>
            <hr className="mt-1 h-0.5 md:bg-[#474b53] bg-[#474b53] border-t-0 opacity-100 w-[140px] dark:opacity-50"/>
          </div>
           <div className='flex flex-col md:h-[40px] h-[20px] justify-end'>
          <hr className="mt-1 h-0.5 hidden md:block border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 w-[960px]"/>
       </div>
       </div>
       </div>

       <div className='md:w-[1100px] w-full md:px-0 px-1 flex md:flex-col flex-row justify-center items-start md:gap-7 gap-1 rounded-md'>
           {/* pc */}
           <section className='md:block hidden flex flex-col justify-center items-center'>
                <div className='md:w-[1100px] w-full flex flex-col'>
                  {/* <hr className="my-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50"/> */}
                  <div className='md:mt-7' />
                  <div className='flex flex-row gap-30'>
                    <div className='flex flex-col gap-1.5 lg:text-start text-center text-[15px]'>
                  
                    <div className='text-[#999999] text-[15px]'><p>
중앙동. 관문동. 갈현동. 원문동. 부림동. 과천동
주암동. 문원동. 막계동
</p></div>
                  </div>
                   
                 
                  </div>  
                  <div className='mt-7' />
                  <hr className="my-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50"/>
                </div>
             </section>
             <div className='md:mt-7' />
   
           {/* pc */}


           {/* 모바일 */}
            <section className='md:hidden block w-full'>
                
                    <div className='mt-1' />
                    <div className='text-[#999999] text-[16px]'><p>
중앙동. 관문동. 갈현동. 원문동. 부림동. 과천동
주암동. 문원동. 막계동
</p></div>

                   
             </section>
             </div>
           {/* 모바일 */}
             
          </section>             


 <div className='md:mt-0 mt-3' />
         <section className='flex flex-col justify-center items-center'>
      
      <div className='flex flex-col'>
      <div className='flex md:flex-row flex-col md:justify-between items-start lg:w-[1100px] w-screen'>
          <div className='lg:px-0 px-3 flex flex-col h-[40px] justify-end'>
            <div className='md:text-start font-semibold text-center text-[20px] md:text-[#474b53] text-[#000000]'>의왕시 출장 지역</div>
            <hr className="mt-1 h-0.5 md:bg-[#474b53] bg-[#474b53] border-t-0 opacity-100 w-[140px] dark:opacity-50"/>
          </div>
           <div className='flex flex-col md:h-[40px] h-[20px] justify-end'>
          <hr className="mt-1 h-0.5 hidden md:block border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 w-[960px]"/>
       </div>
       </div>
       </div>

       <div className='md:w-[1100px] w-full md:px-0 px-1 flex md:flex-col flex-row justify-center items-start md:gap-7 gap-1 rounded-md'>
           {/* pc */}
           <section className='md:block hidden flex flex-col justify-center items-center'>
                <div className='md:w-[1100px] w-full flex flex-col'>
                  {/* <hr className="my-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50"/> */}
                  <div className='md:mt-7' />
                  <div className='flex flex-row gap-30'>
                    <div className='flex flex-col gap-1.5 lg:text-start text-center text-[15px]'>
                  
                    <div className='text-[#999999] text-[15px]'><p>
고천동. 왕곡동. 오전동. 삼동, 
이동. 월암동, 초평동. 오전동. 
내손동. 포일동. 청계동. 학의동. 포일동
</p></div>
                  </div>
                   
                 
                  </div>  
                  <div className='mt-7' />
                  <hr className="my-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50"/>
                </div>
             </section>
             <div className='md:mt-7' />
   
           {/* pc */}


           {/* 모바일 */}
            <section className='md:hidden block w-full'>
                
                    <div className='mt-1' />
                    <div className='text-[#999999] text-[16px]'><p>
고천동. 왕곡동. 오전동. 삼동, 
이동. 월암동, 초평동. 오전동. 
내손동. 포일동. 청계동. 학의동. 포일동
</p></div>

                   
             </section>
             </div>
           {/* 모바일 */}
             
          </section>  
          </div> 

          <div className='flex flex-col h-[40px] justify-end'>
          <hr className="mt-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 md:w-[1100px] w-full"/>
          <div className='md:mt-10 mt-3' />
          <div className='text-center md:text-[18px] text-[14px]' onClick={() => { widths ? setWidths(false) : setWidths(true)}}>{widths === false ? "출장 지역 더보기" : "닫기"} &nbsp;</div>
          </div>   
          <div>                            
    </div>
    </div>
    </div>
  )
}

export default Question
