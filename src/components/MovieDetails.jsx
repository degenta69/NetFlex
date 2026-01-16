import React from 'react'

const MovieDetails = (props) => {
    const {movieName, movieTitle, onClick, MovieDetails}=props
  return (
    <>
      {/* <!-- component -->
<!-- This is an example component --> */}
      <div
      onClick={onClick}
        id='whoobe-1yakq'
        className='bg-button_netflex text-base w-5/6 rounded-lg shadow m-auto -brown-400 border border-t-8 border-b-8 border-black mt-20 flex flex-col'
      >
        <div id='whoobe-pa28x' className='p-4 flex flex-col'>
          <h3 type='element' className='text-2xl' id='whoobe-ozjao'>
            {movieName || movieTitle}
          </h3>
          <p type='element' className='my-4' id='whoobe-dvhrz'>
            {MovieDetails}
          </p>
          <button
            type='button'
            value='button'
            className='hover:text-white hover:bg-green-400 bg-gray-800 text-gray-400 m-auto my-4 px-6 py-2 text-lg rounded shadow-px-4 border-0'
            id='whoobe-wkfvm'
          >
            Subscribe
          </button>
        </div>
      </div>
    </>
  )
}

export default MovieDetails
