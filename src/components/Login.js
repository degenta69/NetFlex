import React, { useRef } from 'react'
import { Link , useHistory} from 'react-router-dom'
import { auth } from '../firebase'
import '../index.css'

const Login = () => {
    const history =useHistory()
    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const handleLogin = async(e)=>{
        e.preventDefault();
        try {
      
            const authUser = await auth.signInWithEmailAndPassword(
              emailRef.current.value,passwordRef.current.value
            )
            const userToken =await authUser.user.getIdToken(true).then((token)=>{return token})
            
            if(authUser.user.getIdToken){
              localStorage.setItem('userToken', userToken)
              history.push('/home')
            }
            console.log(localStorage.getItem('userToken'))
       
           } catch (error) {
             alert(error.message)
             
           }
    }

  return (
    <div className='h-screen bg-blend-luminosity relative text-white bg-cover bg-center object-fill bg-netflex-banner'>
      <section className='h-50'>
        <div className='container py-3 h-72'>
          <div className='row d-flex justify-content-center align-items-center h-72'>
            <div className='col-12 col-md-8 col-lg-6 col-xl-5'>
              <div className='card bg-button_netflex bg-opacity-90 text-white' style={{'borderRadius': '1rem'}}>
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
                        ref={emailRef}
                      />
                      <label className='form-label text-lg' htmlFor='typeEmailX'>
                        Email
                      </label>
                    </div>

                    <div className='form-outline form-white mb-4'>
                      <input
                        type='password'
                        id='typePasswordX'
                        className='form-control form-control-lg'
                        placeholder='enter your password'
                        ref={passwordRef}
                      />
                      <label className='form-label text-lg' htmlFor='typePasswordX'>
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
                      onClick={handleLogin}
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
