import { Suspense, useRef } from 'react';
import { ProgressBar } from 'react-loader-spinner';
import { Outlet, useLocation, Link as ButtonLink } from 'react-router-dom';
import {
  SpinnerContainer,
  SelectedMovieContainer,
  SelectedMovieDescrContainer,
  SelectedMovieLinkList,
  StyledNavLink,
} from './SelectedMovie.styled';
import { Button } from '@mui/material';

export default function SelectedMovie({ movie, genres }) {
  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? '/movies');
  const imgUrl = 'https://image.tmdb.org/t/p/w300';
  return (
    <div>
      {movie ? (
        <SelectedMovieContainer>
          <div>
            <div>
              <Button
                component={ButtonLink}
                to={backLinkLocation.current}
                variant="outlined"
                style={{ marginTop: '10px' }}
              >
                Go back
              </Button>
            </div>
            <h1>{movie.title}</h1>
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
          <SelectedMovieDescrContainer>
            <h2>Overview</h2>
            <p>Relase date: {movie.release_date}</p>
            <p>User score: {movie.vote_average}/10</p>

            <p>{movie.overview}</p>
            <h2>Genres</h2>
            <ul>
              {genres.map(genre => (
                <li key={genre.id}>
                  <p>{genre.name}</p>
                </li>
              ))}
            </ul>
          </SelectedMovieDescrContainer>
        </SelectedMovieContainer>
      ) : (
        <SpinnerContainer>
          <ProgressBar
            height="400"
            width="400"
            ariaLabel="progress-bar-loading"
            wrapperStyle={{}}
            wrapperClass="progress-bar-wrapper"
            borderColor="grey"
            barColor="orange"
          />
        </SpinnerContainer>
      )}
      <SelectedMovieLinkList>
        <li>
          <StyledNavLink to="casts">Cast</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="reviews">Reviews</StyledNavLink>
        </li>
      </SelectedMovieLinkList>
      <Suspense fallback={<div>Loading</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
