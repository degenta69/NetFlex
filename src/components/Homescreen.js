import React, { useEffect } from 'react'
import Banner from './Banner'
import requests from '../requests'
import Row from './Row'
//import { auth } from '../firebase'
//import { useDispatch, useSelector } from 'react-redux'
//import { login, logout, selectUser } from '../features/userSlice'
import { useHistory } from 'react-router'

const Homescreen = () => {
  let history = useHistory();

 // const user = useSelector(selectUser)

 // const dispatch = useDispatch();

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      if (!localStorage.getItem('userToken')){
        history.push('/login')
      }
    }
      
    return ()=>{isMounted=false}
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   const unsubscribe = ()=>{
  //    auth.onAuthStateChanged((userAuth) => {
  //       if (userAuth) {
  //         dispatch(login({
  //           uid: userAuth.uid,
  //           userEmail: userAuth.email
  //         }))
  //         console.log(userAuth)
  //       } else {
  //         localStorage.removeItem('userToken')
  //         dispatch(logout)
  //       }
  //     })
  //   }
  //   if (!localStorage.getItem('userToken')){
  //     history.push('/login')
  //   }
  //   return unsubscribe;
  // }, []);

  return (
    <>
      {
      
      <div className='app'>

        <Banner />

        <Row
          title='NETFLIX ORIGINALS'
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
        />
        <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
        <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
        <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
        <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
        <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
        <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
        <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
      </div>
      }
      
        
    </>
  )
}

export default Homescreen
