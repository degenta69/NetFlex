import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

const Welcome = () => {
  let history=useHistory();

  useEffect(() => {
    let isMounted = true
    if (isMounted) {
      if (localStorage.getItem('userToken')){
        history.push('/home')
      }
    }
      
    return ()=>{isMounted= false}
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <header className='h-screen bg-blend-luminosity relative text-white bg-cover bg-center object-contain bg-netflex-banner'>
      <div className='bg-gradient-to-t from-transparent via-transparent to-black w-auto h-screen'>
      <div className='bg-gradient-to-r from-transparent via-transparent to-black w-auto h-screen'>
      <div className='bg-gradient-to-l from-transparent via-transparent to-black w-auto h-screen'>

        <div className='our-story-card-text '>
          <h1 className='our-story-card-title text-6xl mt-6 mb-6 font-extrabold'>
            Unlimited movies, TV shows and more. 
          </h1>
          <h2 className='our-story-card-subtitle text-4xl font-'>
            Watch anywhere. Cancel anytime.
          </h2>
          <form className='cta-form email-form mt-6 mb-6'>
            <h3 className='email-form-title text-danger text-2xl font-black'>
              Ready to watch?<br/> Log into your Account or Signup to create a new Account
            </h3>
            <div className='email-form-lockup'>
              <ul className='simpleForm structural ui-grid'>
                <li className='nfFormSpace field-email'>
                <div className='our-story-cta-container my-6 btn-group-lg cta-link-wrapper'>
                <Link
                  className='welcome_btn btn-red mx-2 nmhp-cta nmhp-cta-extra-large btn-none btn-custom'
                  to='/login'
                >
                  <span className='cta-btn-txt'>Login</span>
                </Link>
                <Link
                  className='welcome_btn btn-red mx-2 nmhp-cta nmhp-cta-extra-large btn-none btn-custom'
                  to='/signup'
                >
                  <span className='cta-btn-txt'>Signup</span>
                </Link>
              </div>
                </li>
              </ul>
            </div>
          </form>
        </div>
        </div>
        </div>
        </div>
      </header>
    </div>
  )
}

export default Welcome
