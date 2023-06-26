import React from 'react'
import { Link } from 'react-router-dom'

 function Navbar() {
  return (
    <div className=' bg-zinc-600 h-16 w-screen'>
        <ul className=' bg-slate-800 h-16 flex justify-around py-8  '>
            <li className=' text-neutral-50 font-bold text-2xl  max-md: text-xs' ><Link to = "/Homepage">Home</Link></li>
            <li className=' text-neutral-50 font-bold text-2xl'><Link to = "/Aboutus">About Us</Link></li>
            <li className=' text-neutral-50 font-bold text-2xl'><Link to = "/Blog">Blog</Link></li>
            <li className=' text-neutral-50 font-bold text-2xl'><Link to = "/OurService">Our Service</Link></li>
        </ul>
    </div>
  )
}

export default Navbar