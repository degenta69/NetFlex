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
          <div className='buttons flex flex-row'>
            <button className='btn_netflex flex transform motion-reduce:transform-none transition-all '>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-7 my-auto mr-3 w-7'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z'
                  clipRule='evenodd'
                />
              </svg>
              <p>Play</p>
            </button>
            <button className='btn_netflex flex transform motion-reduce:transform-none transition-all '>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-7 my-auto mr-3 w-7'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z'
                  clipRule='evenodd'
                />
              </svg>
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
