"use client";
import React from 'react'

export default function Country({ country, OnChange }) {
  return (
    <div className=" items-center md:ml-auto">
      <select id="country" className=" m-auto mt-4 p-1 w-[180px] rounded-[28px] border-2 border-[#40ccb3] " onChange={OnChange}>
        {country.map((item) =>
          <option className="rounded-[24px] m-auto text-black " value={item} key={item}>{item}</option>)}
      </select>
    </div>
  )
}







