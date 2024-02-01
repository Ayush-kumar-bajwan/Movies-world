import { useEffect, useState } from 'react';
import './App.css';
import MovieCard from './components/MovieCard/MovieCard';
import { useNavigate } from 'react-router-dom';

const apiUrl = import.meta.env.VITE_API_URL;


function App() {
  const navigate = useNavigate();
  const [searchTitle, setSearchTitle] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = async (query) => {
    try {
      const response = await fetch(`${apiUrl}?q=${encodeURIComponent(query)}`);
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  function handleClick(movie){
    navigate('/buy',{ state: { movie } })
  }
  const handleSearch = () => {
    searchMovies(searchTitle);
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      handleSearch();
    }
  };

  useEffect(() => {
    // Initial load with a default search term
    searchMovies('All Rise');
  }, []);

  return (
    <>
      <div className="app">
        <h1>MoviesWorld</h1>
        <div className="search">
        <input
            value={searchTitle}
            placeholder="Enter title"
            onChange={(e) => setSearchTitle(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <img src="/search.svg" alt="search" onClick={handleSearch} />
        </div>

        {movies.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard key={movie.show.id} movie={movie.show} onClick={() => handleClick(movie)} />

            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
