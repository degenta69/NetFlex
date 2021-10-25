import React, { useRef } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../firebase'
import '../index.css'

const Signup = () => {
  const history = useHistory();
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const register = async(e)=>{
    e.preventDefault();
    try {
      
     const authUser = await auth.createUserWithEmailAndPassword(
       emailRef.current.value,passwordRef.current.value
     )
     const userToken =await authUser.user.getIdToken(true).then((token)=>{return token})
     if(authUser.user.getIdToken){
      localStorage.setItem('userToken', userToken)
      history.push('/home')
    }
    } catch (error) {
      alert(error.message)
      
    }
  }

  return (
    <>
      <section className='h-screen bg-blend-luminosity relative text-white bg-cover bg-center object-fill bg-netflex-banner'>
        <div className='mask d-flex align-items-center h-100 gradient-custom-3'>
          <div className='container h-100'>
            <div className='row d-flex justify-content-center align-items-center h-100'>
              <div className='col-12 col-md-9 col-lg-7 col-xl-6'>
                <div className='card bg-button_netflex bg-opacity-90 rounded-2xl'>
                  <div className='card-body p-5'>
                    <h2 className='text-uppercase text-3xl text-center mb-5'>
                      Create an account
                    </h2>

                    <form>
                      <div className='form-outline mb-2'>
                        <input
                          type='text'
                          id='form3Example1cg'
                          className='form-control form-control-lg'
                        />
                        <label
                          className='form-label text-lg'
                          htmlFor='form3Example1cg'
                        >
                          Your Name
                        </label>
                      </div>

                      <div className='form-outline mb-2'>
                        <input
                          type='email'
                          id='form3Example3cg'
                          className='form-control form-control-lg'
                          ref={emailRef}
                        />
                        <label
                          className='form-label text-lg'
                          htmlFor='form3Example3cg'
                        >
                          Your Email
                        </label>
                      </div>

                      <div className='form-outline mb-2'>
                        <input
                          type='password'
                          id='form3Example4cg'
                          className='form-control form-control-lg'
                          ref={passwordRef}
                        />
                        <label
                          className='form-label text-lg'
                          htmlFor='form3Example4cg'
                        >
                          Password
                        </label>
                      </div>

                      <div className='form-outline mb-2'>
                        <input
                          type='password'
                          id='form3Example4cdg'
                          className='form-control form-control-lg'
                        />
                        <label
                          className='form-label text-lg'
                          htmlFor='form3Example4cdg'
                        >
                          Repeat your password
                        </label>
                      </div>

                      <div className='d-flex justify-content-center'>
                        <button
                          type='button'
                          className='btn btn-success btn-block btn-lg gradient-custom-4 text-body'
                          onClick={register}
                        >
                          Register
                        </button>
                      </div>

                      <p className='text-center text-muted mt-3 -mb-1.5'>
                        Already Have an account?
                        <Link to='/login' className='fw-bold text-body'>
                          <u className='text-white'>Login here</u>
                        </Link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Signup
