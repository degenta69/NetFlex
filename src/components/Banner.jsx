import React, { useEffect, useState } from 'react'
import '../index.css'
import axios from '../axios'
import requests from '../requests'
import { PlayIcon, PlusIcon, XIcon } from '@heroicons/react/solid'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'
import toast from 'react-hot-toast'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

const Banner = () => {
  const [movie, setMovie] = useState([])
  const [trailerUrl, setTrailerUrl] = useState('')
  const [isOpen, setIsOpen] = useState(false)

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

  const handleTrailer = async () => {
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

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string
  }

  return (
    <header
      className='h-[448px] w-full bg-no-repeat relative text-white bg-cover bg-center object-contain'
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: 'center center'
      }}
    >
      <div className='ml-8 pt-36 h-48'>
        <h1 className='text-5xl font-extrabold pb-2'>
          {movie?.original_title || movie?.name || movie?.title}
        </h1>

        <div className='flex space-x-3 mt-4'>
          <button onClick={handleTrailer} className='cursor-pointer flex items-center gap-x-2 rounded px-8 py-2 bg-white text-black font-bold hover:bg-[#e6e6e6] transition duration-200'>
            <PlayIcon className='h-6 w-6 text-black' />
            Play
          </button>

          <button className='cursor-pointer flex items-center gap-x-2 rounded px-8 py-2 bg-[gray]/70 text-white font-bold hover:bg-[gray]/40 transition duration-200'>
            <PlusIcon className='h-6 w-6 text-white' />
            My List
          </button>
        </div>

        <h3 className='w-[45rem] leading-[1.3] pt-4 text-sm max-w-lg shadow-black drop-shadow-md text-shadow-md font-medium'>
          {truncate(movie?.overview, 150)}
        </h3>
      </div>

      <div className='absolute bottom-0 h-32 w-full bg-gradient-to-t from-black to-transparent' />

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
    </header>
  )
}

export default Banner
