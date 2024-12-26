import React, { useState } from 'react'

const GenerateOtp = () => {
    let [fourOTP , setFourotp] = useState(0)
    let generate4otp = () =>{
        let otp = Math.floor(Math.random()*9000 +1000)
        setFourotp(otp)
    }

    let [sixOtp, setSixotp] = useState(0)
    let generate6otp = () =>{
        let otp = Math.floor(Math.random() * 900000 + 100000)
        setSixotp(otp)
    }
  return(
<>

    <div className="generateOtp">
        <div className="header">GenerateOTP</div>

        <div className="four-digit">
            <button onClick={generate4otp}>clickhere</button>
            <h1>{fourOTP}</h1>
        </div>
        <div className="six-digit">
            <button onClick={generate6otp}>click here</button>
            <h1>{sixOtp}</h1>
        </div>
        
    </div>

</>

  )
  
}

export default GenerateOtp