'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { FaPaperPlane, FaLinkedin, FaGithub } from 'react-icons/fa'
import { SiVercel } from 'react-icons/si'
import Footer from '../footer/page'
import Link from 'next/link'
import { AiFillMessage } from 'react-icons/ai'

export default function MessageSection() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // yahan backend se connect hoga e.g. Nodemailer, FormSubmit, etc.
      console.log(form)
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <>
    <div className="bg-white w-full h-screen">
        <div className="bg-gradient-to-br from-white via-purple-200 to-purple-900 w-full h-screen flex items-center justify-center">
          
            
    <section className="w-full max-w-2xl mx-auto mt-12 p-6 bg-white shadow-xl rounded-2xl">
     <header className="bg-white shadow grid grid-cols-3 items-center">
              <div className="flex items-center">
                <h1 className="text-3xl font-extrabold">
                  Noo<span className="text-purple-700 font-bold">RF</span>OLIO
                  <span className="text-purple-700 text-4xl">.</span>
                </h1>
              </div>
              <div className="flex justify-center items-center">
                
              </div>
              <div className="flex justify-end text-2xl text-purple-600 ">
              <Link href="/"><li className="text-purple-700">Home</li></Link> 
              </div>
            </header>
      <h2 className="text-2xl font-bold text-center mb-6">Send Me a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" value={form.name} onChange={handleChange} required />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" value={form.email} onChange={handleChange} required />
        </div>
        <div>
          <Label htmlFor="subject">Subject</Label>
          <Input id="subject" name="subject" value={form.subject} onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" name="message" rows="5" value={form.message} onChange={handleChange} required />
        </div>
        <Button type="submit" className="w-full flex items-center justify-center gap-2">
          <FaPaperPlane /> Send Message
        </Button>
        {status === 'success' && <p className="text-green-600 text-center">Message sent successfully!</p>}
        {status === 'error' && <p className="text-red-600 text-center">Failed to send. Try again.</p>}
      </form>

      {/* Social Links */}
      <div className="flex justify-center gap-6 mt-8">
        <a
          href="https://www.linkedin.com/in/noorulain-farooq-8325762a7/"  
          target="_blank"  rel="noopener noreferrer"
          className="text-2xl hover:text-blue-600"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Noorulain197"  
          target="_blank"  rel="noopener noreferrer"
          className="text-2xl hover:text-gray-800"
        >
          <FaGithub />
        </a>
        <a
          href="https://vercel.com/noorulain-kashmiris-projects-9043e5f7"  
          target="_blank"  rel="noopener noreferrer"
          className="text-2xl hover:text-black"
        >
          <SiVercel />
        </a>
      </div>
    </section>
    

    </div>
    </div>
    <Footer/>
    </>
    
  )
}
