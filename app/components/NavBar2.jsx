import Image from 'next/image'
import React from 'react'

export default function NavBar2() {
    return (
        <nav
            className="press-start-2p-regular h-20 flex-no-wrap relative flex w-full items-center justify-between bg-[#F3F8FF] py-2 shadow-dark-mild dark:bg-[#151515] lg:flex-wrap lg:justify-start lg:py-4">
            <div className="flex w-full flex-wrap items-center justify-between px-3">
                {/* <!-- Hamburger button for mobile view --> */}
                <button
                    className="block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
                    type="button"
                    data-twe-collapse-init
                    data-twe-target="#navbarSupportedContent1"
                    aria-controls="navbarSupportedContent1"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    {/* <!-- Hamburger icon --> */}
                    <span
                        className="[&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor">
                            <path
                                fill-rule="evenodd"
                                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                                clip-rule="evenodd" />
                        </svg>
                    </span>
                </button>

                {/* <!-- Collapsible navigation container --> */}
                <div
                    className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
                    id="navbarSupportedContent1"
                    data-twe-collapse-item>
                    {/* <!-- Logo --> */}
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
                    }} className="text-[#F3F8FF] font-semibold text-2xl hover:text-[#FFEA20]">GameFlip</a>
                    {/* <!-- Left navigation links --> */}
                    <ul
                        className="ml-3 self-center list-style-none me-auto flex flex-col ps-0 lg:flex-row !text-sm"
                        data-twe-navbar-nav-ref>
                        <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                            {/* <!-- Dashboard link --> */}
                            <a
                                className="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                                href="#"
                                data-twe-nav-link-ref
                            >Dashboard</a>
                        </li>
                        {/* <!-- Team link --> */}
                        <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                            <a
                                className="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                                href="#"
                                data-twe-nav-link-ref
                            >Team</a>
                        </li>
                        {/* <!-- Projects link --> */}
                        <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                            <a
                                className="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                                href="#"
                                data-twe-nav-link-ref
                            >Leaderboard</a>
                        </li>
                    </ul>
                    {/* <!-- Left links --> */}
                </div>

                {/* <!-- Right elements --> */}
                <ul className=" w-48 ml-10 flex flex-row justify-center items-center gap-2 mr-4">
                    <li><button className="pixelBtn">Login</button></li>
                    {/* <p className="text-[#F3F8FF] cursor-default"> / </p> */}
                    <li><button className="pixelBtn">Signup</button></li>
                </ul>
                {/* <!-- Right elements --> */}
            </div>
        </nav>
    )
}
