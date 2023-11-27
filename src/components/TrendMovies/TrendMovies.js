import { Link, useLocation } from 'react-router-dom';

export const TrendMovies = ({ elems }) => {
  const location = useLocation();
  console.log(elems);
  const imgUrl = 'https://image.tmdb.org/t/p/w300';
  return (
    <ol>
      {elems.map(element => (
        <li key={element.id}>
          <Link to={'/movies/' + element.id} state={{ from: location }}>
            {element.title}
          </Link>
          <img src={imgUrl + element.poster_path} alt={element.title} />
        </li>
      ))}
    </ol>
  );
};
