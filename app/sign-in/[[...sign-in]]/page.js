import { SignIn } from "@clerk/nextjs";
import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material";
import Link from "next/link";

export default function signUpPage() {
    return (
        <div className="flex h-screen flex-col items-center justify-center">
            <SignIn />
        </div>
    )
}