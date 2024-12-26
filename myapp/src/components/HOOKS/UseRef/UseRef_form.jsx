import React, { useRef, useState } from 'react'

const UseRef_form = () => {
    let formData = useRef()
    let h = useRef()
    let [data,setData] = useState()

    let handleSubmit = (e)=>{
        e.preventDefault()
        // let fnm = formData.current[0].value
        // let dob = formData.current[1].value

        let inputData = {
            fnm : formData.current[0],
            dob : formData.current[1]
        }


        let {fnm,dob } = inputData
        let age = new Date().getFullYear() - dob.value

        setData(`${fnm.value} and age is ${age}`)
        console.log(fnm)
        console.log(dob)
        console.log(h.current)

        // formData.current[0].value = ''
        // formData.current[1].value = ''
        fnm.value = ''
        dob.value = ''

    }
  return (
    <>
    <div className="container">
        <form action="" onSubmit={handleSubmit} ref={formData}>
            <input type="text" placeholder='enter name'/>
            <input type="text" placeholder='enter dob'/>
            <button>submit</button>
        <h3 ref={h}>{data}</h3>

        </form>
    </div>

    </>
  )
}

export default UseRef_form