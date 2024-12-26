import React, { useRef } from 'react'
import './useRef.css'

const Useref_Example1 = () => {

    let content = useRef()
    // console.log(content)

    let handleclick = () =>{
        // console.log(content.current)
        content.current.innerText = 'React js'
    }

    let box = useRef()

    let handleBox = () =>{
    
        box.current.style.background = prompt('enter color')
    }

    let fname = useRef()
    let lname = useRef()
    let fullname = useRef()
    let handleSubmit = (e)=>{
        e.preventDefault()
        console.log(fname.current.value, lname.current.value)
        let fnm=fname.current.value
        let lnm = lname.current.value
        fullname.current.innerText = `My name is ${fnm}  ${lnm}`
    }
  return (
    <>
    <div className="useref_ex">
        <h3 ref={content}>useRef</h3>
        <button onClick={handleclick}>click me</button>
        <hr />
    <div ref={box} className="box">box</div>
    <button onClick={handleBox}>changecolor</button>

    <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter First Name' ref={fname}/>
        <input type="text" placeholder='Enter Last Name' ref={lname}/>

        <button>Submit</button>

        <h2 ref={fullname}></h2>
    </form>
    </div>

    </>
  )
}

export default Useref_Example1