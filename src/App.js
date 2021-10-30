import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Navbar from './components/Navbar'
import Homescreen from './components/Homescreen'
import Signup from './components/Signup'
import Login from './components/Login'
import Welcome from './components/Welcome'
import { auth } from './firebase'
import { login, logout, selectUser } from './features/userSlice'
import UserProfile from './components/UserProfile'

function App () {
  const user = useSelector(selectUser)
  console.log(user)
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = ()=>{
      auth.onAuthStateChanged((userAuth)=>{
        if(userAuth){
          dispatch(login({
            uid: userAuth.uid,
            userEmail: userAuth.email
          }))
          console.log(userAuth)
        }else{
          dispatch(logout)
        }
      })
    }
    return unsubscribe;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Router>

        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Welcome />
          </Route>
          <Route exact path='/home'>
            <Homescreen />
          </Route>
          <Route exact path='/signup'>
            <Signup />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/userprofile'>
            <UserProfile />
          </Route>
          
        </Switch>
      </Router>
    </>
  )
}

export default App
