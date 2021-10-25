import React, { useEffect, useState } from 'react'
import '../index.css'
import { Link, useHistory } from 'react-router-dom'
import { logout } from '../features/userSlice'
import { useDispatch } from 'react-redux'

const Navbar = () => {
  let history = useHistory()

  const [profile, setprofile] = useState(false)

  const [show, setshow] = useState(false)

  const transformNav = () => {
    if (window.scrollY >= 100) {
      setshow(true)
      setprofile(true)
    } else {
      setshow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', transformNav)
    return () => {
      window.removeEventListener('scroll', transformNav)
    }
  }, [])

  const dispatch = useDispatch()
  const handleLogout = () => {
    localStorage.removeItem('userToken')
    history.push('/login')
    setprofile(false)
    dispatch(logout)
  }

  return (
    <div>
      <nav
        className={`navbar fixed-top navbar-expand-lg h-12 duration-500 motion-reduce:animate-bounce transition-all ${
          show === true ? 'navbar-dark bg-dark' : 'bg-transparent'
        }`}
      >
        <Link className=' navbar-brand' to='/'>
          <img
            src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
            width='80'
            height='30'
            alt=''
          />
        </Link>
        <div className='collapse navbar-collapse' id='navbarNavDropdown'>
          {profile && <button className='logout_button cursor-pointer outline-none text-danger m-auto border-none font-bold rounded-sm px-8 py-2 bg-button_netflex bg-opacity-40 transform motion-reduce:transform-none transition-all ' type='submit' onClick={handleLogout}>
            logout
          </button>}
        </div>
        {profile? (
          <button className='my-lg-4 flex flex-col' to='/signup' type='button'>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
              width='40'
              height='40'
              sizes='large'
              alt=''
            />
          </button>
        ) : (
          <div></div>
        )}
      </nav>
    </div>
  )
}

export default Navbar
