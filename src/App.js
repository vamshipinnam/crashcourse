import {useEffect, useState} from 'react';
import "./App.css"
import search from "./Assets/search.svg"
import MovieCard from './MovieCard';

// d028d06e

const APIURL = 'http://www.omdbapi.com?apikey=d028d06e';


const App = () => {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  const searchmovies = async (title) => {
    const response =  await fetch(`${APIURL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search)
  }

  useEffect(() => {
      searchmovies('RRR')
  }, []);
  return (
    <div className='app'>
      <h1>Movies</h1>

      <div className='search'>
        <input 
          placeholder='search for movies'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img 
          src={search}
          alt='search'
          onClick={() => searchmovies(searchTerm)}
        />

      </div>

      {movies?.length > 0 
        ? (
          <div className='container'>
              {movies.map((movie) => (
                <MovieCard movie={movie}/>
              ))}
          </div>
        ) : (
          <div className='empty'>
            <h2>No movies found</h2>
          </div>
      )}

      
    </div>
  );
}

export default App;