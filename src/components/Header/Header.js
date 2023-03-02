import React from 'react'
import Typical from 'react-typical'
import myImage from "../../../src/assests/myImage.jpg"
import './Header.css'

const Header = () => {
  return (
    <>
    <div className="header-container">
        <div className="header-content">
            <h1>hy! Am🙎</h1>
            <h2 className='fullName'>Sushilkumar Chimankar</h2>
            <h2>
              I'm a {''} 
              <Typical
              steps={[
                'Full Stack Developer 🙏',1000,
                'Frontend Developer 🏋️‍♀️',1000,
                'Backend Developer 🧑‍💻',1000,
                'Reacr Developer 🔯',1000,
              ]}
              loop={Infinity}
              wrapper="b"
              />
            </h2>
            <p>A passionate Full Stack Software Developer 🚀 having a special interest in Frontend technologies and have knowledge of building Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks.</p>
           <div className="header-payment-container">
           <button  className='hire-1'>Hire me</button>
           {/* <button  className='hire'>View on Linkedin</button>
           <button className='hire-1'>Resume</button> */}
           </div>
        </div>
        <div className="profile-image-container">
          <img src={myImage} alt="" />
          <div className="circle-1"></div>
          <div className="circle-2"></div>
        </div>
    </div>
    </>
      
    
  )
}

export default Header
