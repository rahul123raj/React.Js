import React, { useState } from 'react'
import Students from './Students'

const ToggleTable = () => {
    let [bool,setBool] = useState(true)

    let toggleTable = () =>{
        setBool(!bool)
    }
  return (
    <div>
        <button onClick={toggleTable}>
                studentsdetails
        </button>

        <div>{bool ? '' : <Students/>}</div>
    </div>
  )
}

export default ToggleTable