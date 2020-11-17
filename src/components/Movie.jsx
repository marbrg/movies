import React from "react";
const IMG_API = "https://image.tmdb.org/t/p/w1280";

const Movie = ({ data }) => {
  
  const setVoteClass = (vote) => {
    if(vote >= 8){
      return "green"
    }
    else if (vote >= 6){
      return "orange"
    }
    else{
      return "red"
    }
  }
  return (
    <div className="movie">
        <img src={
          data.poster_path ? 
          IMG_API + data.poster_path : 
          "https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          } 
          alt={data.title}
        />
        <div className="movie-info">
          <h3>{data.title}</h3>
          <span className={`tag ${setVoteClass(data.vote_average)}`}>{data.vote_average}</span>
        </div>
        <div className="movie-overview">
          <h2>Overview</h2>
          <p>{data.overview}</p>
        </div>
    </div>
  );
};

export default Movie;
