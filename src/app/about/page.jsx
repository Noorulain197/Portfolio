import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiFillMessage } from 'react-icons/ai'
import { FaHandsClapping, FaStar } from 'react-icons/fa6'
import Footer from '../footer/page'

function About() {
    return (
        <>
        <div className="bg-white w-full min-h-screen mt-8">
            <div className="bg-gradient-to-br from-white via-purple-200 to-purple-900 w-full min-h-screen flex items-center justify-center px-4">
                <div className="w-[1000px] mt-[50px] bg-white rounded-xl shadow-lg px-6 sm:px-10 py-[50px] mb-8 text-gray-800">

                    {/* HEADER */}
                    <header className="bg-white shadow grid grid-cols-1 sm:grid-cols-3 items-center gap-4 py-4">
                        {/* Logo */}
                        <div className="flex justify-center sm:justify-start">
                            <h1 className="text-3xl font-extrabold">
                                Noo
                                <span className="text-purple-700 font-bold">RF</span>OLIO
                                <span className="text-purple-700 text-4xl">.</span>
                            </h1>
                        </div>

                        {/* Nav */}
                        <div className="flex justify-center">
                            <ul className="flex gap-6 font-bold text-gray-500 text-lg">
                                <Link href="/"><li className="text-purple-700">Home</li></Link>
                                <Link href="/projects"><li>Projects</li></Link>
                                <Link href="/about"><li>About</li></Link>
                            </ul>
                        </div>

                        {/* Message Icon */}
                        <div className="flex justify-center sm:justify-end text-4xl text-purple-600">
                            <AiFillMessage />
                        </div>
                    </header>

                    {/* BODY */}
                    <div className="mt-10">
                        <h1 className="text-[40px] sm:text-[50px] text-gray-800 font-extrabold leading-tight">
                            About me
                            <span className="text-purple-900">.</span>
                        </h1>
                        <p className="font-semibold text-gray-500 my-4">
                            Developing beautiful and functional websites is what I love doing, and that's why I give my all in every new challenge.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                            {/* My Stack */}
                            <div>
                                <span className='font-extrabold text-lg'>My Stack.</span>
                                <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 bg-gray-100 p-4 m-4 rounded-2xl'>
                                    {[
                                        "Tech Stack",
                                        "What I Work",
                                        "Technologies I Use",
                                        "Web Tools",
                                        "Development Stack"
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-2 bg-black text-white p-2 rounded-md text-[12px]">
                                            <FaStar className="text-amber-400" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* My Special Place */}
                            <div>
                                <span className='font-extrabold text-lg'>My Special Place.</span>
                                <div className='bg-gray-100 p-4 m-4 rounded-2xl flex justify-center items-center shadow'>
                                    <Image
                                        src='/map.png'
                                        alt='My Map'
                                        width={300}
                                        height={200}
                                        className="rounded-xl border border-purple-400"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default About
