'use client'

import Image from "next/image";
import './globals.css'
import { AiFillMessage } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import { FaHandsClapping, FaStar } from "react-icons/fa6";
import Link from "next/link";
import Experience from "./experience/page";
import Skills from "./skills/page";
import Footer from "./footer/page";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <div className="bg-white w-full h-screen">
        <div className="bg-gradient-to-br from-white via-purple-200 to-purple-900 w-full h-screen flex items-center justify-center">
          <div className="w-[1000px] bg-white rounded-xl shadow-lg px-10 py-[50px] mb-8 text-gray-800">
            
            {/* HEADER */}
            <header className="bg-white shadow grid grid-cols-3 items-center">
              <div className="flex items-center">
                <h1 className="text-3xl font-extrabold">
                  Noo<span className="text-purple-700 font-bold">RF</span>OLIO
                  <span className="text-purple-700 text-4xl">.</span>
                </h1>
              </div>
              <div className="flex justify-center items-center">
                <ul className="flex gap-6 font-bold text-gray-500 text-lg">
                  <Link href="/"><li className="text-purple-700">Home</li></Link>
                  <Link href="/projects"><li>Projects</li></Link>
                  <Link href="/about"><li>About</li></Link>
                </ul>
              </div>
              <div className="flex justify-end text-4xl text-purple-600">
              <Link href='/message'> <AiFillMessage /></Link>  
              </div>
            </header>

            {/* BODY */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-10 py-6">
              {/* LEFT CONTENT */}
              <div>
                <span className="flex items-center text-lg font-semibold mb-2">
                  Hey, I am&nbsp;
                  <span className="text-purple-700 font-bold flex items-center">
                    Noor
                    <FaHandsClapping className="text-yellow-500 ml-2 text-xl" />
                  </span>
                </span>

                <h1 className="text-[50px] text-purple-900 font-extrabold leading-tight">
                  FullStack<br />
                  <span className="text-black">Developer</span>
                </h1>

                <p className="font-semibold text-gray-500 my-4">
                  I am a fullstack developer based in Pakistan.<br />
                  I'll help you build beautiful websites your users will love.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Button className="bg-black text-white p-3 shadow-lg">Get In Touch</Button>
                  <Button className="bg-gray-400 text-black p-3 shadow-lg">Browse Projects</Button>
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="flex justify-center">
                <div className="border-4 border-purple-600 rounded-full p-2">
                  <Image
                    src="/pngegg.png"
                    alt="not found"
                    width={220}
                    height={220}
                    className="bg-gray-100 rounded-full border-2 border-purple-900 p-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <div className="bg-white w-full min-h-screen mt-8">
        <div className="bg-gradient-to-br from-white via-purple-200 to-purple-900 w-full min-h-screen flex items-center justify-center px-4">
          <div className="w-[1000px] mt-[50px] bg-white rounded-xl shadow-lg px-6 sm:px-10 py-[50px] mb-8 text-gray-800">
            <div className="mt-10">
              <h1 className="text-[40px] sm:text-[50px] text-gray-800 font-extrabold leading-tight">
                About me<span className="text-purple-900">.</span>
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

                {/* Map Section */}
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

      {/* OTHER SECTIONS */}
      <Experience />
      <Skills />
      <Footer />
    </>
  );
}
