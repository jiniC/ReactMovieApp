import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

// 부모가 데이터를 다 가지고 있음
class App extends Component {
  // Render: componentWillMount() -> render() -> componentDidMount()
  // Update: componentWillReceiveProps() -> ShouldComponentUpdate() -> true -> componentWillUpdate() -> render() -> componentDidUpdate()

  // state바뀌면 새로운 state와 함께 바뀔 때마다 render()발생
  state = {
    greeting: "Hello!",
    movies: [
      {
        title: "HarryPotter",
        poster: "https://static.rogerebert.com/uploads/movie/movie_poster/harry-potter-and-the-sorcerers-stone-2001/large_uLGaJ9FgPWf7EUgwjp9RTmHemw8.jpg"
      },
      {
        title: "Guardians of the Galaxy",
        poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxODEx._V1_UY1200_CR90,0,630,1200_AL_.jpg"
      },
      {
        title: "Zootopia",
        poster: "https://images-na.ssl-images-amazon.com/images/I/71-Fj-WsM7L._SY550_.jpg"
      },
      {
        title: "LalaLand",
        poster: "https://media-cache.cinematerial.com/p/500x/4oa8qefc/la-la-land-slovak-movie-poster.jpg"
      },
    ]
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies: [
          {
            title: "Pirate of Caribbean",
            poster:
              "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYyMTcxNzc5M15BMl5BanBnXkFtZTgwOTg2ODE2MTI@._V1_UY1200_CR90,0,630,1200_AL_.jpg"
          },
          ...this.state.movies
        ]
      });
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        {this.state.movies.map((movie, index) => {
          return (
            <Movie title={movie.title} poster={movie.poster} key={index} />
          );
        })}
      </div>
    );
  }
}

export default App;