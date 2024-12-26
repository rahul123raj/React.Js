import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppNavbar from './AppNavbar'
import './apistyle.css'
import Home from './Home'
import Shopping from './Shopping'
import SearchMovies from './searchmovies/SearchMovies'

const ApiApp = () => {
  return (
    <>
        <div className="apiapp">
        <BrowserRouter>
            <div className="apinavbar">
                <AppNavbar />
            </div>
            <div className="webpage">
                <Routes>
                    <Route element={<Home />} path='/'></Route>
                    <Route element={<Shopping />} path='/shopping'></Route>
                    <Route element={<SearchMovies />} path='/searchmovies'></Route>
                </Routes>
            </div>
        </BrowserRouter>
        </div>
    </>
  )
}

export default ApiApp