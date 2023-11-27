import { GetTrendingMovies } from 'api';
import { TrendMovies } from 'components/TrendMovies/TrendMovies';
import { useState, useEffect } from 'react';
export default function HomePage() {
  const [filmList, setfilmList] = useState([]);

  useEffect(() => {
    const result = async () => {
      try {
        const movies = await GetTrendingMovies();
        if (movies.length) {
          setfilmList(movies);
        }
      } catch (error) {
        console.log(error);
      }
    };
    result();
  }, []);

  return (
    <div>
      <h1>Trending Movies</h1>
      <TrendMovies elems={filmList} />
    </div>
  );
}
