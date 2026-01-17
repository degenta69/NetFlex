import React, { useEffect, useState } from 'react'
import axios from '../axios'
import MovieItem from './Movieitem'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'
import toast from 'react-hot-toast'
import SkeletonRow from './SkeletonRow'
import { Fragment } from 'react'
import { XIcon } from '@heroicons/react/solid'

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([])
  const [trailerUrl, setTrailerUrl] = useState('')
  const [loading, setLoading] = useState(true)
  const [isOpen, setIsOpen] = useState(false)

  const baseURL = 'https://image.tmdb.org/t/p/original/'

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const request = await axios.get(fetchUrl)
        setMovies(request.data.results)
      } catch (error) {
        toast.error('Failed to load movies')
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [fetchUrl])

  const handleTrailer = async (movie) => {
    if (trailerUrl) {
      setTrailerUrl('')
      setIsOpen(false)
    } else {
      toast.loading('Searching for trailer...', { id: 'trailerSearch' })
      try {
        const url = await movieTrailer(movie?.name || movie?.title || movie?.original_name || '')
        toast.dismiss('trailerSearch')

        if (url) {
          const urlParams = new URLSearchParams(new URL(url).search)
          const videoId = urlParams.get('v')
          if (videoId) {
            setTrailerUrl(videoId)
            setIsOpen(true)
          } else {
            toast.error('Trailer ID not found')
          }
        } else {
          toast.error('No trailer found for this movie')
        }
      } catch (error) {
        toast.dismiss('trailerSearch')
        toast.error('Could not find trailer')
      }
    }
  }

  const closeVal = () => {
    setIsOpen(false)
    setTrailerUrl('')
  }

  if (loading) return <SkeletonRow />

  return (
    <div className='text-white ml-5 my-5'>
      <h2 className='text-2xl font-bold mb-2'>{title}</h2>

      <div className='flex overflow-y-hidden overflow-x-scroll p-4 no-scrollbar space-x-4'>
        {movies.map(movie => (
          ((isLargeRow && movie.poster_path) ||
            (!isLargeRow && movie.backdrop_path)) && (
            <MovieItem
              key={movie.id}
              movie={movie}
              isLargeRow={isLargeRow}
              baseURL={baseURL}
              onTrailerClick={handleTrailer}
            />
          )
        ))}
      </div>

      {/* Inline Trailer Player */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${trailerUrl ? 'max-h-[500px] opacity-100 py-4' : 'max-h-0 opacity-0 py-0'}`}
      >
        {trailerUrl && (
          <div className="relative w-full max-w-screen-xl mx-auto px-4">
            {/* Close Button */}
            <button
              onClick={closeVal}
              className="absolute -top-4 right-6 z-10 bg-[#181818] text-white p-2 rounded-full hover:bg-[#282828] transition border border-gray-600/50"
              aria-label="Close trailer"
            >
              <XIcon className="h-5 w-5" />
            </button>

            <YouTube
              videoId={trailerUrl}
              opts={{
                height: '390',
                width: '100%',
                playerVars: {
                  autoplay: 1,
                  modestbranding: 1,
                  rel: 0,
                },
              }}
              onEnd={closeVal}
              className="w-full aspect-video shadow-[0_0_50px_rgba(229,9,20,0.15)] rounded-lg overflow-hidden border border-[#282c2d]"
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default Row
