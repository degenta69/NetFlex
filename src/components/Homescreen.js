import React, { useEffect } from 'react'
import Banner from './Banner'
import requests from '../requests'
import Row from './Row'
import { useHistory } from 'react-router'

const Homescreen = () => {
  let history = useHistory();

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
