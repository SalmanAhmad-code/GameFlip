'use client'
import Image from 'next/image'
import React, { useState } from 'react'

export default function NavBar2() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav id='nav'
            className="press-start-2p-regular h-20 flex-no-wrap fixed z-50 top-0 md:relative flex w-full items-center justify-between bg-[#F3F8FF] py-2 shadow-dark-mild dark:bg-[#151515] lg:flex-wrap lg:justify-start lg:py-4">
            <div className="flex w-full flex-wrap items-center justify-between px-3">
                {/* Hamburger button for mobile view */}
                <button
                    className="block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
                    type="button"
                    aria-label="Toggle navigation"
                    onClick={toggleMenu}>
                    {/* Hamburger icon */}
                    <span
                        className="[&>svg]:w-10 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor">
                            <path
                                fillRule="evenodd"
                                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                                clipRule="evenodd" />
                        </svg>
                    </span>
                </button>

                {/* Collapsible navigation container */}
                <div
                    className={`transition-all duration-500 ease-in-out absolute top-20 md:top-0 left-0 w-full bg-[#F3F8FF] dark:bg-[#151515] lg:relative lg:!flex lg:w-auto lg:opacity-100 ${isOpen ? 'h-auto opacity-100 z-50' : 'h-0 opacity-0 lg:h-auto lg:opacity-100'}`}
                    id="navbarSupportedContent1">
                    {/* Logo and main links */}
                    <div className="flex flex-col lg:flex-row lg:items-center p-3 md:p-0">
                        <a
                            className="mb-4 me-5 ms-2 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0"
                            href="#">
                            <Image
                                src={'/logo.png'}
                                height={40}
                                width={40}
                                alt="TE Logo"
                                loading="lazy" />
                        </a>
                        <a href="/" style={{
                            transitionDuration: "500ms !important"
                        }} className="text-[#151515] dark:text-[#F3F8FF] font-semibold text-2xl hover:text-green-500 dark:hover:text-[#FFEA20]">GameFlip</a>
                        {/* Left navigation links */}
                        <ul
                            className="ml-3 self-center list-style-none me-auto flex flex-col lg:flex-row !text-sm"
                            data-twe-navbar-nav-ref>
                            <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                                <a
                                    className="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                                    href="#home"
                                    data-twe-nav-link-ref
                                >Home</a>
                            </li>
                            <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                                <a
                                    className="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                                    href="#features"
                                    data-twe-nav-link-ref
                                >Features</a>
                            </li>
                            <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                                <a
                                    className="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                                    href="#plans"
                                    data-twe-nav-link-ref
                                >Plans</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Right elements */}
                <ul className="w-48 ml-10 flex flex-row justify-center items-center gap-2 mr-4">
                    <li><button className="pixelBtn">Login</button></li>
                    <li><button className="pixelBtn">Signup</button></li>
                </ul>
            </div>
        </nav>
    )
}
