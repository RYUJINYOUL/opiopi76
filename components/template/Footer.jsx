import Image from "next/image";
import PagePadding from '@/components/PagePadding';

const Footer = () => {


return (
     
    <section>
    
     <section className='md:hidden block'>
          <hr className="h-2.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 md:w-[1000px] w-screen"/>
     </section>       
     <PagePadding>     
     <div className='mt-7'/>
         <div className='md:mb-18 mb-4'>
         <div className='w-full flex flex-col justify-center items-center gap-3'>
   
          <Image
             alt="logo"
             className="object-cover rounded-full"
             width={70}
             height={70}
             src={"/Image/mosaS2zDwX.jpeg"}
           />  
        
             <ul className="list_info flex flex-col items-center">
                 <li className='text-[#000000] text-[15px] font-semibold'>
                   <span className="item_description">조은열쇠</span>
                 </li>
                  <li className='text-[#959595] text-[13px]'>
                   <span className="item_title">대표자 : </span>
                   <span className="item_description">김남국</span>
                 </li>
                 <li className='text-[#959595] text-[13px]'>
                   <span className="item_title">전화번호 : </span>
                   <span className="item_description"><a href="tel:010-3896-0696" className="_callTel">
                      010-2742-7377
                    </a></span>
                 </li>
                 <li className='text-[#959595] text-[13px]'>
                   <span className="item_title">사업자정보 : </span>
                   <span className="item_description">
                        206-20-16388
                    </span>
                 </li>
                 <div className='mt-5'/>  
                 
                 <a href='https://m.search.naver.com/search.naver?query=%EB%8F%84%EC%96%B4%EB%9D%BD+%EB%B9%84%EB%B0%80%EB%B2%88%ED%98%B8+%EB%B6%84%EC%8B%A4+%ED%95%B4%EC%A0%9C%40' target='_blank'>
                 <li className='text-[#959595] p-2 text-[13px] border-1 border-[#9d9d9d]'>
                   <span className="item_title">강대리빙텔 강대고시텔 고시원@ </span>
                 </li>
                 </a>
               </ul>
           </div>
         </div>
          </PagePadding> 
      <div className='mt-7'/>    
      <section className='md:hidden block'>
          <hr className="h-2.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 md:w-[1000px] w-screen"/>
      </section>   
     </section>
 )
}

export default Footer;