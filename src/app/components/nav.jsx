import React from "react";
import Image from "next/image";

export default function Nav() {
  return (
    <>
      <nav class=" text-[#40ccb3] flex justify-between items-center bg-[#f3f4f6]  py-4 px-8">
        <div class="flex items-center gap-1">
        <a href="https://www.getfreebird.app/" target="_blank" rel="noopener noreferrer">
          <Image src='/assets/freebird.jpg' height='50' width='50' alt="Image"/></a>
        </div>
        <div class=" text-3xl  font-semibold">Pricing</div>
          <button className="bg-white hover:bg-sky-100 font-semibold py-2 px-2  border border-[#40ccb3] rounded-lg shadow"><a href="https://api.whatsapp.com/send?phone=+919640833338&amp;text=Hello%20there!%20I%20Need%20some%20help%20regarding%20the%20pricing%20of%20FreeBird!" target="_blank" rel="noopener noreferrer"className="text-l text-[#40ccb3] font-semibold">Contact us</a></button>
      </nav>
    </>
  )
}


