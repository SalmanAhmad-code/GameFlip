import React from 'react'
import { Box } from '@mui/material'

export default function About() {
    return (
        <Box id="about" className="press-start-2p-regular Section2 h-fit relative bg-cover bg-center w-full flex flex-col items-center justify-center text-center p-8">
            <h1 className="mt-3 pb-8 w-fit border-b-2 border-white text-3xl md:text-5xl font-bold text-[#FFEA20]">About</h1>
            <Box className="Section2-Content h-full relative flex flex-col justify-between items-center">
                <p className="text-white text-sm md:text-2xl self-start mt-8 w-full md:w-3/5">
                    GameFlip is your ultimate companion for mastering the world of gaming. Whether you're a casual gamer or a competitive pro, our AI-driven flashcards are designed to help you sharpen your skills, enhance your knowledge, and discover new aspects of your favorite games.
                </p>
                <p className="text-white text-sm md:text-2xl self-end mt-4 md:mt-8 w-full md:w-3/5">
                    With GameFlip, learning becomes a game in itself. Our platform curates and delivers personalized flashcards that cover everything from game mechanics and strategies to hidden lore and trivia. Whether you're preparing for an in-game challenge or just looking to expand your gaming horizons, GameFlip has you covered.
                </p>
                <p className="text-white text-sm md:text-xl mt-4 md:mt-8 w-full md:w-3/5">
                    Join us on our mission to transform the way gamers learn and connect. Level up your gaming experience with GameFlip!
                </p>
                <button className="h-10 w-full md:w-96 bg-gray-200 cursor-pointer text-xs md:text-sm flex justify-center items-center border-r-[6px] border-r-gray-300 border-b-[6px] border-b-gray-500 hover:border-r-4 hover:border-b-4 transition-transform duration-300 ease-in-out mt-8">
                    <a href="#nav" className="flex-grow px-4 text-xs focus:outline-none text-center cursor-pointer">
                        Join waitlist
                    </a>
                </button>
            </Box>
        </Box>
    )
}
