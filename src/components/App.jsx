import React from 'react'
import Movie from "./Movie"
import { AiOutlineHome } from "react-icons/ai"

const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const App = ({movies, searchFilter, setSearchFilter, getMovies, sortedMovies}) => {


  const handleOnSubmit = (e) => {
    e.preventDefault()
    
    if(searchFilter){
      getMovies(SEARCH_API + searchFilter)
      setSearchFilter('')
    }
  }

  const handleOnChange = (e) => {
    setSearchFilter(e.target.value)
  }

  const handleOnClick = () => {
    getMovies(FEATURED_API)
    console.log(movies.length)
  }
  return (
    <div>
      <header>
          <button className="home" onClick={handleOnClick}>
            <AiOutlineHome/>
          </button>
          <form onSubmit={handleOnSubmit}>
            <input 
              className="search" 
              type="text" 
              placeholder="Search..."
              value={searchFilter}
              onChange={handleOnChange}/>
          </form>
      </header>
      <div className="movie-container">
        {sortedMovies.length > 0 && sortedMovies.map((movie) => (
          <Movie key={movie.id} data={movie}/>
        ))}
      </div>
    </div>
  );
};

export default App;
