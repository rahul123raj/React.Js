import React from 'react'
import { NavLink } from 'react-router-dom'

const Quiznavbar = () => {
  return (
    <>
    <div className="quiz-header">quizes</div>
    <ul>
        <li><NavLink to='/'>home</NavLink></li>
        <li><NavLink to='/sciencequiz'>sciencequiz</NavLink></li>
    </ul>
    </>
  )
}

export default Quiznavbar