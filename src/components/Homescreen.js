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
        key={0}
          title='NETFLIX ORIGINALS'
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
        />
        <Row key={1} title='Trending Now' fetchUrl={requests.fetchTrending} />
        <Row key={2} title='Top Rated' fetchUrl={requests.fetchTopRated} />
        <Row key={3} title='Action Movies' fetchUrl={requests.fetchActionMovies} />
        <Row key={4} title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
        <Row key={5} title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
        <Row key={6} title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
        <Row key={7} title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
      </div>
      }
      
        
    </>
  )
}

export default Homescreen
