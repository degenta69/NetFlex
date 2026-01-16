import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Navbar from './components/Navbar'
import Homescreen from './components/Homescreen'
import Signup from './components/Signup'
import Login from './components/Login'
import Welcome from './components/Welcome'
import { auth } from './firebase'
import { login, logout, selectUser } from './features/userSlice'
import ProfileScreen from './components/ProfileScreen'

import { Toaster } from 'react-hot-toast'

function App() {
  const user = useSelector(selectUser)
  console.log(user)
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          userEmail: userAuth.email
        }))
        console.log(userAuth)
      } else {
        dispatch(logout())
      }
    })
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Homescreen />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<ProfileScreen />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
