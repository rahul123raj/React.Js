import React from 'react'

const Child = (props) => {
    console.log(props)
    let {count , data } = props
  return (
    <div>
        <h1>Recieved the data</h1>
        <h2>my fav number is {count}</h2>
        <h3>{data} to React,js</h3>
    </div>
  )
}

export default Child