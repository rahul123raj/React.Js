import React from 'react'

import Child from "./Child"

const Parent = () => {
    let num = 100
    let msg = 'welcome'
  return (
    // <div>Parent</div>
    <>
    <h1>sending data to Child component</h1>
    {/* <Child count = {num} data = {msg}/> */}
    

    </>
  )
}

export default Parent