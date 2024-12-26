import React, { useEffect, useState } from 'react'

const DigitalClock = () => {

    let [dateTime, setdateTime] = useState({})
        // setInterval(()=>{
        //     let dateObj = new Date()
        //     // console.log(dateObj.toLocaleTimeString())
    
        //     setdateTime({
                
        //         date : dateObj.toLocaleDateString(),
        //         time : dateObj.toLocaleTimeString()
        //     })
    
        //     // let [date,time ] = dateTime
        // },1000)

        useEffect(()=>{
                let dateObj = new Date()
                // console.log(dateObj.toLocaleTimeString())
        
                setdateTime({
                    
                    date : dateObj.toLocaleDateString(),
                    time : dateObj.toLocaleTimeString()
                })},[dateTime])
    
        let {date,time} = dateTime

  return (
    <>
    <div className="digitalclock">
        <div className="header">DigitalClock</div>
        <div className="container">
            <h1>{time}-----  {date}</h1>
        </div>
    </div>
    </>
  )
}

export default DigitalClock