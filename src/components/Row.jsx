import React, { useEffect, useState } from 'react'
import axios from '../axios'
import MovieItem from './Movieitem'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'
import toast from 'react-hot-toast'
import SkeletonRow from './SkeletonRow'
import { Dialog, Transition } from '@headlessui/react'
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

      {/* Trailer Modal */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeVal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/80" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-black p-1 text-left align-middle shadow-xl transition-all relative">
                  <button
                    onClick={closeVal}
                    className="absolute top-4 right-4 z-50 p-2 bg-gray-900/50 rounded-full hover:bg-gray-700 text-white"
                  >
                    <XIcon className="h-6 w-6" />
                  </button>

                  {trailerUrl && (
                    <YouTube
                      videoId={trailerUrl}
                      opts={{
                        height: '500',
                        width: '100%',
                        playerVars: {
                          autoplay: 1,
                          modestbranding: 1,
                        },
                      }}
                      className="w-full aspect-video"
                    />
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}

export default Row
