import { fetchOneMovie } from 'api';
import SelectedMovie from 'components/SelectedMovie/SelectedMovie';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function MovieDetailPage() {
  const [selecteMovie, setselecteMovie] = useState(null);
  const [genres, setGenres] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const result = async () => {
      try {
        const movie = await fetchOneMovie(movieId);
        if (movie !== undefined) {
          setselecteMovie(movie);
          setGenres(movie.genres);
        }
      } catch (error) {
        console.log(error);
      }
    };

    result();
  }, [movieId]);

  return (
    <div>
      <SelectedMovie movie={selecteMovie} genres={genres} />
    </div>
  );
}
