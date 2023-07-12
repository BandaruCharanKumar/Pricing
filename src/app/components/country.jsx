"use client";
import React from 'react'


export default function Country({country,OnChange}){
  return(
    <div class=" items-center text-black md:ml-auto">
      <select id="country" class="text-black  m-auto mt-4 p-1 w-[180px] rounded-[28px] border-2 border-[#40ccb3]" onChange={OnChange}>
       {country.map((item)=>
       <option class="rounded-[24px] text-black m-auto " value={item}>{item}</option>)} 
        {/* <option class="rounded-[24px] m-auto" value="IN">IN</option>
        <option class="rounded-[24px] m-auto" value="US">US</option>
        <option class="rounded-[24px] m-auto" value="KE">KE</option> */}
      </select>
    </div>
  )
}


  
