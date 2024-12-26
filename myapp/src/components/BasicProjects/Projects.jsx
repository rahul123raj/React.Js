import React from 'react'
import ProjectNavbar from './ProjectNavbar'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import MainPage from './MainPage'
import GenerateOtp from './GenerateOTP/GenerateOtp'
import './pNavbar.css'
import ColorChange from './Colorchange/ColorChange'
import Changecolor2 from './changecolor2/Changecolor2'
import Volume from './Volumerange/Volume'
import Daynightmode from './DayNight/Daynightmode'
import DigitalClock from './digital clock/DigitalClock'
import Calculator from './calculator/Calculator'

const Projects = () => {
  return (
    <>
        <BrowserRouter>
        <div className="projects">
            <div className="projects-navbar">
                <ProjectNavbar />
            </div>
            <div className="project-area">
                <Routes>
                    <Route element={<MainPage />} path="/" />
                    <Route element={<GenerateOtp />} path='/generateotp' />
                    <Route element={<ColorChange />} path='/changecolor' />
                    <Route element={<Changecolor2 />} path='/changecolor2' />
                    <Route element={<Volume />} path='/volume' />
                    <Route element={<Daynightmode />} path='/daynightmode' />
                    <Route element={<DigitalClock />} path='/digitalclock' />
                    <Route element={<Calculator />} path='/calculator' />
                </Routes>
            </div>
        </div>
        </BrowserRouter>
    </>

  )
}

export default Projects