'use client'
import React from 'react'
import { Box } from '@mui/material'
import AnimatedBg from './AnimatedBg'
import { useRouter } from 'next/navigation'

export default function Plans_And_Pricing() {
    const router = useRouter();

    const handleSubmit = (event, amount) => {
        event.preventDefault();
        window.location.href = `/checkout_session?amount=${amount}`;
    }
    return (
        <Box id="plans" className="mt-8 h-fit relative bg-cover bg-center w-full flex flex-col items-center justify-center text-center p-8">
            <div className="max-w-lg md:max-w-2xl mx-auto mb-10 md:mb-14 text-center flex flex-col justify-center items-center">
                <h1 className="text-3xl md:text-4xl font-semibold mb-4 md:mb-6 lg:text-5xl flex flex-col md:flex-row text-gray-400 dark:text-white">
                    <span className="text-blue-400 dark:text-[#FFEA20] press-start-2p-regular">Flexible&#160;</span> <span className='press-start-2p-regular'>Plans</span>
                </h1>
                <p className="text-base md:text-xl text-gray-500 dark:text-gray-300 font-medium">
                    Choose a plan that works best for you and your team.
                </p>
            </div>
            <div className="flex flex-col justify-between items-center lg:flex-row lg:items-start">
                <div className="z-40 w-full flex-1 mt-8 p-8 order-2 bg-white shadow-xl sm:w-96 lg:w-full lg:order-1 lg:rounded-r-none">
                    <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
                        <img src="https://res.cloudinary.com/williamsondesign/abstract-1.jpg" alt="" className="rounded-3xl w-20 h-20" />
                        <div className="ml-5">
                            <span className="block text-2xl font-semibold">Newbie</span>
                            <span><span className="font-medium text-gray-500 text-xl align-top">$&thinsp;</span><span className="text-3xl font-bold">0 </span></span><span className="text-gray-500 font-medium">/ month</span>
                        </div>
                    </div>
                    <p className='mb-4 pb-4 border-b border-gray-300'>Best option if you are new to the gaming realm.<br />&nbsp;</p>
                    <ul className="mb-7 font-medium text-gray-500 text-xl">
                        <li className="flex mb-2">
                            <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                            <span className="ml-3">Individual configuration</span>
                        </li>
                        <li className="flex mb-2">
                            <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                            <span className="ml-3">No setup, or hidden fees</span>
                        </li>
                        <li className="flex mb-2">
                            <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                            <span className="ml-3">Team size: <span className="text-black">1 Gamer</span></span>
                        </li>
                        <li className="flex mb-2">
                            <svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
                            </svg>
                            <span className="ml-3">Premium support: <span className="text-black"></span></span>
                        </li>
                        <li className="flex mb-2">
                            <svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
                            </svg>
                            <span className="ml-3">Free updates: <span className="text-black"></span></span>
                        </li>
                    </ul>
                    <button onClick={() => Router.push('/generate')} className="flex self-center w-full justify-center items-center bg-indigo-600 rounded-xl py-5 px-4 text-center text-white text-xl">
                        Choose Plan
                        <img src="https://res.cloudinary.com/williamsondesign/arrow-right.svg" className="ml-2" />
                    </button>
                </div>

                <div className="z-40 w-full flex-1 mt-8 p-8 order-3 bg-white shadow-xl sm:w-96 lg:w-full lg:order-3 lg:rounded-l-none">
                    <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
                        <img src="https://res.cloudinary.com/williamsondesign/abstract-3.jpg" alt="" className="rounded-3xl w-20 h-20" />
                        <div className="ml-5">
                            <span className="block text-2xl font-semibold">Pro</span>
                            <span><span className="font-medium text-gray-500 text-xl align-top">$&thinsp;</span><span className="text-3xl font-bold">10 </span></span><span className="text-gray-500 font-medium">/ month</span>
                        </div>
                    </div>
                    <p className='mb-4 pb-4 border-b border-gray-300'>Best for large gamming groups, with a huge server</p>
                    <ul className="mb-7 font-medium text-gray-500 text-xl">
                        <li className="flex mb-2">
                            <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                            <span className="ml-3">Individual configuration</span>
                        </li>
                        <li className="flex mb-2">
                            <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                            <span className="ml-3">No setup, or hidden fees</span>
                        </li>
                        <li className="flex mb-2">
                            <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                            <span className="ml-3">Team size: <span className="text-black">100+ Gamer</span></span>
                        </li>
                        <li className="flex mb-2">
                            <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                            <span className="ml-3">Premium support: <span className="text-black">36 months</span></span>
                        </li>
                        <li className="flex mb-2">
                            <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                            <span className="ml-3">Free updates: <span className="text-black">36 months</span></span>
                        </li>
                    </ul>
                    <button onClick={(event) => handleSubmit(event, 10)} className="flex self-center w-full justify-center items-center bg-indigo-600 rounded-xl py-5 px-4 text-center text-white text-xl">
                        Choose Plan
                        <img src="https://res.cloudinary.com/williamsondesign/arrow-right.svg" className="ml-2" />
                    </button>
                </div>

            </div>
            <AnimatedBg />
        </Box>
    )
}
