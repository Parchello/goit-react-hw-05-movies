import { NavLink, Route, Routes } from 'react-router-dom';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import { Suspense, lazy } from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';

const MoviePage = lazy(() => import('pages/MoviePage'));
const HomePage = lazy(() => import('pages/HomePage'));
const MovieDetailPage = lazy(() => import('pages/MovieDetailPage'));

export const App = () => {
  return (
    <div>
      <header>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
      </header>
      <Suspense
        fallback={
          <MagnifyingGlass
            visible={true}
            height="80"
            width="80"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{}}
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor="#c0efff"
            color="#e15b64"
          />
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="movies" element={<MoviePage />} />
          <Route path="movies/:movieId" element={<MovieDetailPage />}>
            <Route path="casts" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
