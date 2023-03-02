import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <>
    <div id='contact' className="contact-container">
        <h1>Contact me📞</h1>
        <div className="contact-content">
        <div id='icon' className="phone">
        <i class="fa fa-mobile fa-5x" ></i>
        <h3>Phone</h3>
        <p>9970688862</p>
        </div>
        <div id='icon' className="Linkedin">
        <i class="fa fa-linkedin-square fa-5x" ></i>
        <h3>Linkedin</h3>
        <p>Sushilkumar Chimankar</p>
        </div>
        <div id='icon' className="email">
        <i class="fa fa-envelope-o fa-5x" ></i>
        <h3>Email</h3>
        <p>sushilkumarnomadvlogs@gmail.com</p>
        </div>
        <div id='icon' className="address">
        <i class="fa fa-map-marker fa-5x" ></i>
        <h3>Address</h3>
        <p>Pune</p>
        </div>
        </div>
    </div>
      
    </>
  )
}

export default Contact
