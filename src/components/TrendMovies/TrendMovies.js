import { Link, useLocation } from 'react-router-dom';

export const TrendMovies = ({ elems }) => {
  const location = useLocation();
  const imgUrl = 'https://image.tmdb.org/t/p/w200';
  return (
    <ol>
      {elems.map(element => (
        <li key={element.id}>
          <img src={imgUrl + element.poster_path} alt={element.title} />
          <Link to={'/movies/' + element.id} state={{ from: location }}>
            {element.title}
          </Link>
        </li>
      ))}
    </ol>
  );
};
