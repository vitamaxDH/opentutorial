import React, {Component} from 'react';
import './Movie.css';

class Movie extends Component {
    render(){
        return (
        <React.Fragment>
            <MoviePoster />
            <h1>hello this is a movie</h1>
        </React.Fragment>
        );
    }
}

class MoviePoster extends Component {
    render(){
        return (
            <img src="https://m.media-amazon.com/images/M/MV5BMTM0NjQ4OTgyNV5BMl5BanBnXkFtZTcwOTU2MzQ4Nw@@._V1_CR0,60,640,360_AL_UX477_CR0,0,477,268_AL_.jpg" alt="hungergameImg"/>
        )
    }
}

export default Movie;