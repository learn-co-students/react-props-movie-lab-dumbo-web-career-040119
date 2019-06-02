import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return the correct
    
    return movieData.map((movie,id) => 
      // let title = movie.title;
      // let rating = movie.IMDBRating;
      // let genres = movie.genres;
      // let poster = movie.poster;
      // console.log(movie);
      // console.log(idx);
      <MovieCard movie={id} {...movie}/>
    
    )
    
  }
  
  render() {
    return (
      <div id="movie-showcase">
        {
          this.generateMovieCards() 
          // <MovieCard title ={movieData[0].title} IMDBRating = {movieData[0].IMDBRating} genres ={movieData[0].genres} poster ={movieData[0].poster}/>
        } 
      </div>
      )
    }
}



