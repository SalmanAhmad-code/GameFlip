'use client'
import React from 'react'
import { useState } from 'react';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase';

export default function WaitList_Forum() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const waitlistRef = collection(db, 'waitlist');

        // Check if the email is already in the waitlist
        const q = query(waitlistRef, where('email', '==', email));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            setMessage('You are already on the waitlist!');
        } else {
            // Get current count of users in the waitlist
            const allUsersSnapshot = await getDocs(waitlistRef);
            const count = allUsersSnapshot.size;

            if (count < 100) {
                try {
                    await addDoc(waitlistRef, { email });
                    setMessage('You have been added to the waitlist!');
                } catch (error) {
                    setMessage('Error adding you to the waitlist. Please try again later.');
                }
            } else {
                setMessage('Sorry, the waitlist is full.');
            }
        }

        setEmail('');
    };
    return (
        <div className="flex flex-col justify-center items-center relative gap-3">
            <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row justify-center items-center relative gap-3">
                <span className="w-full h-10 bg-gray-200 cursor-pointe text-sm flex p-1 border-gray-300">
                    <input type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="bg-[#F3F8FF] flex-grow px-4 text-xs focus:outline-none" />
                </span>
                <button type='submit' className="h-10 w-96 bg-gray-200 cursor-pointer text-sm flex justify-center items-center border-r-[6px] border-r-gray-300 border-b-[6px] border-b-gray-500 hover:border-r-4 hover:border-b-4 transition-transform"><p className="flex-grow px-4 text-xs focus:outline-none text-center cursor-pointer pointer-events-none">Join waitlist</p></button>
            </form>
            <p className='text-white shadow-sm shadow-black bg-black bg-opacity-50 w-full text-center'>{message}</p>
        </div>
    )
}