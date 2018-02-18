import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

class App extends Component {
  // Render: componentWillMount() -> render() -> componentDidMount()
  // Update: componentWillReceiveProps() -> ShouldComponentUpdate() -> true -> componentWillUpdate() -> render() -> componentDidUpdate()

  // state바뀌면 새로운 state와 함께 바뀔 때마다 render()발생
  state = {};

  componentDidMount() {
    this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      // 컴포넌트의 key: 느림 -> id로 수정
      return <Movie title={movie.title} poster={movie.large_cover_image} key={movie.id} />;
    });
    return movies;
  };
  
  // asyncronous function
  _getMovies = async () => {
    // await: this._callApi() 성공적완료가아닌 완료를 기다림, return value가 무엇이든 return value를 movies에 set
    // const variable
    // movies 값 = json.data.movies 값
    const movies = await this._callApi()
    
    // this._callApi() 완료되기전 까지는(성공적 수행 no) 아래 코드 실행되지 않음
    // 내 컴포넌트의 state를 movies로 설정
    this.setState({
      movies
    })
  };

  _callApi = () => {
    return fetch("https://yts.am/api/v2/list_movies.json?sort_by=rating")
      .then(response => response.json())
      .then(json => json.data.movies)
      .catch(err => console.log(err))
  };

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : "Loading..."}
      </div>
    );
  }
}

export default App;