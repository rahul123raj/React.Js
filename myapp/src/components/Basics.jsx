import './basic.css'
import images from '../images/tiger-2535888_1920.jpg'

let Basics = () =>{
    let num = 100
    let fnm = "Rahul"
    let lnm = "kumar"
    let multiply = num *num
    let x = 2

    let str1 = "madam"
    let res = str1.split('').reverse().join('')
    console.log(res)
    // insertion of image
    let imgurl = 'https://cdn.pixabay.com/photo/2024/01/04/16/36/landscape-8487887_640.jpg'

    let bordersStyle = {
        color : "green",
        background : "yellow"
    }

    // let otp = Math.floor(Math.random()*10000)
    return(
        <>
        <div className='container'>
        {/* static content */}
        <h1 style={{
        color : "green",
        background : "yellow"
    }}>Welcome to basics components!!!!</h1>
        <hr />
        <hr />
        {/* dynamic content */}
        <h1>{num}</h1>

        {/* static and dynamic content */}
        <h1 className='h'>My name is {fnm} {lnm}.</h1>

        {/* dynamic content only */}
        <h3>{num} * {num} = {num * num}</h3>
        <h3>{num} * {num} = {multiply}</h3>
        <h3>{num} <sup>{x}</sup> = {Math.pow(num,x)}</h3>
        <h3>sqrt of {num} = {Math.sqrt(num)}</h3>

        {/* generate OTP */}

        <h2>{(Math.floor(Math.random()*9000))+1000}</h2>

        <h1>to check whether the string is palindrome or not</h1>

        <h1 style={bordersStyle}>
            {
                (str1 === res ) ? <>is palindrome</> : <>not palindrome</>
            }
        </h1>
        <h3>insertion of image</h3>
            <img src={imgurl} alt="" height='200' width={300} />
            <img src="./images/rhinoceros-1834413_1920.jpg" alt="" height='200' width={300} />
            <img src={images} alt="" height='200' width={300} />
        </div>
        </>
    )
}

export default Basics

// export let basics = ()=>{
//     return(
//         <>
//         <h1>bascis1</h1>
//         </>
//     )
// }

// export let basics2 = ()=>{
//     return(
//         <h1>bascics</h1>
//     )
// }