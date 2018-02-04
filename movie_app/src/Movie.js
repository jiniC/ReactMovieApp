import React, { Component } from 'react';
import './Movie.css'

// component > render > return > jsx(react로 작성하는 html)
class Movie extends Component {
    render() {
        return (
            <div>
                <MoviePoster />
                <h1>hello this is a movie</h1>
            </div>
        )
    }
}

class MoviePoster extends Component {
    render() {
        return (
            <img src="https://i.ytimg.com/vi/TYWXiCer30s/maxresdefault.jpg" width="200" height="100"/>
        )
    }
}

export default Movie