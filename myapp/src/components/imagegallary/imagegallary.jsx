import './imagegallary.css'
// import images from '/home/rahul/Desktop/React/myapp/src/images/tiger-2535888_1920.jpg'
import images from '../../images/tiger-2535888_1920.jpg'

function ImageGallary(){
    let imgurl = 'https://cdn.pixabay.com/photo/2024/02/18/15/59/sea-8581529_640.jpg'
return(
    <>
    <div className='img'>
        <img src={imgurl} alt="" height={200} width={300} />
        <img src={imgurl} alt="" height={200} width={300} />
        <img src={imgurl} alt="" height={200} width={300} />
        <img src={imgurl} alt="" height={200} width={300} />
        <img src={imgurl} alt="" height={200} width={300} />
        <img src={imgurl} alt="" height={200} width={300} />
        <img src={images} alt="" height={200} width={300} />

    </div>
    </>
)
}

export default ImageGallary