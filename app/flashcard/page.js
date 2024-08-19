'use client';

import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useSearchParams } from "next/navigation";
import { Container, Grid, Card, CardActionArea, CardContent, Typography, Box } from "@mui/material";
import '../styles/flip-card.css'

export default function Flashcard() {
    const { isLoaded, isSignedIn, user } = useUser();
    const [flashcards, setFlashcards] = useState([]);
    const [flipped, setFlipped] = useState({});
    
    const searchParams = useSearchParams();
    const search = searchParams.get('id');

    useEffect(() => {
        async function getFlashcard() {
            if (!search || !user) return;

            const colRef = collection(doc(collection(db, 'users'), user.id), search);
            const docs = await getDocs(colRef);
            const flashcards = [];
            docs.forEach((doc) => {
                flashcards.push({ id: doc.id, ...doc.data() });
            });
            setFlashcards(flashcards);
        }
        getFlashcard();
    }, [search, user]);

    const handleCardClick = (id) => {
        setFlipped((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    if (!isLoaded || !isSignedIn) {
        return <></>;
    }

    return (
        <Container maxWidth="xl">
            <div className="my-4 content-start h-fit gap-x-8 gap-y-2 scroll-auto overflow-auto flex flex-wrap items-start justify-start">
                {flashcards.map((flashcard) => (
                    /* From Uiverse.io by joe-watson-sbf */
                    <div className="flip-card cursor-pointer" key={flashcard.id}>
                    <div className="flip-card-inner cursor-pointer">
                        <div className="flip-card-front">
                            <p className="title">{flashcard.front}</p>
                            <p>Hover Me</p>
                        </div>
                        <div className="flip-card-back">
                            <p className="title">{flashcard.back}</p>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </Container>
    );
}
