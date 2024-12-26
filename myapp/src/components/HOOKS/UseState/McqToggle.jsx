import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './mcq.css'


const McqToggle = (data) => {
    let {id,question,answer} = data

    let [bool,setBool] = useState(true)
    let handleBtn = () =>{
        setBool(!bool)
    }

  return (
    <>
                            <div className="toggleansques">
                            <button onClick={handleBtn}>
                                <div id='id'>{id}.{question}</div>
                                <div id='arrow'>{bool ? <KeyboardArrowDownIcon/> : <KeyboardArrowUpIcon/>}</div> 
                            </button>

                            {/* {console.log(bool)} */}

                            <p>{bool ? '' : answer}</p>
                        </div>
    </>
  )
}

export default McqToggle