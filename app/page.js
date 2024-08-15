'use client'

import Image from "next/image";
import WaitList_Forum from "./components/WaitList-Forum";
import AnimatedBg from "./components/AnimatedBg";
import { Box, Button } from "@mui/material";
import Plans_And_Pricing from "./components/Plans_And_Pricing";
import Features from "./components/Features";
import AnimatedBgHome from "./components/AnimatedBgHome";

export default function Home() {
  return (
    <Box>
      {/* Section 1 */}
      <Box id="home" className="press-start-2p-regular h-[90vh] HeroSection relative bg-cover bg-center w-full flex flex-col items-center justify-center">
        <AnimatedBgHome/>
        <Image className="mt-6" src="/text2.png" width={900} height={300} alt="Welcome To GameFlip" />
        <WaitList_Forum />
      </Box>
      {/* Section 2 */}
      <Features />
      {/* Section 3 */}
      <Plans_And_Pricing />
    </Box>
  );
}
