import { SignIn, SignUp } from "@clerk/nextjs";
import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material";
import Link from "next/link";

export default function signUpPage() {
    return <Container maxWidth= 'sm' >

        <AppBar position="static" sx={{backgroundColor: "black"}}>
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>GameFlip</Typography>
                <Button color="inherit">
                    <Link href='/sign-in' passHref>
                        Login
                    </Link>
                </Button>

                <Button color="inherit">
                    <Link href='/sign-up' passHref>
                        Sign Up
                    </Link>
                </Button>

            </Toolbar>
        </AppBar>
        <Box 
        display={"flex"}
        flexDirection={"column"}
        alignItems={'center'}
        justifyContent={'center'}
        >
            <Typography variant="h4" py={10} fontWeight={'bold'}>
                Welcome to the realm of gamers!
            </Typography>
            <SignUp />

        </Box>
    </Container>

}