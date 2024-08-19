import { Box } from '@mui/material'
import React from 'react'
import AnimatedBg from './AnimatedBg'
import SalmanCard from './ProfileCards/SalmanCard'
import '../styles/ProfileCard.css'
import RayanCard from './ProfileCards/RayanCard'
import MaryamCard from './ProfileCards/MaraymCard'
import KanikaCard from './ProfileCards/KanikaCard'

export default function CreatorsSection() {
  return (
    <Box id="creators" className="press-start-2p-regular h-[100vh] relative bg-cover bg-center w-full flex flex-col items-center justify-center">
      <AnimatedBg />
      <div className="md:w-2/3 lg:w-1/2 my-12 flex flex-col justify-center items-center">
        <h2 className="press-start-2p-regular my-8 text-3xl font-bold text-blue-400 dark:text-[#FFEA20] md:text-6xl">Creators</h2>
      </div>
      <div className='flex flex-row flex-wrap text-gray-600 dark:text-gray-100 justify-center items-center gap-8'>
        <SalmanCard />
        <RayanCard />
        <MaryamCard />
        <KanikaCard />
      </div>
    </Box>
  )
}
