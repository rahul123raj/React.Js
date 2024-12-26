import './cards.css'
import {cardsData} from './data.jsx'

const Cards = ()=>{
    return (
        <>
        <div className="cards">
        <div className="header">
            Animals Gallary
        </div>
        <div className="container">
        {cardsData.map((data)=>{
            return(
                <div className="container-in">
                    <div className="imgage">
                <img src={data.imgUrl} alt="" />
         </div>
         <div className="title"> <p>{data.title}</p></div>
         <div className="des"><p>{data.desc}</p></div>
                </div>
                
            )
        })} 
        </div>
        

        </div>

        </>
    )
}

export default Cards