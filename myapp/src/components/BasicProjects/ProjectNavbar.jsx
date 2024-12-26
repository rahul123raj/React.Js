import React from 'react'
import './pNavbar.css'
import { NavLink } from 'react-router-dom'

const ProjectNavbar = () => {
  return (
    <>
    <div className="p-navbar">
        <div className="container">
            <div className="header">Projects</div>
            <ul>
                <li><NavLink to="/">
                    HOME</NavLink></li>
                <li><NavLink to='/generateotp'>GenerateOtp</NavLink></li>
                <li><NavLink to='/changecolor'>ChangeColor</NavLink></li>
                <li><NavLink to='/changecolor2'>changecolor2</NavLink></li>
                <li><NavLink to='/volume'>Volume</NavLink></li>
                <li><NavLink to='/daynightmode'>Daynightmode</NavLink></li>
                <li><NavLink to='/digitalclock'>DigitalClock</NavLink></li>
                <li><NavLink to='/calculator'>Calculator</NavLink></li>
                <li><a href="">LOGOUT</a></li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default ProjectNavbar