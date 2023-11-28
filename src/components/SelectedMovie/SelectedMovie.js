import { Suspense, useRef } from 'react';
import { ProgressBar } from 'react-loader-spinner';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { StyledLink } from './SelectedMovie.styled';

export default function SelectedMovie({ movie, genres }) {
  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? '/movies');
  const imgUrl = 'https://image.tmdb.org/t/p/w300';
  return (
    <div>
      {movie ? (
        <>
          <div>
            <div>
              <StyledLink to={backLinkLocation.current}>Go back</StyledLink>
            </div>

            <img
              src={
                movie.poster_path
                  ? imgUrl + movie.poster_path
                  : 'https://www.shutterstock.com/image-vector/no-image-available-vector-illustration-260nw-744886198.jpg'
              }
              alt={movie.title}
              width={300}
              height={450}
            />
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
      <Suspense fallback={<div>Loading</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
