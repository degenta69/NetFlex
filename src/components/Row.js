import React, { useEffect, useState } from 'react'
import '../index.css'
import axios from '../axios'
// import Movieitem from './Movieitem'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'
// import MovieDetails from './MovieDetails'

const Row = props => {
  const { title, fetchUrl, isLargeRow } = props

  const [trailer, setTrailer] = useState('')
  // const [hover, sethover] = useState(false)
  const [movies, setmovies] = useState([])

  const baseURL = 'https://image.tmdb.org/t/p/original/'


  useEffect(() => {
    try {
      const fetchData = async () => {
        const request = await axios.get(fetchUrl)
        setmovies(request.data.results)
        return request
      }
      fetchData()
    } catch (error) {
      alert(error.message)
      console.log(error)
    }
  }, [fetchUrl])

  const handleTrailer = (movie) => {
    console.log(movie.name)
    // movie.preventDefault()
    if (trailer) {
      setTrailer('')
    } else {
      movieTrailer(movie.name || movie.title || '')
        .then(url => {
          const urlParams = new URLSearchParams(new URL(url).search)
          setTrailer(urlParams.get('v'))
        })
        .catch(error => console.log(error))
    }
    console.log(trailer)
    // sethover(prev => !prev)
  }

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      enablejsapi: 1,
      origin: 'http://localhost:3000',
      modestbranding: 1,

    }
  }

  return (
    <div className='text-white m-5'>
      <h2 className='text-2xl ml-10 m-0'>{title}</h2>
      <div className='row_posters container flex overflow-y-visible overflow-x-scroll p-2'>
        {movies.map(movie => {
          return (
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <>
                {
                  <img
                    className={`row_poster w-max object-contain hover:scale-110 hover:opacity-100 ${isLargeRow &&
                      'row_posterLarge'}`}
                    id={movie.id}
                    onClick={()=>{handleTrailer(movie)}}
                    src={`${baseURL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                    alt={movie.name}
                  />
                }
                {/* <div onClick={handleTrailer}></div>
                <Movieitem
                  isLargeRow={isLargeRow}
                  movieID={movie.id}
                  backdropPath={movie.backdrop_path}
                  posterPath={movie.poster_path}
                  movieName={movie.name}
                /> */}
              </>
            )
          )
        })}
      </div>
        {trailer && (
          <YouTube containerClassName='bg-button_netflex' videoId={trailer} opts={opts} />
        )}
    </div>
  )
}

export default Row
