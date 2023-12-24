import { Typography } from '@mui/material';
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
    <div style={{ textAlign: 'center' }}>
      <Typography variant="h3" component="h1" color="orange">
        Trending Movies
      </Typography>
      <TrendMovies elems={filmList} />
    </div>
  );
}
