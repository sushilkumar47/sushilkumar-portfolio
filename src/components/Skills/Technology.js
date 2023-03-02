import React from 'react'
import html from "../../assests/html.png"
import css from "../../assests/css.png"
import js from "../../assests/js.jpg"
import react from "../../assests/react.png"
import node from "../../assests/node.png"
import mongo from "../../assests/mongo.jpg"
import git from "../../assests/git.png"
import python from "../../assests/python.jpg"
import './skills.css'

const Technology = () => {
  return (
    <>
    <div id='skill' className="skills">
        <h1>Skills I know🏅</h1>
    <div className="images">
        <img  className='imagu' src={html} alt="html" />
        <img className='imagu'  src={css} alt="css" />
        <img className='imagu'  src={js} alt="js" />
        <img className='imagu'  src={react} alt="react" />
        </div>
        <div className="images-1">
        <img className='imagu'  src={node} alt="node" />
        <img className='imagu'  src={mongo} alt="mongo" />
        <img className='imagu'  src={git} alt="git" />
        <img className='imagu'  src={python} alt="python" />
    </div>
    </div>
      
    </>
  )
}

export default Technology
