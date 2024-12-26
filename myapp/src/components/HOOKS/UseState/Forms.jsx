import React, { useState } from 'react'
import './forms.css'
const Forms = () => {

    let [fnm,setFnm] = useState('')
    let [fname,setFname]= useState('')

    let [lnm,setlnm] = useState('')
    let [lname,setLname] =useState('')


    let handleFnm = (e) =>{
        setFnm(e.target.value)
    }

    let handlelnm = (e) =>{
        setlnm(e.target.value)
    }

    let handleSubmit = (e) =>{
        e.preventDefault()
        setFname(fnm)
        setLname(lnm)

        setFnm('')
        setlnm('')
    }
  return (
    <>
        <div className="usestate-form">
        <div className="container">
            <form onSubmit={handleSubmit} action="">
                <input type="text" placeholder='Enter First Name' onChange={handleFnm} value={fnm}/>
                <input type="text" placeholder='Enter last Name' onChange={handlelnm} value={lnm}/>

                <button>Submit</button>
                {/* <h2>{fnm} {lnm}</h2> */}

                <h2>{fname} {lname}</h2>
            </form>
        </div>
    </div>
    </>
  )
}

export default Forms