'use client'
import React from 'react'
import CheckoutPage from '../components/CheckoutPage';
import convertToSubcurrency from '../lib/convertToSubcurrency';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useSearchParams } from 'next/navigation';

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
    throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function page() {
    const searchParams = useSearchParams();
    const amount = searchParams.get('amount');

    if (!amount || isNaN(amount)) {
        throw new Error("Invalid amount specified");
    }

    return (
        <div className='w-full h-screen flex flex-row justify-center items-center'>
            <div className='w-1/2 h-1/2'>
                <Elements
                    stripe={stripePromise}
                    options={{
                        mode: "payment",
                        amount: convertToSubcurrency(amount),
                        currency: "usd",
                    }}
                >
                    <CheckoutPage amount={amount} />
                </Elements>

            </div>
        </div>
    )
}
