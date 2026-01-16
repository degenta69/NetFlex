import React from 'react'
import '../index.css'

const Movieitem = ({ movie, isLargeRow, baseURL, onTrailerClick }) => {
  // Fallback for missing images
  if (!movie.backdrop_path && !movie.poster_path) return null

  return (
    <div
      className={`group relative flex-none transition-transform duration-300 ease-in-out cursor-pointer z-0 hover:z-50 hover:scale-110
        ${isLargeRow ? 'w-40' : 'w-56'}
      `}
      onClick={() => onTrailerClick(movie)}
    >
      <img
        className={`rounded-sm object-cover w-full h-full`}
        src={`${baseURL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
        alt={movie.name || movie.title}
      />

      {!isLargeRow && (
        <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-xs font-bold">{movie.name || movie.title}</p>
        </div>
      )}
    </div>
  )
}

export default Movieitem
