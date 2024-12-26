import React from 'react'
import { NavLink } from 'react-router-dom'

const AppNavbar = () => {
  return (
    <>
        <div className="api-header">webpage</div>
        <ul>
            <li><NavLink to='/'>HOME</NavLink></li>
            <li><NavLink to='/shopping'>shopping</NavLink></li>
            <li><NavLink to='/searchmovies'>Movies</NavLink></li>
            <li><a href="">ABOUT</a></li>
            <li><a href="">Contact</a></li>
        </ul>
    </>
  )
}

export default AppNavbar