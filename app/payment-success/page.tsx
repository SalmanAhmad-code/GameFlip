import React from "react";
import AnimatedBg from "../components/AnimatedBg";

export default function PaymentSuccess({
  searchParams: { amount },
}: {
  searchParams: { amount: string };
}) {
  return (
    <main className="h-screen relative w-full flex justify-center items-center ">
      <div className="w-1/2 flex flex-col justify-center items-center h-auto text-white bg-black bg-opacity-50 p-8 border-2 border-white">
        <div className="w-full">
          <h1 className="text-4xl font-extrabold mb-2">Thank you!</h1>
          <p className="text-2xl mb-4">For purchasing Pro Package</p>
          <div className="bg-white p-2 rounded-md text-black mt-5 text-4xl font-bold">
            ${amount}
          </div>
        </div>
        <a href="/generate" className="pt-4 hover:underline text-center">continue generating flashcards.</a>
      </div>
      <AnimatedBg />
    </main>
  );
}