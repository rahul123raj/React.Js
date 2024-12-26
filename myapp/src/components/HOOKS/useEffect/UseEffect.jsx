import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    // useEffect(()=>{
    //     alert('hello')
    // })

    let [count, setCount] = useState(0)
    let increment = ()=>{
        setCount(count+1)
    }

    let [user,setUser] = useState('Dinga')

    let changeName = ()=>{
        setUser('raja')
    }

    useEffect(()=>{
        if(user === 'raja'){
        alert('hiii')
        }
    },[user])
    
  return (
    <>
        <div>useEffect</div>
        <h2>{count}</h2>
        <button onClick={increment}>+</button>
        <h2>{user}</h2>
        <button onClick={changeName}>click here</button>
    </>
  )
}

export default UseEffect