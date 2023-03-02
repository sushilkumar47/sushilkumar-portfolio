import React from 'react'
import './experience.css'
import expo from '../../assests/expo.png'

const Experience = () => {
  return (
    <>
      <div id='experi' className="expo">
        <h1>Experience🚀</h1>
        <div className="expo-container">
        <div className="expo-text">
        <div id='intern' className="digital-intern">
            <h2>Digital Marketing Intern</h2>
            <p><strong>1 Month at 3W Business</strong></p>
            <p>This is virtual part time internship.during this internship i learn SEO, content writing, lead generation</p>
         </div>
         <div id='intern' className="college-intern">
            <h2>college Internship</h2>
            <p><strong>3 Month at vishwakarma</strong></p>
            <p>During this internship I built graphical user interface using tkinter, pandas, and other python labrary.</p>
         </div>
         </div>
         <div className="expo-image">
          <img src={expo} alt="expo" />
         </div>
         </div>
      </div>
    </>
  )
}

export default Experience
