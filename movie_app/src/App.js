import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

const movieTitles = [
  "HarryPotter",
  "Guardians of the Galaxy",
  "Zootopia",
  "LalaLand"
]

const movieImages = [
  "https://static.rogerebert.com/uploads/movie/movie_poster/harry-potter-and-the-sorcerers-stone-2001/large_uLGaJ9FgPWf7EUgwjp9RTmHemw8.jpg",
  "https://images-na.ssl-images-amazon.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxODEx._V1_UY1200_CR90,0,630,1200_AL_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/71-Fj-WsM7L._SY550_.jpg",
  "https://media-cache.cinematerial.com/p/500x/4oa8qefc/la-la-land-slovak-movie-poster.jpg"
];

// 부모가 데이터를 다 가지고 있음
class App extends Component {
  render() {
    return <div className="App">
        <Movie title={movieTitles[0]} poster={movieImages[0]} />
        <Movie title={movieTitles[1]} poster={movieImages[1]} />
        <Movie title={movieTitles[2]} poster={movieImages[2]} />
        <Movie title={movieTitles[3]} poster={movieImages[3]} />
      </div>;
  };
}

export default App;
