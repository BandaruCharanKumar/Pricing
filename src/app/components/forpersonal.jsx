import React,{useEffect} from "react";
export default function ForPersonal({data={}}) {
  const {
    __id='',
    COUNTRY='',
    CURRENCY='',
    USERTYPE='',
    BASEPRICE='',
    PEOPLE='',
    VIEWERS='',
    PLANTYPE='',
    TOTALPRICE='',
    DISCOUNT='',
    DISCOUNTPERCENTAGE='',
    FINALPRICE='',
  } = data

  return <>
 
  <div className="  max-w-[600px] flex flex-col-reverse justify-between gap-8 sm:flex-row sm:m-auto pt-16 ">
    <div className="  max-w-[600px] flex flex-col-reverse justify-between gap-8 sm:flex-row sm:m-auto ">
      <div className="flex justify-center items-center  ">
        <div className=" flex  flex-col w-[300px] h-[440px] bg-[#f3f4f6] rounded-[16px] drop-shadow-lg ">
          <div className="flex flex-row justify-between ">
            <h2 className="ml-5  mt-5 ">FREE</h2>
          </div>
          <div className="flex flex-row">
            <span className="text-[32px] mt-4 ml-5  font-semibold ">Free Forever</span>
          </div>

          <div className="flex flex-col" style={{fontfamily: 'Inter'}}>
            <span className="ml-5 mt-4 mb-2">Features available</span>
            <div className="flex flex-col ">
              <span className="flex ml-4 p-1 text-sm">
                <div className="mt-1  mr-2 ">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" color="green" height="16" width="16" xmlns="http://www.w3.org/2000/svg" style={{color: 'green'}}>
                      <path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"></path>
                      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                  </svg>
                </div>
                Automatic Cloud Backup ♻️</span><span className="flex ml-4 p-1 text-sm "><div className="mt-1  mr-2"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" color="green" height="16" width="16" xmlns="http://www.w3.org/2000/svg" style={{color: 'green'}}>
                  <path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"></path>
                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                </svg>
                </div>
                Upto 5 active loans</span><span className="flex ml-4 p-1 text-sm "><div className="mt-1  mr-2"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" color="green" height="16" width="16" xmlns="http://www.w3.org/2000/svg" style={{color: 'green'}}>
                  <path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"></path>
                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                </svg>
                </div>
                Magical Sync,use in many devices</span><span className="flex ml-4 p-1 text-sm "><div className="mt-1  mr-2"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" color="green" height="16" width="16" xmlns="http://www.w3.org/2000/svg" style={{color: 'green'}}>
                  <path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"></path>
                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                </svg>
                </div>
                Simple, Compound &amp; Flat interest loans</span><span className="flex ml-4 p-1 text-sm "><div className="mt-1  mr-2"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" color="green" height="16" width="16" xmlns="http://www.w3.org/2000/svg" style={{color: 'green'}}>
                  <path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"></path>
                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                </svg>
                </div>
                No Ads, Forever</span><span className="flex ml-4 p-1 text-sm "><div className="mt-1  mr-2"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" color="green" height="16" width="16" xmlns="http://www.w3.org/2000/svg" style={{color: 'green'}}>
                  <path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"></path>
                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                </svg>
                </div>
                Web App coming soon🚀🚀🚀
              </span>
            </div>
          </div>
          <button className="m-auto bg-[#f3f4f6]  border-2 p-2 w-48 border-[#40ccb3] text-[#40ccb3] rounded-[12px]">
          <a href="https://api.whatsapp.com/send?phone=+919640833338&amp;text=Hello%20there!%20I%20am%20interested%20in%20your%20FREE%20Plan%20for%20Personal%20Use.20%Thanks.%20Freebird%20Is%20Awesome!!" target="_blank" rel="noopener noreferrer">Choose Plan</a>
            
          </button>
        </div>
      </div>
    </div>
    <div className="  max-w-[600px] flex flex-col-reverse justify-between gap-8 sm:flex-row sm:m-auto">
      <div className="flex justify-center items-center text-white ">
        <div className=" flex  flex-col w-[320px] h-[490px] bg-[#40ccb3] rounded-[16px] drop-shadow-lg ">
          <div className="flex flex-row justify-between ">
            <h2 className="ml-5  mt-5 ">{PLANTYPE}</h2></div>
          <div className="flex flex-row"><span className="text-[32px] mt-4 ml-5  font-semibold ">{TOTALPRICE} {CURRENCY}</span>
            <span className="mt-7 ml-2 text-[18px]">For Lifetime</span></div>
          <div className="flex flex-col" style={{fontfamily: 'Inter'}}>
            <span className="ml-5 mt-4 mb-2">Features available</span>
            <div className="flex flex-col  ">
              <span className="flex ml-4 p-1 text-sm">
                <div className="mt-1  mr-2 ">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" color="white" height="16" width="16" xmlns="http://www.w3.org/2000/svg" style={{color: 'white'}}>
                    <path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"></path>
                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                  </svg>
                </div>
                Export loans in PDF and Excel Formats</span><span className="flex ml-4 p-1 text-sm "><div className="mt-1  mr-2"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" color="white" height="16" width="16" xmlns="http://www.w3.org/2000/svg" style={{color: 'white'}}>
                  <path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"></path>
                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                </svg>
                </div>
                Upto 4 active Loans🥳</span><span className="flex ml-4 p-1 text-sm "><div className="mt-1  mr-2"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" color="white" height="16" width="16" xmlns="http://www.w3.org/2000/svg" style={{color: 'white'}}>
                  <path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"></path>
                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                </svg>
                </div>
                2 Flat interest loans</span><span className="flex ml-4 p-1 text-sm "><div className="mt-1  mr-2"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" color="white" height="16" width="16" xmlns="http://www.w3.org/2000/svg" style={{color: 'white'}}>
                  <path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"></path>
                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                </svg>
                </div>
                Secure with PIN, TouchID, FaceID🔐</span><span className="flex ml-4 p-1 text-sm "><div className="mt-1  mr-2"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" color="white" height="16" width="16" xmlns="http://www.w3.org/2000/svg" style={{color: 'white'}}>
                  <path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"></path>
                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                </svg>
                </div>
                Image attachment for transaction📎</span><span className="flex ml-4 p-1 text-sm "><div className="mt-1  mr-2"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" color="white" height="16" width="16" xmlns="http://www.w3.org/2000/svg" style={{color: 'white'}}>
                  <path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"></path>
                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                </svg>
                </div>
                Multi Currency Support💸</span><span className="flex ml-4 p-1 text-sm "><div className="mt-1  mr-2"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" color="white" height="16" width="16" xmlns="http://www.w3.org/2000/svg" style={{color: 'white'}}>
                  <path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"></path>
                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                </svg>
                </div>
                Dark Mode Support🌓</span><span className="flex ml-4 p-1 text-sm "><div className="mt-1  mr-2"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" color="white" height="16" width="16" xmlns="http://www.w3.org/2000/svg" style={{color: 'white'}}>
                  <path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"></path>
                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                </svg>
                </div>
                Priority Customer Support🫶</span></div></div><button className="m-auto bg-[#58d3bc]  border-2 p-2 w-48 border-[#40ccb3] rounded-[12px]">
                <a href={`https://api.whatsapp.com/send?phone=+919640833338&amp;text=Hello%20there!%20I%20am%20interested%20in%20your%20${PLANTYPE}%20Plan%20for%20Personal%20Use%20which%20costs%20just%20${TOTALPRICE}%20${CURRENCY}%20with%20a%20super%20Discount%20of%20${DISCOUNTPERCENTAGE}%20Thanks.%20Freebird%20Is%20Awesome!!`} target="_blank" rel="noopener noreferrer">Choose Plan</a>
          </button>
        </div>
      </div>
    </div>
  </div>
  </>
}



