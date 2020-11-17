import React, { useState, useEffect } from 'react'
import App from "./App"

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const AppContainer = () => {
  
  const [movies, setMovies] = useState([])
  const [searchFilter, setSearchFilter] = useState('')
  const sortedMovies = movies.sort((a,b) => b.vote_average - a.vote_average)

  const getMovies = (API) =>{
    fetch(API)
      .then((res)=>res.json())
      .then((data) => {
        console.log(data)
        setMovies(data.results)
      });
  }

  useEffect(() => {
    getMovies(FEATURED_API)
  }, []);
  
  
  return (
    <App
      movies={movies}
      searchFilter={searchFilter}
      setSearchFilter={setSearchFilter}
      getMovies={getMovies}
      sortedMovies={sortedMovies}
    />
  )

}

export default AppContainer