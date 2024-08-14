'use client'

import Image from "next/image";
import WaitList_Forum from "./components/WaitList-Forum";
import AnimatedBg from "./components/AnimatedBg";

export default function Home() {
  return (
    <div className="w-full h-[80vh] flex flex-col items-center justify-center press-start-2p-regular">
      <Image src="/text2.png" width={900} height={300} alt="Welcome To GameFlip" />
      <WaitList_Forum />
      <AnimatedBg/>
    </div>
  );
}
