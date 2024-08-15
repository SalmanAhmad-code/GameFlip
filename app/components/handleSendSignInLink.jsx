import { auth } from '../firebase'; // Make sure the path is correct
import { sendSignInLinkToEmail } from 'firebase/auth';

const handleSendSignInLink = async (email) => {
    const actionCodeSettings = {
        url: 'http://localhost:3000/FinishSignUp', // Replace with your production URL
        handleCodeInApp: true,
    };    

    try {
        await sendSignInLinkToEmail(auth, email, actionCodeSettings);
        window.localStorage.setItem('emailForSignIn', email);
        alert('Verification link sent! Please check your email.');
    } catch (error) {
        console.error('Error sending sign-in link:', error.message);
        throw error; // Rethrow the error so it can be caught by the calling function
    }
}

export default handleSendSignInLink;
