import React, { useState } from 'react'

const Daynightmode = () => {
    let [bool, setbool] = useState(true)
    let handleClick = () =>{
        setbool(!bool)
        console.log(bool)
        let body = document.getElementsByClassName('daynight')
        // console.log(body[0])
        bool ? (body[0].style.backgroundColor = 'black') : body[0].style.backgroundColor = 'white'
        
    }


  return (
    <>
    <div className="daynight">
        <div className="p-header">
            Day Night Mode
        </div>
        <div className="container">
            <button onClick={handleClick} className={bool ? 'day' : 'night'} >Day</button>
        </div>
    </div>
    </>
  )
}

export default Daynightmode