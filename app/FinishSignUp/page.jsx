'use client'
import { useEffect } from 'react';
import { getAuth, isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth';
import { getFirestore, collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { auth, db } from '../firebase';

const FinishSignUp = () => {
    const router = useRouter();

    useEffect(() => {
        const completeSignIn = async () => {
            if (!isSignInWithEmailLink(auth, window.location.href)) {
                alert('Invalid sign-in link. Please try again.');
                return;
            }

            try {
                let email = window.localStorage.getItem('emailForSignIn');
                if (!email) {
                    email = window.prompt('Please provide your email for confirmation');
                }

                if (!email) {
                    alert('Email not provided. Please try again.');
                    return;
                }

                await signInWithEmailLink(auth, email, window.location.href);

                // Check if email already exists in the waitlist
                const q = query(collection(db, 'waitlist'), where('email', '==', email));
                const querySnapshot = await getDocs(q);
                
                if (querySnapshot.empty) {
                    // Add email to the waitlist if it doesn't exist
                    await addDoc(collection(db, 'waitlist'), { email });
                    alert('You have been added to the waitlist!');
                } else {
                    alert('This email is already on the waitlist.');
                }

                router.push('/thank-you'); // Redirect to a thank-you page
            } catch (error) {
                console.error('Error completing sign-in:', error.message);
                alert('Error completing sign-in. Please try again.');
            }
        };

        completeSignIn();
    }, [auth, db, router]);

    return <div>Finishing sign-in...</div>;
};

export default FinishSignUp;
