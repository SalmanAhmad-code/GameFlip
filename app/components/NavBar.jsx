import Image from "next/image";
import React from "react";
import MenuIcon from '@mui/icons-material/Menu'; 

export default function NavBar() {
    return (

        <div className="press-start-2p-regular h-20 bg-[#151515] w-full flex flex-row justify-evenly items-center">
            <div className="h-full bg-[#151515] w-full 2xl:w-[80vw] flex flex-row justify-evenly items-center">
                <ul className="flex flex-row justify-center items-center gap-3 ml-4">
                    <li>
                        <Image src={'/logo.png'} width={40} height={40} alt="logo" className="rounded-full"/>
                    </li>
                    <li>
                        <a href="/" style={{
                            transitionDuration: "500ms !important"
                        }} className="text-[#F3F8FF] font-semibold text-2xl hover:text-[#FFEA20]">GameFlip</a>
                    </li>
                </ul>
                <ul className="hidden !font-mono xl:flex flex-row justify-evenly items-center gap-8 text-[#F3F8FF] text-xl">
                    <li>
                        <a href="/" className="hover:text-[#06D001] transition-all">Home</a>
                    </li>
                    <li>
                        <a href="/" className="hover:text-[#06D001] transition-all">About</a>
                    </li>
                    <li>
                        <a href="/" className="hover:text-[#06D001] transition-all">Contact</a>
                    </li>
                </ul>

                <ul className="hidden xl:block w-1/4">
                    <li className="flex flex-row justify-center items-center">
                        <span className="w-screen md:w-full h-10 bg-gray-200 border border-gray-300 text-sm flex p-2">
                            <input type="search" name="serch" placeholder="Search"
                                className="bg-[#F3F8FF] flex-grow px-4 text-xs focus:outline-none" />
                        </span>
                        <span className="w-screen md:w-fit h-10 bg-gray-200 cursor-pointer border border-gray-300 text-sm flex"><i className="fas fa-search m-3 mr-5 text-lg text-gray-700 w-4 h-4" /></span>
                    </li>
                </ul>

                <MenuIcon className=" !text-white text-4xl"/>

                <ul className=" w-48 ml-10 flex flex-row justify-center items-center gap-2 mr-4">
                    <li><button className="pixelBtn">Login</button></li>
                    {/* <p className="text-[#F3F8FF] cursor-default"> / </p> */}
                    <li><button className="pixelBtn">Signup</button></li>
                </ul>
            </div>
        </div>
    )
}