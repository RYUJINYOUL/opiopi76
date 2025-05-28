"use client"
import React, { useState } from 'react'

import Gallery from '@/components/Gallery';

const page = () => {
    let slides = [
   "/Image/mosa9YMcJV.jpeg", 
   "/Image/mosaFMHhSO.jpeg", 
   "/Image/mosaFQYq4H.jpeg", 
   "/Image/mosafWHFc4-e1766d44fadb.jpeg", 
   "/Image/mosafWHFc4.jpeg", 
   "/Image/mosagBGFaE.jpeg",
    "/Image/mosaH3Bxat.jpeg",
    "/Image/mosalwJHkk.jpeg",
       "/Image/mosaNWtT6F.jpeg",
        "/Image/mosaQQBIXe.jpeg", 
        "/Image/mosaS2zDwX.jpeg", 
        "/Image/mosaTzcwTk.jpeg", 
        "/Image/mosaWYNM2n.jpeg",
         "/Image/mosaXv3Mv6.jpeg",
   ]
 

return (
    <div className='w-screen bg-[#000000C9] h-screen flex items-center justify-center'>
      <Gallery images={slides} />
   </div>
   
 )
}

export default page;