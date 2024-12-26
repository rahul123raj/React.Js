import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Quiznavbar from './Quiznavbar'
import Home from './home/Home'
import Sciencequiz from './sciencequiz/Sciencequiz'
import './quiz.css'

const QuizApp = () => {
  return (
    <>
    <div className="quiz">
    <BrowserRouter>
    <div className="quiznavbar">
        <Quiznavbar />
    </div>
    <div className="quizes">
        <Routes>
            <Route element={<Home />} path='/'></Route>
            <Route element={<Sciencequiz />} path='/sciencequiz'></Route>
        </Routes>
    </div>
    </BrowserRouter>
    </div>
    </>
  )
}

export default QuizApp