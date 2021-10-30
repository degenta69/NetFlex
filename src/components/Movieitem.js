import React, { useState } from 'react'
// import { Transition } from '@headlessui/react'
import '../index.css'
import MovieDetails from './MovieDetails'
// import YouTube from 'react-youtube'
// import movieTrailer from 'movie-trailer'

const Movieitem = props => {
  const {
    movieTitle,
    isLargeRow,
    movieID,
    movieName,
    backdropPath,
    posterPath
  } = props

  // const [trailer, setTrailer] = useState('')

  const [hover, sethover] = useState(false)

  const baseURL = 'https://image.tmdb.org/t/p/original/'

  const handleTrailer = movie => {
    // console.log(movie)
    // movie.preventDefault()
    // if(trailer){
    //   setTrailer('')
    // }else{
    //   movieTrailer(movieName || movieTitle ||'')
    //   .then((url) => {
    //     const urlParams = new URLSearchParams(new URL(url).search)
    //     setTrailer(urlParams.get('v'));
    //   })
    //   .catch((error) => console.log(error))
    // }
    // console.log(trailer)

    sethover(prev => !prev)
  }

  // const opts = {
  //   height: '500',
  //   width: '100%',
  //   playerVars: {
  //     // https://developers.google.com/youtube/player_parameters
  //     autoplay: 1,
  //     origin: 'http://localhost:3000' ,
  //   },
  // };

  return (
    <>
      {/* <div
        className={`transition-all transform cursor-pointer duration-500 object-contain mr-3 h-56 w-max row-span-5 hover:scale-110 hover:opacity-100 ${isLargeRow &&
          'row_posterLarge'}`}
        style={{
          backgroundImage: `URL(${baseURL}${
            isLargeRow ? posterPath : backdropPath
          })`
        }}
        onClick={handleHover}
        id={movieID}
      > */}
      {/* <Transition
        show={hover}
        enter='transition ease duration-700 transform'
        enterFrom='opacity-0 translate-y-0'
        enterTo='opacity-100 -translate-y-full'
        leave='transition ease duration-1000 transform'
        leaveFrom='opacity-100 translate-y-0'
        leaveTo='opacity-0 -translate-y-full'
      >
        {movieName || movieTitle}
      </Transition> */}
      {hover ? (
        <MovieDetails
          className='flex flex-col'
          movieName={movieName}
          onClick={handleTrailer}
          movieTitle={movieTitle}
        />
      ) : (
        <img
          className={`row_poster w-max object-contain hover:scale-110 hover:opacity-100 ${isLargeRow &&
            'row_posterLarge'}`}
         
          id={movieID}
          onClick={handleTrailer}
          src={`${baseURL}${isLargeRow ? posterPath : backdropPath}`}
          alt={movieName}
        />
      )}
      {/* {trailer && <YouTube className='flex flex-col' videoId={trailer} opts={opts} />} */}
      {/* </div> */}
    </>
  )
}

export default Movieitem
