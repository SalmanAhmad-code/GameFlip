import React from 'react'
import { Box } from '@mui/material'
import AnimatedBg from './AnimatedBg'

export default function Plans_And_Pricing() {
    return (
        <Box id="plans" className="mt-8 h-fit relative bg-cover bg-center w-full flex flex-col items-center justify-center text-center p-8">
            <div class="max-w-lg md:max-w-2xl mx-auto mb-10 md:mb-14 text-center flex flex-col justify-center items-center">
                <h1 class="text-3xl md:text-4xl font-semibold mb-4 md:mb-6 lg:text-5xl flex flex-col md:flex-row text-white">
                    <span class="text-blue-400 dark:text-[#FFEA20] press-start-2p-regular">Flexible&#160;</span> <span className='press-start-2p-regular'>Plans</span>
                </h1>
                <p class="text-base md:text-xl text-gray-500 dark:text-gray-300 font-medium">
                    Choose a plan that works best for you and your team.
                </p>
            </div>
            <div class="flex flex-col justify-between items-center lg:flex-row lg:items-start">
                <div class="z-40 w-full flex-1 mt-8 p-8 order-2 bg-white shadow-xl sm:w-96 lg:w-full lg:order-1 lg:rounded-r-none">
                    <div class="mb-7 pb-7 flex items-center border-b border-gray-300">
                        <img src="https://res.cloudinary.com/williamsondesign/abstract-1.jpg" alt="" class="rounded-3xl w-20 h-20" />
                        <div class="ml-5">
                            <span class="block text-2xl font-semibold">Newbie</span>
                            <span><span class="font-medium text-gray-500 text-xl align-top">$&thinsp;</span><span class="text-3xl font-bold">10 </span></span><span class="text-gray-500 font-medium">/ month</span>
                        </div>
                    </div>
                    <p className='mb-4 pb-4 border-b border-gray-300'>Best option if you are new to the gaming realm.</p>
                    <ul class="mb-7 font-medium text-gray-500 text-xl">
                        <li class="flex mb-2">
                            <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                            <span class="ml-3">Individual configuration</span>
                        </li>
                        <li class="flex mb-2">
                            <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                            <span class="ml-3">No setup, or hidden fees</span>
                        </li>
                        <li class="flex mb-2">
                            <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                            <span class="ml-3">Team size: <span class="text-black">1 Gamer</span></span>
                        </li>
                        <li class="flex mb-2">
                            <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                            <span class="ml-3">Premium support: <span class="text-black">6 months</span></span>
                        </li>
                        <li class="flex mb-2">
                            <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                            <span class="ml-3">Free updates: <span class="text-black">6 months</span></span>
                        </li>
                    </ul>
                    <a href="#/" class="flex justify-center items-center bg-indigo-600 rounded-xl py-5 px-4 text-center text-white text-xl">
                        Choose Plan
                        <img src="https://res.cloudinary.com/williamsondesign/arrow-right.svg" class="ml-2" />
                    </a>
                </div>

                <div class="z-40 w-full flex-1 p-8 order-1 shadow-xl bg-gray-800 text-gray-300 sm:w-96 lg:w-full lg:order-2 lg:mt-0">
                    <div class="mb-8 pb-8 flex items-center border-b border-gray-600">
                        <img src="https://res.cloudinary.com/williamsondesign/abstract-2.jpg" alt="" class="rounded-3xl w-20 h-20" />
                        <div class="ml-5">
                            <span class="block text-3xl font-semibold text-white">Rookie</span>
                            <span><span class="font-medium text-xl align-top">$&thinsp;</span><span class="text-3xl font-bold text-white">25 </span></span><span class="font-medium">/ month</span>
                        </div>
                    </div>
                    <p className='mb-4 pb-4 border-b border-gray-300'>Relevent for multiple gamers affordable and conventient</p>
                    <ul class="mb-10 font-medium text-xl">
                        <li class="flex mb-2">
                            <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                            <span class="ml-3">Individual configuration</span>
                        </li>
                        <li class="flex mb-2">
                            <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                            <span class="ml-3">No setup, or hidden fees</span>
                        </li>
                        <li class="flex mb-2">
                            <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                            <span class="ml-3">Team size: <span class="text-white">10 Gamer</span></span>
                        </li>
                        <li class="flex mb-2">
                            <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                            <span class="ml-3">Premium support: <span class="text-white">24 months</span></span>
                        </li>
                        <li class="flex mb-2">
                            <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                            <span class="ml-3">Free updates: <span class="text-white">24 months</span></span>
                        </li>
                    </ul>
                    <a href="#/" class="flex justify-center items-center bg-indigo-600 rounded-xl py-6 px-4 text-center text-white text-2xl">
                        Choose Plan
                        <img src="https://res.cloudinary.com/williamsondesign/arrow-right.svg" class="ml-2" />
                    </a>
                </div>

                <div class="z-40 w-full flex-1 mt-8 p-8 order-3 bg-white shadow-xl sm:w-96 lg:w-full lg:order-3 lg:rounded-l-none">
                    <div class="mb-7 pb-7 flex items-center border-b border-gray-300">
                        <img src="https://res.cloudinary.com/williamsondesign/abstract-3.jpg" alt="" class="rounded-3xl w-20 h-20" />
                        <div class="ml-5">
                            <span class="block text-2xl font-semibold">Pro</span>
                            <span><span class="font-medium text-gray-500 text-xl align-top">$&thinsp;</span><span class="text-3xl font-bold">50 </span></span><span class="text-gray-500 font-medium">/ month</span>
                        </div>
                    </div>
                    <p className='mb-4 pb-4 border-b border-gray-300'>Best for large gamming groups, with a huge server</p>
                    <ul class="mb-7 font-medium text-gray-500 text-xl">
                        <li class="flex mb-2">
                            <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                            <span class="ml-3">Individual configuration</span>
                        </li>
                        <li class="flex mb-2">
                            <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                            <span class="ml-3">No setup, or hidden fees</span>
                        </li>
                        <li class="flex mb-2">
                            <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                            <span class="ml-3">Team size: <span class="text-black">100+ Gamer</span></span>
                        </li>
                        <li class="flex mb-2">
                            <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                            <span class="ml-3">Premium support: <span class="text-black">36 months</span></span>
                        </li>
                        <li class="flex mb-2">
                            <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                            <span class="ml-3">Free updates: <span class="text-black">36 months</span></span>
                        </li>
                    </ul>
                    <a href="#/" class="flex justify-center items-center bg-indigo-600 rounded-xl py-5 px-4 text-center text-white text-xl">
                        Choose Plan
                        <img src="https://res.cloudinary.com/williamsondesign/arrow-right.svg" class="ml-2" />
                    </a>
                </div>

            </div>
            <AnimatedBg/>
        </Box>
    )
}
