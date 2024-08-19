'use client'
import { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase'; // Adjust the path as per your project structure
import styles from '../WaitlistCount.module.css'; // CSS module for styles

export default function WaitlistCount() {
  const [count, setCount] = useState(0);
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'waitlist'), (snapshot) => {
      const newCount = snapshot.size;

      // Determine the animation based on increase or decrease
      if (newCount > count) {
        setAnimationClass(styles.slideUp);
      } else if (newCount < count) {
        setAnimationClass(styles.slideDown);
      }

      setCount(newCount);
    });

    // Clean up the subscription when the component unmounts
    return () => unsub();
  }, [count]);

  // Remove animation class after the animation ends
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationClass('');
    }, 500); // Match this duration with your CSS transition duration

    return () => clearTimeout(timer);
  }, [animationClass]);

    return (
        <div className='w-3/5 h-[20vh] bg-transparent absolute bottom-[-5rem]'>
            <div className='flex justify-center items-center h-full'>
                <h1 className='text-xl md:text-3xl font-bold text-white bg-black opacity-50 p-4 border-4 border-white text-center'>Current Waitlist Count: <span className={`${styles.count} ${animationClass}`}>{count !== null ? count : ''}</span></h1>
            </div>
        </div>
    );
}
