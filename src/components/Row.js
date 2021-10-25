import React, { useEffect, useState } from 'react'
import '../index.css'
import axios from '../axios'

const Row = props => {
  const { title, fetchUrl, isLargeRow } = props

  const baseURL = 'https://image.tmdb.org/t/p/original/'

  const [movies, setmovies] = useState([])

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
  return (
    <div className='text-white m-5'>
      <h2 className='text-2xl ml-10 m-0'>{title}</h2>
      <div className='row_posters flex overflow-y-hidden overflow-x-scroll p-2'>
        {movies.map(movie => {
          return (
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                className={`row_poster hover:scale-110 hover:opacity-100 ${isLargeRow &&
                  'row_posterLarge'}`}
                id={movie.id}
                src={`${baseURL}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
          )
        })}
      </div>
    </div>
  )
}

export default Row
