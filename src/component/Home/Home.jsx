import React, { useState } from 'react'
import './Home.css'
import Header from '../Header/Header'
import Main from '../Main/Main'
import DisplayForm from '../DisplayForm/DisplayForm'

const Home = () => {


  return (
    <div>
        <Header/>
        <Main/>
        <DisplayForm/>
    </div>
  )
}

export default Home