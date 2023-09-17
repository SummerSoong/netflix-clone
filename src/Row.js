//run rfce to create a functional component
import React, { useState, useEffect } from 'react';
import axios from './axios';
import "./Row.css"
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = 'http://image.tmdb.org/t/p/original'

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');

  useEffect(() => {
    // if the second param is [], it means run once when this component loads, and don't run it again
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: '100%',
    playerVars: {
      autoplay: 1,
    }
  }

  function handleClick(movie) {
    console.log('clicked movie', movie);
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_name || '')
      .then(url => {
        console.log('url', url);
        const urlParams = new URLSearchParams(new URL(url).search);
        console.log('urlParams', urlParams)
        setTrailerUrl(urlParams.get('v'));
      }).catch((error) => console.log(error))
    }
  }
  return (
    <div className='row'>
      {/* title */}
      <h2>{title}</h2>

      {/* container -> posters */}
      <div className='row__posters'>
        {movies.map(movie => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
            alt={movie.name}
            onClick = {()=>handleClick(movie)}
            />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
    </div>
  )
}

export default Row