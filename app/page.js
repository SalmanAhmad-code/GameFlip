'use client'

import Image from "next/image";
// import textimg from "../public/text.png"

export default function Home() {
  return (
    <div className="w-full h-[80vh] flex flex-col items-center justify-center press-start-2p-regular">
      <Image src="/text2.png" width={900} height={300} alt="Welcome To GameFlip" className="animate-pulse"/>
      <div className="w-[50%] flex flex-row justify-center items-center relative gap-3">
        <span className="w-full h-10 bg-gray-200 cursor-pointe text-sm flex p-1 border-gray-300">
          <input type="email" name="serch" placeholder="Email"
            className="bg-[#F3F8FF] flex-grow px-4 text-xs focus:outline-none" />
        </span>
        <span className="h-10 w-96 bg-gray-200 cursor-pointer text-sm flex justify-center items-center border-r-[6px] border-r-gray-300 border-b-[6px] border-b-gray-500 hover:border-r-4 hover:border-b-4 transition-all"><p className="flex-grow px-4 text-xs focus:outline-none text-center cursor-pointer pointer-events-none">Join waitlist</p></span>
      </div>
    </div>
  );
}
