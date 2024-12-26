import React, { useRef } from 'react'

const Changecolor2 = () => {
    let inputfield = useRef()
    let h1ref = useRef()
    let mainref = useRef()

    let applyColor = () =>{
        console.log(inputfield.current.value)
        let apply = inputfield.current.value
        // mainref.current.style.backgroundColor = apply
        h1ref.current.style.color = apply
    }
    let boxref = useRef()
    let colorinput = useRef()
    let heading = useRef()
    let boxColor = () =>{
        let apply = colorinput.current.value
        boxref.current.style.cssText = ` box-shadow: inset 0px 0px 50px ${apply};`
        heading.current.style.color = apply
    }
  return (
    <>
    <div className="colorChange2" ref={mainref}>
        <div className="header"><h1>change color 2</h1></div>
        <div className="container">
        <h1 ref={h1ref}>color</h1>
            <input ref={inputfield} type="color" name="" id="" onChange={applyColor} />
        </div>

        <div className="box"ref={boxref} >
            <h1 ref={heading}>color</h1>
            <input type="color" name="" id="" ref={colorinput}  onChange={boxColor}/>
        </div>
    </div>
    </>
  )
}

export default Changecolor2