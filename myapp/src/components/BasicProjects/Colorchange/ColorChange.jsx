import { input } from '@testing-library/user-event/dist/cjs/event/input.js'
import React, { useState } from 'react'

const ColorChange = () => {
    let [color , setcolor] = useState('skyblue')
    let [selectcolor, setselectcolor] = useState('black')

    let selectedColor = (e) =>{
        setselectcolor(e.target.value)
        console.log(e.target.value)
    }

    let changeColor = () =>{
        setcolor(selectcolor)
    }
  return (
    <>
    <div className="colorchange" style={{backgroundColor : color}}>
        <div className="header"><h1>Color Change</h1></div>
        <input type="color" name="" id="" onChange={selectedColor}/>
        <button onClick={changeColor}>click here</button>
    </div>
    </>
  )
}

export default ColorChange