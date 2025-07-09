'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { AiFillMessage } from 'react-icons/ai'
import { FaHandsClapping, FaStar } from 'react-icons/fa6'
import Footer from '../footer/page'

function Projects() {
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
                        {/* 📸 PROJECT IMAGE GRID */}
<div className="mt-10">
  <h2 className="text-2xl font-bold text-center text-purple-700 mb-6">
    Featured Projects
  </h2>

 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
  {[1, 2, 3, 4].map((num) => (
    <div key={num} className="group relative overflow-hidden rounded-xl shadow-lg">
      <img
        src={`/${num}.png`} // 👈 no "public"
        alt={`Project ${num}`}
        className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-2 text-sm text-center">
        Project {num}
      </div>
    </div>
  ))}
</div>

</div>

{/* 🔗 PROJECT LINKS SECTION */}
<div className="mt-14">
  <h2 className="text-2xl font-bold text-center text-purple-700 mb-6">
    Explore My Projects
  </h2>

  <div className="space-y-6">
    {/* Example Project */}
    <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold text-gray-700 mb-2">Portfolio Website</h3>
      <div className="flex gap-4 text-blue-600 underline">
        <a href="https://ai-assistant-frontend-9du8.vercel.app" target="_blank" rel="noopener noreferrer">
          Live on Vercel
        </a>
        <a href="https://github.com/Noorulain197" target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </div>
    </div>

    {/* Add more projects below this block in the same format */}
    <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold text-gray-700 mb-2">Todo App</h3>
      <div className="flex gap-4 text-blue-600 underline">
        <a href="https://ecommerece-five.vercel.app" target="_blank" rel="noopener noreferrer">
          Live on Vercel
        </a>
        <a href="https://github.com/Noorulain197" target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </div>
    </div>
  </div>
</div>


                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Projects
