import React, { useState } from 'react'
import insect from '../../../images/birds-6305827_1920.jpg'

const ToggleImage = () => {
    let [img,setImage]= useState(true)

    let toggleimage = ()=>{
        setImage(!img)
    }
  return (
    <>
    <div className="container">
        <button onClick={toggleimage}>show img</button>

        <div>
            {img ? '' : <><img src={insect} alt='' /></>}
        </div>
    </div>

    </>
  )
}

export default ToggleImage