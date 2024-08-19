import React from 'react'
import '../styles/loaderUIverse.css'

export default function CardLoader() {
    return (
        /* From Uiverse.io by alexruix */
        <div className='salman max-w-[50vw] w-auto h-screen flex flex-grow flex-col !justify-center !items-center bg-transparent p-4 text-white'>
            <div className="loader">
                <div className="box1"></div>
                <div className="box2"></div>
                <div className="box3"></div>
            </div>
            <h2 className='oswald mt-4 font-bold text-xl text-center text-white'>Creating Cards...</h2>
        </div>
    )
}
