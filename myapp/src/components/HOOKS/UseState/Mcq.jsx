import React, { useState } from 'react'
import { mcqdata } from './mcqdata'
import './mcq.css'
import McqToggle from './McqToggle'

const Mcq = () => {
    // console.log(mcqdata)
   let [data,setData] =  useState(mcqdata)
//    console.log(data)
let [bool,setBool] = useState(true)
let handleBtn = () =>{
    setBool(!bool)
    }
  return (
    <>
    <div className="mcq">
        {
            data.map((elem) => {
                let {id,question,answer} = elem
                return (
                    <>
                        {/* <div className="toggleansques">
                            <button onClick={handleBtn}>
                                {id},{question}
                            </button>
                            {console.log(bool)}

                            <p>{bool ? '' : answer}</p>
                        </div> */}

                        <McqToggle id={id} question={question} answer={answer} />
                    </>
                )
            })
        }
    </div>
    </>
  )
}

export default Mcq