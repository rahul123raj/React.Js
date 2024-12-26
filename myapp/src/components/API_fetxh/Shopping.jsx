import React, { useEffect, useState } from 'react'

const Shopping = () => {
    let [apiData, setapiData] = useState([])

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then(data => data.json())
        .then(elem => setapiData(elem))
    },[apiData])

    // console.log(apiData)
  return (
    <>
        <div className="api-header apifix1">online shopping</div>
        <div className="cards-container">
            {
                apiData.map((elem)=>{
                    let {id,title,price,description,category,image,rating} = elem
                    let {rate,count} = rating
                    return(
                        <div className="container">
                            <div className="images">
                            <img src={image} alt="" />
                            </div>
                            <div className="content">
                                <p id='title'>{id} ={'>'} {title}</p>
                                <span>{rate}⭐</span><span>{count} reviews</span> 
                                <div className="des">
                                    <p>{category}</p>
                                    <p>{description}</p>
                                </div>
                            </div>
                            <div className="price">
                                <p>${price}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </>
  )
}

export default Shopping