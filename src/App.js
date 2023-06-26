import React from 'react'
import Navbar from './Component/Navbar'
import Homepage from './Component/Homepage'
import Aboutus from './Component/Aboutus'
import { Route, Routes } from 'react-router-dom'
import Blog from './Component/Blog'
import OurService from './Component/OurService'


 function App() {
  return (
    <div className=' bg-orange-400 h-screen w-screen'>
      <Navbar/>
      <Routes>
        <Route  path='/Homepage' element = {<Homepage/>}/>
        <Route  path='/Aboutus' element = {<Aboutus/>}/>
        <Route path='/Blog' element = {<Blog/>}/>
        <Route path = "/OurService" element = {<OurService/>}/>
      </Routes>
   
    </div>
  )
}

export default App
