import { NextResponse } from 'next/server';
import { clerkMiddleware } from '@clerk/nextjs/server';

const clerkPublishableKey = 'pk_test_c3VidGxlLXN0YXJsaW5nLTcyLmNsZXJrLmFjY291bnRzLmRldiQ';
const clerkSecretKey = 'sk_test_7l1MXzXFzQELby2geVAf1aXyumwX67tGRUAh3Lt9fB'; // Replace with your secret key

export default async function middleware(req, ev) {
  return clerkMiddleware({
    publishableKey: clerkPublishableKey,
    secretKey: clerkSecretKey,
  })(req, ev);
}