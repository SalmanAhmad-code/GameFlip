import React from 'react'
import AnimatedBg from './AnimatedBg'

export default function Features() {
    return (
        <div id='features' className="bg-slate-200 dark:bg-gray-700 relative p-4 h-fit">
            <AnimatedBg/>
            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6 flex flex-col justify-center items-center">
                <div className="md:w-2/3 lg:w-1/2 mt-12 text-gray-100 flex flex-col justify-center items-center">
                    <h2 className="press-start-2p-regular my-8 text-3xl font-bold text-blue-400 dark:text-[#FFEA20] md:text-6xl">Features</h2>
                </div>
                <div className="mt-16 grid divide-x divide-y  divide-gray-700 overflow-hidden  rounded-3xl border text-gray-600 border-gray-700 sm:grid-cols-2 lg:grid-cols-3  lg:divide-y-0 xl:grid-cols-3">
                    <div className="group relative bg-slate-100 dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl  hover:shadow-gray-600/10">
                        <div className="relative space-y-8 py-12 p-8">
                            <img src={'/pencil.png'} loading="lazy" width="200" height="200" className="w-12 h-12 text-transparent" />
                            <div className="space-y-2">
                                <h5 className="text-xl font-semibold text-gray-500 dark:text-white transition group-hover:text-secondary">Customized Gaming Flashcards</h5>
                                <p className="text-gray-400 dark:text-gray-300">Create and tailor your own gaming flashcards for a personalized learning experience..</p>
                            </div>
                        </div>
                    </div>
                    <div className="group relative bg-slate-100 dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                        <div className="relative space-y-8 py-12 p-8">
                            <img src={'/quiz.png'} loading="lazy" width="200" height="200" className="w-12 h-12 text-transparent" />
                            <div className="space-y-2">
                                <h5 className="text-xl font-semibold text-gray-500 dark:text-white transition group-hover:text-secondary">Quizzes Based on the Flashcards</h5>
                                <p className="text-gray-400 dark:text-gray-300">Challenge yourself with quizzes generated from your flashcards. Track your progress!</p>
                            </div>
                        </div>
                    </div>
                    <div className="group relative bg-slate-100 dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                        <div className="relative space-y-8 py-12 p-8">
                            <img src={'/trophy.png'} loading="lazy" width="200" height="200" className="w-12 h-12 text-transparent" />
                            <div className="space-y-2">
                                <h5 className="text-xl font-semibold text-gray-500 dark:text-white transition group-hover:text-secondary">Top 10 Leaderboard</h5>
                                <p className="text-gray-400 dark:text-gray-300">Compete with others and see where you rank on the top 10 leaderboard.</p>
                            </div>
                        </div>
                    </div>
                    <div className="group relative bg-slate-100 dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                        <div className="relative space-y-8 py-12 p-8">
                            <img src={'/custo_profile.png'} loading="lazy" width="200" height="200" className="w-12 h-12 text-transparent" />
                            <div className="space-y-2">
                                <h5 className="text-xl font-semibold text-gray-500 dark:text-white transition group-hover:text-secondary">Personalized User Profiles</h5>
                                <p className="text-gray-400 dark:text-gray-300">Customize your profile with avatars, badges, and themes to showcase your gaming persona.</p>
                            </div>
                        </div>
                    </div>
                    <div className="group relative bg-slate-100 dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                        <div className="relative space-y-8 py-12 p-8">
                            <img src={'/secure_payment.png'} loading="lazy" width="200" height="200" className="w-12 h-12 text-transparent" />
                            <div className="space-y-2">
                                <h5 className="text-xl font-semibold text-gray-500 dark:text-white transition group-hover:text-secondary">Secure Payments with Stripe</h5>
                                <p className="text-gray-400 dark:text-gray-300"> Subscribe to premium features with secure payments powered by Stripe.</p>
                            </div>
                        </div>
                    </div>
                    <div className="group relative bg-slate-100 dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                        <div className="relative space-y-8 py-12 p-8">
                            <img src={'/premium.png'} loading="lazy" width="200" height="200" className="w-12 h-12 text-transparent" />
                            <div className="space-y-2">
                                <h5 className="text-xl font-semibold text-gray-500 dark:text-white transition group-hover:text-secondary"> Premium Features & Tiers</h5>
                                <p className="text-gray-400 dark:text-gray-300">Unlock exclusive features with 3 premium tiers. Choose the one that suits you.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
