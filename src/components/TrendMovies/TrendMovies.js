import { Link, useLocation } from 'react-router-dom';
import { FilmLi, FilmList, FilmName } from './TrendMovies.styled';

export const TrendMovies = ({ elems }) => {
  const location = useLocation();
  const imgUrl = 'https://image.tmdb.org/t/p/w200';
  return (
    <FilmList>
      {elems.map(element => (
        <FilmLi key={element.id}>
          <Link to={'/movies/' + element.id} state={{ from: location }}>
            <img
              src={imgUrl + element.poster_path}
              alt={element.title}
              width={300}
              height={450}
            />

            <FilmName>{element.title}</FilmName>
          </Link>
        </FilmLi>
      ))}
    </FilmList>
  );
};
