import React from 'react'

const Welcome = ()=>{
    return (
        <>
        <h1>Welcome</h1>
        </>
    )
}

const Bye = () => {
    return(
        <>
        <h1>Bye..!</h1>
        </>
    )
}

const ConditionalRendering = () => {
  
    //! statements blocks

    // if(false){
    //     return (<Welcome></Welcome>)
    // }else{
    //     return (<Bye></Bye>)
    // }

    //! turnary operator

    // return ((true) ? <Welcome /> : <Bye />)

    //! logical uperator

    let bool = true;

    return bool && <Welcome /> || <Bye />
}

export default ConditionalRendering