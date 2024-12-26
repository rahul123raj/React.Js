import React, { useState } from 'react'

const Volume = () => {
    let [count, setcount] = useState(0)
    let changevalue = (e) =>{
        setcount(e.target.value)
    }
   return (
    <>
    <div className="volume">
        <div className="container">
            <div><input type="range" name="" id="" onChange={changevalue} value={count} /></div>
            <h4>volume : </h4>
        <div>{count}</div>

        </div>
    </div>
    </>
  )
}

export default Volume