'use client'
import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, query, where, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';

export default function WaitList_Forum() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    // Function to remove duplicate emails from the waitlist
    const removeDuplicates = async () => {
        const waitlistRef = collection(db, 'waitlist');
        const allUsersSnapshot = await getDocs(waitlistRef);
        const emailsMap = new Map();

        allUsersSnapshot.forEach((docSnapshot) => {
            const docData = docSnapshot.data();
            if (emailsMap.has(docData.email)) {
                // If the email already exists, delete the current document
                deleteDoc(doc(db, 'waitlist', docSnapshot.id));
            } else {
                // Otherwise, add the email to the map
                emailsMap.set(docData.email, docSnapshot.id);
            }
        });
    };

    useEffect(() => {
        // Run the removeDuplicates function on component mount
        removeDuplicates();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (loading) return;

        setLoading(true);
        const waitlistRef = collection(db, 'waitlist');

        try {
            const q = query(waitlistRef, where('email', '==', email));
            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                setMessage('You are already on the waitlist!');
            } else {
                const allUsersSnapshot = await getDocs(waitlistRef);
                const count = allUsersSnapshot.size;

                if (count < 100) {
                    await addDoc(waitlistRef, { email });
                    setMessage('You have been added to the waitlist!');
                } else {
                    setMessage('Sorry, the waitlist is full.');
                }
            }
        } catch (error) {
            setMessage('Error adding you to the waitlist. Please try again later.');
        } finally {
            setLoading(false);
            setEmail('');
            removeDuplicates(); // Ensure duplicates are removed after adding
        }
    };

    return (
        <div className="flex flex-col justify-center items-center relative gap-3">
            <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row justify-center items-center relative gap-3">
                <span className="w-full h-10 bg-gray-200 cursor-pointer text-sm flex p-1 border-gray-300">
                    <input 
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="bg-[#F3F8FF] flex-grow px-4 text-xs focus:outline-none" 
                        disabled={loading}
                    />
                </span>
                <button 
                    type='submit' 
                    className={`h-10 w-96 bg-gray-200 cursor-pointer text-sm flex justify-center items-center border-r-[6px] border-r-gray-300 border-b-[6px] border-b-gray-500 hover:border-r-4 hover:border-b-4 transition-transform ${loading ? 'cursor-not-allowed' : ''}`}
                    disabled={loading}
                >
                    <p className="flex-grow px-4 text-xs focus:outline-none text-center cursor-pointer pointer-events-none">
                        {loading ? 'Adding...' : 'Join waitlist'}
                    </p>
                </button>
            </form>
            <p className='text-white shadow-sm shadow-black bg-black bg-opacity-50 w-full text-center'>{message}</p>
        </div>
    )
}
