import React from 'react'
import './DisplayForm.css'

const DisplayForm = () => {
  return (
    <div className="diplay-form">
        <div className="about-us">
            <h2>About Us</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, nihil consequatur? Quos, odio cupiditate quia voluptates quo architecto repellendus harum debitis tenetur quasi quaerat animi aspernatur, nulla quis eveniet fugit.</p>
        </div>
        <div>
            <input type="text" placeholder='Your Name'/>
            <input type="email" placeholder='Your Email' />
            <input type="number" placeholder='Your Contact Number' />
        </div>
    </div>
  )
}

export default DisplayForm