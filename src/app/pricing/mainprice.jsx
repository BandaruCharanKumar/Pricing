"use client"

import React, { useState } from "react";
import ForPersonal from "../components/forpersonal";
import ForLenders from "../components/forlenders";
import Country from "../components/country";
import axios from "axios";
import { useEffect } from "react";
import RangeSlider from "../components/rangeslider";


export default function MainPrice() {
  const [show, setShow] = useState(true);
  const [country, setCountry] = useState('INDIA');
  const [countryData, setCountryData] = useState([]); 
  // const [cardData, setCardData] = useState({})
  const [data, setData] = useState([])
  const [people, setPeople] = useState(1)

  const getData = () => axios.get('https://sheetlabs.com/FBRD/pricing').then(response => {
    const data = response.data;
    const uniqueCountries = [...new Set(data.map(item => item.COUNTRY))];
    setCountryData(uniqueCountries);
    setData(data)
  })
  useEffect(() => {
    getData();
  }, [])

  const filteredData = (arr) => {
    console.log(arr, 'any')
    return arr.filter((item, index) => {

      return item.PEOPLE === people && item.COUNTRY === country && item.USERTYPE === 'LENDER'
    })[0]

  }

  const filterData = (arr) => {
    console.log(arr, 'any')
    return arr.filter((item, index) => {

      return item.PEOPLE === people && item.COUNTRY === country && item.USERTYPE === 'INDIVIDUAL'
    })[1]

  }

  console.log(country, people)
  return (
    <>
      <div className='md:flex items-center md:gap-20 mb-4 md:w-[100%]'>
        <div className='flex md:justify-end sm:justify-center mt-5 md:w-[65%] sm:w-[100%] '>
          <button type='button' className={`border text-black text-sm ${show ? 'bg-[#40CCB3]' : 'bg-white'} border-2 text-black text-xs border-[#40CCB3]  rounded-l-[20px] px-10 py-2`} onClick={() => { setShow(true) }}>For Lenders </button>
          <button type='button' className={`border text-black  text-sm ${show ? 'bg-white' : 'bg-[#40CCB3]'} border-2  text-black text-xs border-[#40CCB3]  rounded-r-[20px] px-6 py-2`} onClick={() => { setShow(false) }}>For Personal Use </button>
        </div>
        <div className="flex justify-end sm:pr-10  md:pr-20  sm:w-[100%] md:w-[35%]">
          <Country country={countryData} OnChange={(e) => { setCountry(e.target.value) }} />
          {/* {['IND', 'USA', 'KENYA']}  */}
        </div>
      </div>


      <div className="mx-auto mb-24">
        {show ? (<> <div className="flex justify-center items-center">
          <div className="flex flex-col items-center">

            <RangeSlider onChange={(e) => { setPeople(e); }} />

          </div>
        </div><ForLenders data={filteredData(data)} /> </>) : (<ForPersonal data={filterData(data)} />)}
      </div>



    </>
  )
}



