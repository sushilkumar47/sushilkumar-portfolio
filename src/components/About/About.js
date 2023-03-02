import React from 'react'
import aboutImage from '../../../src/assests/about-Image.png'
import './About.css'

const About = () => {
  return (
    <>
    <div className="about-section">
    <div className="about-image">
        <img src={aboutImage} alt="" />
    </div>
    <div id='education' className="about-text">
        <h1>Education 👨‍🎓</h1>
        <div className='card' id='tenth-edu'>
            <h2>96% in 10th</h2>
            <p>Sant Namdev school Latur</p></div>        
        <div className='card' id='twelth-edu'>
            <h2>62% in 12th</h2>
            <p>chhtrapati shivaji m college Renapur</p></div>        
        <div className='card' id='graduation'>
            <h2>8.7 in last sem</h2>
            <p>vishwakarma university pune </p></div>        
    </div>
    </div>
      
    </>
  )
}

export default About
