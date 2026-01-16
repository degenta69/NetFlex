import React, { useEffect, useState } from 'react'
import '../index.css'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import Netflex_logo from './Netflex_logo.png'

const Navbar = () => {
  const navigate = useNavigate()
  const user = useSelector(selectUser)
  const [show, setShow] = useState(false)

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar)
    return () => window.removeEventListener('scroll', transitionNavBar)
  }, [])

  return (
    <div
      className={`fixed top-0 w-full h-16 p-5 z-50 transition-all duration-500 ease-in ${show ? 'bg-black' : 'bg-gradient-to-b from-black/80 to-transparent'
        }`}
    >
      <div className="flex justify-between items-center h-full px-5">
        <div
          onClick={() => navigate('/')}
          className="cursor-pointer"
        >
          <img
            className="w-24 object-contain"
            src={Netflex_logo}
            alt="Netflex Logo"
          />
        </div>

        <div className="flex items-center space-x-4">
          {user && (
            <img
              onClick={() => navigate('/profile')}
              className="w-8 h-8 cursor-pointer rounded"
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              alt="User Avatar"
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
