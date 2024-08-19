'use client'
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { collection, doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useRouter, useSearchParams } from "next/navigation";
import { Container } from "@mui/material";
import '../styles/flashcards.css'

export default function Flashcards() {
    const { isLoaded, isSignedIn, user } = useUser();
    const [flashcards, setFlashcards] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedFlashcardIndex, setSelectedFlashcardIndex] = useState(null);
    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        async function getFlashcards() {
            if (!user) return;
            const docRef = doc(collection(db, 'users'), user.id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const collections = docSnap.data().flashcards || [];
                setFlashcards(collections.map((flashcard) => ({ ...flashcard, loading: false })));
            } else {
                await setDoc(docRef, { flashcards: [] });
            }
        }
        getFlashcards();
    }, [user, searchParams]);

    if (!isLoaded || !isSignedIn) {
        return <></>;
    }

    const handleCardClick = (id, index) => {
        setFlashcards((prevFlashcards) => {
            prevFlashcards[index].loading = true;
            return [...prevFlashcards];
        });
        router.push(`/flashcard?id=${id}`);
    };

    const handleDeleteClick = (index) => {
        setSelectedFlashcardIndex(index);
        setShowModal(true);
    };

    const handleConfirmDelete = async () => {
        if (selectedFlashcardIndex === null || !user) return;

        try {
            const docRef = doc(collection(db, 'users'), user.id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const collections = docSnap.data().flashcards || [];
                const updatedCollections = collections.filter((_, i) => i !== selectedFlashcardIndex);

                await updateDoc(docRef, { flashcards: updatedCollections });
                setFlashcards(updatedCollections);
                setShowModal(false);
                setSelectedFlashcardIndex(null);
            }
        } catch (error) {
            console.error("Error deleting flashcard: ", error);
        }
    };

    return (
        <Container maxWidth="xl">
            <div className="p-4 content-start gap-8 scroll-auto overflow-auto flex flex-wrap items-center justify-start">
                {flashcards.map((flashcard, index) => (
                    /* From Uiverse.io by SteveBloX */
                    <div key={index} className="flex flex-col justify-center items-center">
                        <div className={`card text-3xl rounded-t-xl border-b-0 border-2 border-gray-400 ${flashcard.loading ? 'animate-pulse' : ''}`} onClick={() => handleCardClick(flashcard.name, index)}>
                            {flashcard.name}
                        </div>
                        <a
                            href="#"
                            className="w-full flex items-center p-3 text-sm font-medium text-red-600 border-t border-gray-200 rounded-b-lg bg-slate-200 dark:border-gray-600 hover:bg-slate-100 dark:bg-gray-900 dark:hover:bg-gray-700 dark:text-red-500 hover:underline"
                            onClick={() => handleDeleteClick(index)}>
                            <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                <path d="M6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Zm11-3h-6a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2Z" />
                            </svg>
                            Delete Card
                        </a>
                    </div>
                ))}
            </div>

            {showModal && (
                <div id="popup-modal" tabIndex="-1" className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
                    <div className="relative p-4 w-full max-w-md max-h-full">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => setShowModal(false)}>
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                            <div className="p-4 md:p-5 text-center">
                                <svg className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this flashcard?</h3>
                                <button type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center" onClick={handleConfirmDelete}>
                                    Yes, I'm sure
                                </button>
                                <button type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={() => setShowModal(false)}>
                                    No, cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Container>
    );
}
