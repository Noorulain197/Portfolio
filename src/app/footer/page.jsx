import React from 'react'

function Footer() {
  return (
    <div>
    {/* Footer Section */}
<footer className="bg-purple-900 text-white mt-12 px-4 py-6">
  <div className="w-full max-w-[1000px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
    
    {/* Left Side */}
    <div className="text-center sm:text-left">
      <h2 className="text-xl font-extrabold">Noorfolio</h2>
      <p className="text-sm text-purple-200">Web Developer & UI Enthusiast</p>
    </div>

    {/* Middle - Email */}
    <div className="text-center">
      <p className="text-sm">
        📩 Email: 
        <a href="mailto:Noorulainfarooq41@gmail.com" className="text-white underline ml-1">
          Noorulainfarooq41@gmail.com
        </a>
      </p>
    </div>

    {/* Right - Copyright */}
    <div className="text-center sm:text-right">
      <p className="text-sm text-purple-300">© {new Date().getFullYear()} Noorfolio. All rights reserved.</p>
    </div>
  </div>
</footer>
</div>
  )
}

export default Footer

