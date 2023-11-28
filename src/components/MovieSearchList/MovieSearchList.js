import { Link, useLocation } from 'react-router-dom';

export default function MovieSearchList({ items }) {
  const location = useLocation();
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w300';
  return (
    <div>
      {items ? (
        <ul>
          {items.map(item => (
            <li key={item.id}>
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
              <Link to={`${item.id}`} state={{ from: location }}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading, please wait.....</p>
      )}
    </div>
  );
}
