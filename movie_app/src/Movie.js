import React, { Component } from 'react';
import './Movie.css'

// component > render > return > jsx(react로 작성하는 html)
class Movie extends Component {
    render() {
        // console.log(this.props); // movie가 가진 props(부모가 자식에게 준 데이터)
        return (
            <div>
                <h1>{this.props.title}</h1>
                <MoviePoster poster={this.props.poster} />
            </div>
        )
    }
}

class MoviePoster extends Component {
    render() {
        // console.log(this.props);
        return (
            <img src={this.props.poster} width="200"/>
        )
    }
}

export default Movie