import React from 'react'
import './project.css'

const Projects = () => {
  return (
    <>
      <div id='pro' className="projects">
        <h1>Projects🏯</h1>
        <div className="project-text">
        <div className="project-1">
            <h2>Gym management website🏆</h2>
            <p>This is my last year college project. This is gym management project where a gym center can manage there gym memeber through online and member can see there profile and progress as well by using this application. I build this application using html, css, javascript, reactjs, nodejs, bootstrap and mongodb</p>
            <p><strong>status</strong>:Present</p>
        </div>
        <div className="project-2">
            <h2>Tution website📱</h2>
            <p>This application I did only practice purpose.this application build according to institutes who want there own website where they can post there daily notices,courses, study material and also can conduct exams.this is only frontend ready website for this application i used html, css, bootsrap and reactjs</p>
            <p><strong>status</strong>:Present</p>
        </div>
        <div className="project-3">
            <h2>Mealmine app🍱</h2>
            <p>This is food finding application. in this application there will be two user one is customer of mess and second is mess who will register at app and daily post their menu and customer will find out near by mess and they can see there menu so they can eat there favourite vegetable curry.in this project i did only registration, login, Profile and onboarding pages by using react native</p>
            <p><strong>status</strong>:Present</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default Projects
