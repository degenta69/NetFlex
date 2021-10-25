import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Homescreen from './components/Homescreen'
import Signup from './components/Signup'
import Login from './components/Login'
import Welcome from './components/Welcome'

function App () {
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
          
        </Switch>
      </Router>
    </>
  )
}

export default App
