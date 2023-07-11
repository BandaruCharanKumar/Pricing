import React from "react";

export default function Nav() {
  return (
    <>
      <nav class=" text-[#40ccb3] flex justify-between items-center bg-[#f3f4f6]  py-4 px-8">
        <div class="flex items-center">
          <a href="https://www.getfreebird.app/" target="_blank" rel="noopener noreferrer">
            <span class=" text-xl font-semibold">FreeBird</span>
          </a>
        </div>
        <div class=" text-lg font-semibold">Pricing</div>
        <div class=" text-lg font-semibold">
          <a href="https://api.whatsapp.com/send?phone=+919640833338&amp;text=Hello%20there!%20I%20Need%20some%20help%20regarding%20the%20pricing%20of%20FreeBird!" target="_blank" rel="noopener noreferrer">Contact</a>
        </div>
      </nav>
    </>
  )
}

// export default function Nav() {
//   return (
//     <>
//       <nav className="flex flex-row justify-between h-14 bg-[#F3F4F6] text-[#40CCB3] font-semibold items-center px-10 text-xl">
//         <a href="https://www.getfreebird.app/" target="_b lank" rel="noopener noreferrer">FreeBird</a>
//         <p> Pricing</p>
//         <a href="https://api.whatsapp.com/send?phone=+919640833338&text=Hello%20there!%20I%20Need%20some%20help%20regarding%20the%20pricing%20of%20FreeBird!" target="_blank" rel="noopener noreferrer">Contact</a>
//       </nav>
//     </>
//   );
// }
