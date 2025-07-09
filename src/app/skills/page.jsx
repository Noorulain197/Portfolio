import React from 'react'

function Skills() {
    return (
        <div className="bg-white w-full h-screen">
            <div className="bg-gradient-to-br from-white via-purple-200 to-purple-900 w-full h-screen flex items-center justify-center">

                <div className="w-[1000px] bg-white rounded-xl shadow-lg px-6 sm:px-10 py-12 text-gray-800">
                    {/* Heading */}
                    <div>
                        <h1 className="text-[40px] sm:text-[50px] font-extrabold text-center sm:text-left">
                            Skills<span className="text-purple-700">.</span>
                        </h1>
                    </div>

                    {/* Body Section */}
                    <div className="grid grid-cols-4 sm:grid-cols-4 gap-2 mt-10">


                        <div>
                            <ul className="font-bold text-gray-500 space-y-2">
                                <li className='text-black font-extrabold'>Web Design</li>
                                <li>UI/UX Design</li>
                                <li>Responsive Design</li>
                                <li>Wireframing</li>
                                <li>User Research</li>
                            </ul>
                        </div>
                        <div>
                            <ul className="font-bold text-gray-600 space-y-2">
                                <li className='text-black font-extrabold'>Frontend</li>
                                <li>Javascript</li>
                                <li>React.JS</li>
                                <li>Next.JS</li>
                                <li>CSS3</li>
                            </ul>
                        </div>
                        <div>
                            <ul className="font-bold text-gray-600 space-y-2">
                                <li className='text-black font-extrabold'>Backend</li>
                                <li>Node.JS</li>
                                <li>MongoDB</li>
                                <li>Express.JS</li>
                                <li>Vercel</li>
                            </ul>
                        </div>
                        <div>
                            <ul className="font-bold text-gray-600 space-y-2">
                                <li className='text-black font-extrabold'>Soft Skills</li>
                                <li>Effective communication</li>
                                <li>Collaboration</li>
                                <li>Commitment</li>
                                <li>Leadership</li>
                            </ul>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Skills