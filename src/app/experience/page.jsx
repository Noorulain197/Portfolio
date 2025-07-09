import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'

function Experience() {
  return (
    <div className="bg-white w-full min-h-screen">
      <div className="bg-gradient-to-br from-white via-purple-200 to-purple-900 w-full min-h-screen flex items-center justify-center px-4">
        
        <div className="w-[1000px] bg-white rounded-xl shadow-lg px-6 sm:px-10 py-12 text-gray-800">
          {/* Heading */}
          <div>
            <h1 className="text-[40px] sm:text-[50px] font-extrabold text-center sm:text-left">
              Experience<span className="text-purple-700">.</span>
            </h1>
          </div>

          {/* Body Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
            
            {/* LEFT LIST - Headings */}
            <div>
              <ul className="font-bold text-gray-600 space-y-2">
                <li>Built <span className="text-purple-700">Responsive</span> Web Applications</li>
                <li>Integrated Backend <span className="text-purple-700">APIs</span></li>
                <li>Handled User <span className="text-purple-700">Authentication</span></li>
                <li>Worked with MongoDB <span className="text-purple-700">Databases</span></li>
                <li>Deployed <span className="text-purple-700">Full-Stack</span> Projects</li>
              </ul>
            </div>

            {/* RIGHT LIST - Details with Icons */}
            <div>
              <ul className="font-semibold text-gray-600 space-y-4">
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-green-600 mt-1" />
                  Created <span className="text-purple-700">&nbsp;mobile-friendly UIs</span> using React & Tailwind.
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-green-600 mt-1" />
                  Connected frontend with <span className="text-purple-700">&nbsp;Express APIs</span>.
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-green-600 mt-1" />
                  Set up <span className="text-purple-700">&nbsp;login/signup</span> using Firebase Auth.
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-green-600 mt-1" />
                  <span className="text-purple-700">Managed data</span> using MongoDB & Mongoose.
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-green-600 mt-1" />
                  Hosted apps on <span className="text-purple-700">&nbsp;Vercel & Google Cloud</span>.
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
