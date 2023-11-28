import { Link, useLocation } from 'react-router-dom';

export default function MovieSearchList({ items }) {
  const location = useLocation();
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w300';
  console.log(items);
  return (
    <div>
      {items ? (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              <Link to={`${item.id}`} state={{ from: location }}>
                {item.original_title}
              </Link>
              <img
                src={imgBaseUrl + item.poster_path}
                alt={item.title}
                width={300}
                height={450}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading, please wait.....</p>
      )}
    </div>
  );
}
