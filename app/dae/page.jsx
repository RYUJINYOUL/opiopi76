"use client"
import React, { useState } from 'react'

import Gallery from '@/components/Gallery';

const page = () => {
    let slides = [
   "/Image/mosa9YMcJV.jpeg", 
   "/Image/mosaFMHhSO.gif", 
   "/Image/mosaFQYq4H.jpeg", 
   "/Image/mosafWHFc4-e1766d44fadb.jpeg", 
   "/Image/mosafWHFc4.jpeg", 
   "/Image/mosagBGFaE.gif",
    "/Image/mosaH3Bxat.gif",
    "/Image/mosalwJHkk.gif",
       "/Image/mosaNWtT6F.jpeg",
        "/Image/mosaQQBIXe.gif", 
        "/Image/mosaS2zDwX.jpeg", 
        "/Image/mosaTzcwTk.gif", 
        "/Image/mosaWYNM2n.gif",
         "/Image/mosaXv3Mv6.gif",
   ]
 

return (
    <div className='w-screen bg-[#000000C9] h-screen flex items-center justify-center'>
      <Gallery images={slides} />
   </div>
   
 )
}

export default page;