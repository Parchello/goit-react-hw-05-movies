import { ProgressBar } from 'react-loader-spinner';
import { NavLink, Outlet } from 'react-router-dom';

export default function SelectedMovie({ movie, genres }) {
  const imgUrl = 'https://image.tmdb.org/t/p/w300';
  return (
    <div>
      {movie ? (
        <>
          <div>
            <img src={imgUrl + movie.poster_path} alt={movie.title} />
          </div>
          <div>
            <h1>{movie.title}</h1>
            <p>User score: {movie.vote_average}/10</p>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
            <h2>Genres</h2>
            <ul>
              {genres.map(genre => (
                <li key={genre.id}>
                  <p>{genre.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <ProgressBar
          height="400"
          width="400"
          ariaLabel="progress-bar-loading"
          wrapperStyle={{}}
          wrapperClass="progress-bar-wrapper"
          borderColor="#F4442E"
          barColor="#51E5FF"
        />
      )}
      <ul>
        <li>
          <NavLink to="casts">cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">revievs</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
