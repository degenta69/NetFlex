import React, { useEffect, useState } from 'react'
import '../index.css'
import axios from '../axios'
import requests from '../requests'

const Banner = () => {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchTrending)
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      )

      return request
    }
    fetchData()
  }, [])

  const truncate = (string, n) => {
    return string.length > n ? string.substr(0, n - 1) + '...' : string
  }

  return (
    <>
      <header
        className='h-96 w-full bg-no-repeat relative text-white bg-cover bg-center object-contain'
        style={{
          backgroundImage: ` url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
          scale: '70'
        }}
      >
        <div className='content ml-8 pt-36 h-48'>
          <h1 className='title pb-2 font-extrabold text-5xl'>
            {movie.original_title ||
              movie.name ||
              movie.original_name ||
              movie.title}
          </h1>
          <div className='buttons'>
            <button className='btn_netflex transform motion-reduce:transform-none transition-all '>
              Play
            </button>
            <button className='btn_netflex transform motion-reduce:transform-none transition-all '>
              Next
            </button>
          </div>
          <h3 className='description text w-auto font-medium max-w-xl h-20'>
            {truncate(`${movie.overview}`, 150)}
          </h3>
        </div>
        <div className='bg-gradient-to-b from-transparent via-transparent to-black w-auto h-48'></div>
      </header>
    </>
  )
}

export default Banner
