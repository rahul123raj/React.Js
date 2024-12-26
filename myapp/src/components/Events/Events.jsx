import React from 'react'
import './events.css'

const Events = () => {
    let printname = ()=>{
        let fnm = "dinga"
        let lnm = 'raja'
        alert(`My name is ${fnm} ${lnm}`)
    }

    let print = (res)=>{
        alert(res)
    }

    let calculateAge = (dob)=>{
        if(typeof(dob)==='number'){
            let date = new Date()
            let age = date.getFullYear() - dob
            alert( age )
        }else{
            alert('it is not a number')
        }
    }

    let generateOtp = ()=>{

        let otp = Math.floor((Math.random()*9000)+1000)
        console.log(otp)

        alert(`your four digit otp is ${otp}`)
    }

    let personName = [
        {
            fnm : 'Dinga',
            lnm : 'Raja',
            yop : 2024,
            deg : 'B.Tech',
            sttream : 'CSE',
            place : 'Bengaluru',
            dob : 1992
    
        },
        {
            fnm : 'Dingi',
            lnm : 'Rani',
            yop : 2024,
            deg : 'B.Tech',
            sttream : 'CSE',
            place : 'hyderbad',
            dob : 1995
        },
    
        {
            fnm : 'Sohan',
            lnm : 'kumar',
            yop : 2024,
            deg : 'B.Tech',
            sttream : 'CSE',
            place : 'Bengaluru',
            dob : 1934
        },
        {
            fnm : 'Mohan',
            lnm : 'lal',
            yop : 2024,
            deg : 'B.Tech',
            sttream : 'CSE',
            place : 'Bengaluru',
            dob : 1999
        }
    ]

    let printInfo = (name,lname,degree,native,yyyy)=>{
        let dateobj = new Date()
        let dob = dateobj.getFullYear() - yyyy
        // console.log(yyyy)
        // console.log(dob)
        alert(`${name} ${lname} have ${degree} degree and belongs to ${native} and age is ${dob}`)
    }
  return (
    <>
        <div className="events">
            <button onClick={()=>alert('hello')}>
                click here
            </button>
            <hr />
            <button onClick={printname}>
                click here name
            </button>

            <hr />
            <button onClick={()=>{return print('Good Morning')}}>msg</button>
            <hr />
            <button onClick={()=>{return calculateAge(2003)}}>age</button>
            <hr />
            <button onClick={()=>{return generateOtp()}}>OTP</button>

            <div>
                {
                    personName.map((elem,i)=>{
                        let {fnm,lnm,yop,deg,sttream,place,dob} = elem
                        return(
                            <div className="inside">
                                <div>{i +1}</div>
                                <div>{fnm}</div>
                                <div>{lnm}</div>
                                <div>{deg}</div>
                                <div>{sttream}</div>
                                <div>{yop}</div>
                                <div>{place}</div>
                                <div>{dob}</div>
                                <div><button onClick={()=>{return printInfo(fnm,lnm,deg,place,dob)}}>view</button></div>
                            </div>
                        )
                    })
                }
            </div>


        </div>  
    </>
  )
}

export default Events