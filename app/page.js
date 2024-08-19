'use client'

import Image from "next/image";
import WaitList_Forum from "./components/WaitList-Forum";
import { Box, Button, Typography } from "@mui/material";
import Plans_And_Pricing from "./components/Plans_And_Pricing";
import Features from "./components/Features";
import AnimatedBgHome from "./components/AnimatedBgHome";
import WaitlistCount from "./components/Wait_List_Count";
import Link from "next/link";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import CreatorsSection from "./components/CreatorsSection";

export default function Home() {
  return (
    <Box className="transition-transform">
      {/* Section 1 */}
      <Box id="home" className="press-start-2p-regular h-[100vh] HeroSection relative bg-cover bg-center w-full flex flex-col items-center justify-center">
        <AnimatedBgHome />
        <img className="mt-6" src="/text2.png" width={900} height={300} alt="Welcome To GameFlip" />
        {/* <WaitList_Forum /> */}
        {/* <WaitlistCount/> */}
        <Box className="z-40 text-center flex flex-col justify-center items-center">
          <p className="text-white mb-4 p-4 bg-black bg-opacity-50">Game-Flip: Take your gaming knowledge to the next level.</p>
          <SignedIn>
            <Link href='/generate' passHref>
              <button className="h-10 w-96 bg-gray-200 cursor-pointer text-sm flex justify-center items-center border-r-[6px] border-r-gray-300 border-b-[6px] border-b-gray-500 hover:border-r-4 hover:border-b-4 transition-transform"><p className="flex-grow px-4 text-xs focus:outline-none text-center cursor-pointer pointer-events-none">Get Started</p></button>
            </Link>
          </SignedIn>
          <SignedOut>
            <Link href='/sign-in' passHref>
              <button className="h-10 w-96 bg-gray-200 cursor-pointer text-sm flex justify-center items-center border-r-[6px] border-r-gray-300 border-b-[6px] border-b-gray-500 hover:border-r-4 hover:border-b-4 transition-transform"><p className="flex-grow px-4 text-xs focus:outline-none text-center cursor-pointer pointer-events-none">Get Started</p></button>
            </Link>
          </SignedOut>
        </Box>
      </Box>
      {/* Section 2 */}
      <Features />
      {/* Section 3 */}
      <CreatorsSection/>
      {/* Section 4 */}
      <Plans_And_Pricing />
    </Box>
  );
}
