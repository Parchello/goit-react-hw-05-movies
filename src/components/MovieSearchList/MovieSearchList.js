import {
  FilmLi,
  FilmList,
  FilmName,
} from 'components/TrendMovies/TrendMovies.styled';
import { Link, useLocation } from 'react-router-dom';

export default function MovieSearchList({ items }) {
  const location = useLocation();

  const imgBaseUrl = 'https://image.tmdb.org/t/p/w300';
  return (
    <div>
      {items ? (
        <FilmList>
          {items.map(item => (
            <FilmLi key={item.id}>
              <Link to={`${item.id}`} state={{ from: location }}>
                <img
                  src={
                    item.poster_path
                      ? imgBaseUrl + item.poster_path
                      : 'https://www.shutterstock.com/image-vector/no-image-available-vector-illustration-260nw-744886198.jpg'
                  }
                  alt={item.title}
                  width={300}
                  height={450}
                />
                <FilmName> {item.title}</FilmName>
              </Link>
            </FilmLi>
          ))}
        </FilmList>
      ) : (
        <p>Loading, please wait.....</p>
      )}
    </div>
  );
}
