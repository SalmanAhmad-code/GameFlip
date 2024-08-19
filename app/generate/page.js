'use client'
import { useUser } from "@clerk/nextjs";
import { div, Button, Card, CardActionArea, CardContent, Container, Dialog, DialogContent, DialogTitle, DialogContentText, Grid, Paper, TextField, Typography, DialogActions } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { db } from "../firebase";
import { getFirestore, doc, collection, getDoc, setDoc } from "firebase/firestore";
import { writeBatch } from "firebase/firestore";
import '../styles/flip-card.css'
import CardLoader from "../components/CardLoader";

export default function Generate() {
    const { isLoaded, isSignedIn, user } = useUser();
    const [flashcards, setFlashcards] = useState([]);
    const [flipped, setFlipped] = useState(new Array(flashcards.length).fill(false));
    const [text, setText] = useState('');
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const router = useRouter(); // Use useRouter directly here
    const db = getFirestore();
    const [loading, setloading] = useState(false);
    const [cardloading, setCardloading] = useState(false);
    const [saved, setSaved] = useState(false);

    const handleSubmit = async () => {
        event?.preventDefault();
        setCardloading(true);
        try {
            const response = await fetch('api/generate', {
                method: 'POST',
                body: text,
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            const data = await response.json();
            setFlashcards(data);
            setCardloading(false);
        } catch (error) {
            console.error(error);
        }
    };
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const saveFlashcards = async () => {
        setloading(true)
        if (!name) {
            alert('Please enter a name');
            return;
        }

        try {
            const batch = writeBatch(db);
            const userDocRef = doc(db, 'users', user.id);
            const docSnapshot = await getDoc(userDocRef);

            let collections = [];
            if (docSnapshot.exists()) {
                collections = docSnapshot.data().flashcards || [];
            }

            if (collections.find((f) => f.name === name)) {
                alert('Flashcard collection with this name already exists.');
                return;
            }

            collections.push({ name });
            batch.set(userDocRef, { flashcards: collections }, { merge: true });

            const colRef = collection(db, 'users', user.id, name);
            flashcards.forEach((flashcard) => {
                const cardDocRef = doc(colRef);
                batch.set(cardDocRef, flashcard);
            });

            await batch.commit();
            setloading(false);
            setSaved(true);
            handleClose();

        } catch (error) {
            console.error('Error saving flashcards: ', error);
        }
    };

    const handleButtonClick = (buttonText) => {
        setText(buttonText); // Set the textarea value to the button's text
        setIsButtonClicked(true); // Set the button click state to true
    };

    // State to track whether a button was clicked
    const [isButtonClicked, setIsButtonClicked] = useState(false);

    useEffect(() => {
        if (isButtonClicked) {
            handleSubmit();
            setIsButtonClicked(false); // Reset the button click state
        }
    }, [text, isButtonClicked]);


    return (
        <div className="h-fit p-3 mx-0 w-full flex flex-row justify-between items-center">
            <div className="w-[40svw] h-screen shadow-md shadow-neutral-400 dark:shadow-neutral-700 bg-slate-100 dark:bg-neutral-900 rounded-xl flex flex-col items-center self-start">
                <h2 className="my-4 p-4 font-bold text-black dark:text-white text-3xl self-start">
                    Create Flashcards
                </h2>
                <form className="w-full h-fit p-4 scroll-auto overflow-auto">
                    <div className="w-full mb-4 border border-neutral-200 rounded-lg bg-neutral-50 dark:bg-neutral-700 dark:border-neutral-600">
                        <div className="px-4 h-[30vh] py-2 bg-white rounded-t-lg dark:bg-neutral-800">
                            <label for="text" className="sr-only">Your comment</label>
                            <textarea onChange={(e) => setText(e.target.value)} value={text} id="text" rows="4" className="w-full h-full px-0 resize-none text-lg focus-visible:outline-none text-neutral-900 bg-white border-0 dark:bg-neutral-800 focus:ring-0 dark:text-white dark:placeholder-neutral-400" placeholder="Write a comment..." required ></textarea>
                        </div>
                        <div className="flex items-center justify-between px-3 py-2 border-t dark:border-neutral-600">
                            <button onClick={handleSubmit} type="submit" className={`MineBtn ${cardloading ? 'animate-pulse' : ''}`}>
                                Generate Cards
                            </button>
                        </div>
                    </div>
                    <div className="content-start gap-8 flex flex-wrap items-start justify-start">
                        <button className={`py-1 px-3 text-white text-center font-semibold rounded-md bg-[#57A639] hover:bg-[#396C25] border-slate-400 border-2 flex flex-row justify-center items-center gap-3`}
                            onClick={(event) => handleButtonClick('Minecraft Game', event)} type="button">
                            <span>
                                <img className="w-10 h-10 rounded-md" src="https://cdn2.steamgriddb.com/icon/986648642d1a68a3178f6869689cc260.png" alt="minecraft logo" />
                            </span>
                            Minecraft
                        </button>

                        <button className={`py-1 px-3 text-white text-center font-semibold rounded-md bg-[#9147FF] hover:bg-[#4E2689] border-slate-400 border-2 flex flex-row justify-center items-center gap-3`}
                            onClick={(event) => handleButtonClick('Fortnite Game', event)} type="button">
                            <span>
                                <img className="w-10 h-10 rounded-md" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/50859290-1c1e-4314-9701-49186d369fd7/dc6pngr-185676c3-f257-4bf6-8151-624e9aaf8f3e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUwODU5MjkwLTFjMWUtNDMxNC05NzAxLTQ5MTg2ZDM2OWZkN1wvZGM2cG5nci0xODU2NzZjMy1mMjU3LTRiZjYtODE1MS02MjRlOWFhZjhmM2UucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.8_eiHrJVd1Jg1llq4YVtpn1P1Niite1ShBDHv0jVHGk" alt="minecraft logo" />
                            </span>
                            Fortnite
                        </button>

                        <button className={`py-1 px-3 text-white text-center font-semibold rounded-md bg-[#FF5959] hover:bg-[#C14646] border-slate-400 border-2 flex flex-row justify-center items-center gap-3`}
                            onClick={(event) => handleButtonClick('Among Us game', event)} type="button">
                            <span>
                                <img className="w-10 h-10 rounded-md" src="https://static.wikia.nocookie.net/ipod/images/6/63/Among_Us_app_icon.png" alt="minecraft logo" />
                            </span>
                            Among Us
                        </button>

                        <button className={`py-1 px-3 text-white text-center font-semibold rounded-md bg-[#2C2C2C] hover:bg-[#1A1A1A] border-slate-400 border-2 flex flex-row justify-center items-center gap-3`}
                            onClick={(event) => handleButtonClick('Call of duty game', event)} type="button">
                            <span>
                                <img className="w-10 h-10 rounded-md" src="https://static.wikia.nocookie.net/cod_esports_gamepedia_en/images/6/60/Mobile_Game_Cover.png" alt="minecraft logo" />
                            </span>
                            Call of Duty
                        </button>

                        <button className={`py-1 px-3 text-white text-center font-semibold rounded-md bg-[#F99D29] hover:bg-[#C97A1F] border-slate-400 border-2 flex flex-row justify-center items-center gap-3`}
                            onClick={(event) => handleButtonClick('overwatch game', event)} type="button">
                            <span>
                                <img className="w-10 h-10 rounded-md" src="https://cdn.medal.tv/asset/games/overwatch/icon-1689192614913.jpg" alt="minecraft logo" />
                            </span>
                            Overwatch
                        </button>

                        <button className={`py-1 px-3 text-white text-center font-semibold rounded-md bg-[#2C3E50] hover:bg-[#1E2B36] border-slate-400 border-2 flex flex-row justify-center items-center gap-3`}
                            onClick={(event) => handleButtonClick('league of legends game', event)} type="button">
                            <span>
                                <img className="w-10 h-10 rounded-md" src="https://img.tapimg.net/market/images/8d8829331d0ddf02ddf7b17dac47150f.png/appicon" alt="minecraft logo" />
                            </span>
                            League of Legends
                        </button>

                        <button className={`py-1 px-3 text-white text-center font-semibold rounded-md bg-[#FF4654] hover:bg-[#C83440] border-slate-400 border-2 flex flex-row justify-center items-center gap-3`}
                            onClick={(event) => handleButtonClick('valorant game', event)} type="button">
                            <span>
                                <img className="w-10 h-10 rounded-md" src="https://cdn2.steamgriddb.com/icon/191c62d342811d1a0d3d0528ec35cd2d/32/256x256.png" alt="minecraft logo" />
                            </span>
                            Valorant
                        </button>

                        <button className={`py-1 px-3 text-black text-center font-semibold rounded-md bg-[#F4E300] hover:bg-[#CAB300] border-slate-400 border-2 flex flex-row justify-center items-center gap-3`}
                            onClick={(event) => handleButtonClick('cyberpunk 2077 game', event)} type="button">
                            <span>
                                <img className="w-10 h-10 rounded-md" src="https://cdn2.steamgriddb.com/icon/1c215a069a482fd705ba2d9396602a38.ico" alt="minecraft logo" />
                            </span>
                            Cyberpunk 2077
                        </button>

                    </div>
                </form>
            </div>
            {cardloading ?
                (<CardLoader/>) :
                (flashcards.length > 0 && (
                    <div className="max-w-[50vw] w-auto h-screen flex flex-grow flex-col justify-start items-start self-start bg-transparent p-4 text-white">
                        <div className="flex flex-row justify-between items-center w-full">
                            <div className="flex flex-row gap-2 justify-between items-center w-fit">
                                <Typography variant="h4" component="h4" className="mb-10 !font-bold text-black dark:text-white text-3xl self-start">
                                    Flashcards
                                </Typography>
                                <Typography variant="h6" component="h6" className={`mb-10 font-normal text-center text-green-400 ${saved ? 'block' : 'hidden'}`}>Saved!</Typography>
                            </div>
                            <div sx={{ mt: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <button onClick={handleOpen} type="button" className={`MineBtn ${loading ? 'animate-pulse' : ''}`}>Save Flashcards</button>
                            </div>
                        </div>
                        <div className="p-4 content-start gap-8 scroll-auto overflow-auto flex flex-wrap items-center justify-center">
                            {flashcards.map((flashcard, index) => (
                                /* From Uiverse.io by joe-watson-sbf */
                                <div className="flip-card cursor-pointer" key={index}>
                                    <div className="flip-card-inner cursor-pointer">
                                        <div className="flip-card-front p-4">
                                            <p className="title">{flashcard.front}</p>
                                            <p>Hover Me</p>
                                        </div>
                                        <div className="flip-card-back p-4">
                                            <p className="title">{flashcard.back}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>)
                )
            }
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Save Flashcards</DialogTitle>
                <DialogContent>
                    <DialogContentText>Save your flashcards to your profile.</DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Collection Name"
                        type="text"
                        fullWidth
                        value={name}
                        variant="standard"
                        onChange={(e) => setName(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={saveFlashcards}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}