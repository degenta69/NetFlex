import React, { useEffect, useState } from 'react'
import '../index.css'

const Navbar = () => {
  const [show, setshow] = useState(false)

  const transformNav = () => {
    if (window.scrollY >= 100) {
      setshow(true)
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

  return (
    <div>
      <nav
        className={`navbar fixed-top navbar-expand-lg h-12 duration-500 motion-reduce:animate-bounce transition-all ${
          show === true ? 'navbar-dark bg-dark' : 'bg-transparent'
        }`}
      >
        <a className=' navbar-brand' href='/'>
          <img
            src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
            width='80'
            height='30'
            alt=''
          />
        </a>
        <div className='collapse navbar-collapse' id='navbarNavDropdown'></div>
        <div className='account d-flex justify-content-around'>
          <a className='form-inline my-lg-4' href='/'>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
              width='40'
              height='40'
              sizes='large'
              alt=''
            />
          </a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
