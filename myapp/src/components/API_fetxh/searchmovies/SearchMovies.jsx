import React, { useRef, useState } from 'react'

const SearchMovies = () => {
    let [movie, setMovie] = useState([])
    let inputField = useRef()

    let handleSubmit = (e) =>{
        e.preventDefault()
        let inputVal = inputField.current.value
        
        let fetchApi = async () =>{
            let movieUrl = await fetch(`https://www.omdbapi.com/?s=${inputVal}&apikey=b76cb64a`)
            let moviesData = await movieUrl.json()
            setMovie(moviesData.Search)
            console.log(movie)

        }
        fetchApi()
    }
  return (
    <>
        <div className="searchmovies">
        <div className="api-header apifix1">Search movies</div>
        <div className="searchfield">
            <form action="" onSubmit={handleSubmit}>
                <input type="text" ref={inputField} placeholder='movie name' />
                <button >Search</button>
            </form>
        </div>
        <div className="moviecard">
                {
                    movie.map((movieObj)=>{
                        let {Title,Year, Poster} = movieObj

                        return(
                            <>
                            <div className="card">
                                <div className="poster">
                                    <img src={Poster} alt="loading..." />
                                </div>
                                <div className="titl">{Title}</div>
                                <div className="year">{Year}</div>
                            </div>
                            </>
                        )
                    })
                }
                </div>
        </div>        
    </>
  )
}

export default SearchMovies