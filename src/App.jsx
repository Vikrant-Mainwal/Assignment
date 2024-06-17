import { useState } from 'react'
import Navbar from './component/Navbar/Navbar'
import Footer from './component/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home/Home'

function App() {

  return (
    <>
    <div className='app'>
     <Navbar/>

      <Home/>

    </div>
    <Footer/>
    </>
  )
}

export default App
