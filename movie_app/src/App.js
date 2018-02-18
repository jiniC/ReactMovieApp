import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

// 부모가 데이터를 다 가지고 있음
class App extends Component {
  // Render: componentWillMount() -> render() -> componentDidMount()
  // Update: componentWillReceiveProps() -> ShouldComponentUpdate() -> true -> componentWillUpdate() -> render() -> componentDidUpdate()

  // state바뀌면 새로운 state와 함께 바뀔 때마다 render()발생
  state = {}

  componentDidMount() {
    // promise: asynchronous, 비동기식, 첫 라인이 안끝나도 두번째 라인 작업, 계속 다른 작업 스케줄 해 둘 수 있음
    // AJAX(=Asynchronous JavaScript And XML)
    // fetch의 작업이 완료되면 -> then -> catch
    fetch("https://yts.am/api/v2/list_movies.json?sort_by=rating")
      // response: fetch의 결과물
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(err => console.log(err));
  }

  // react와 내 기능 차이두기위해서 '_'사용
  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />;
    })
    return movies
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : "Loading..."}
      </div>
    );
  }
}

export default App;