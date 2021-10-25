import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'

const Login = () => {

  return (
    <div className='h-screen bg-blend-luminosity relative text-white bg-cover bg-center object-fill bg-netflex-banner'>
      <section className='h-50'>
        <div className='container py-3 h-72'>
          <div className='row d-flex justify-content-center align-items-center h-72'>
            <div className='col-12 col-md-8 col-lg-6 col-xl-5'>
              <div className='card bg-dark text-white' style={{'border-radius': '1rem'}}>
                <div className='card-body p-5 text-center'>
                  <div className='md-5 -mb-0.5 mt-md-4 pb-0'>
                    <h2 className='fw-bold text-2xl mb-2 text-uppercase'>Login</h2>
                    <p className='text-white-50 text-base mb-5'>
                      Please enter your login and password!
                    </p>

                    <div className='form-outline form-white mb-4'>
                      <input
                        type='email'
                        id='typeEmailX'
                        className='form-control text-xl form-control-lg'
                        placeholder='please enter you email ID'
                      />
                      <label className='form-label text-lg' for='typeEmailX'>
                        Email
                      </label>
                    </div>

                    <div className='form-outline form-white mb-4'>
                      <input
                        type='password'
                        id='typePasswordX'
                        className='form-control form-control-lg'
                        placeholder='enter your password'
                      />
                      <label className='form-label text-lg' for='typePasswordX'>
                        Password
                      </label>
                    </div>

                    <p className='small mb-1 pb-lg-2'>
                      <Link  className='text-white-50' to='#!'>
                        Forgot password?
                      </Link>
                    </p>

                    <button
                      className='btn btn-outline-light btn-lg px-5'
                      type='submit'
                    >
                      Login
                    </button>
                  </div>
                  <div>
                    <p className='pt-7'>
                      Don't have an account?
                      <Link  to='/signup' className='text-white-50 fw-bold'>
                        Sign Up
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login
