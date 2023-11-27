import MoviePage from 'pages/MoviePage';
import HomePage from 'pages/HomePage';
import { NavLink, Route, Routes } from 'react-router-dom';
import MovieDetailPage from 'pages/MovieDetailPage';
import Cast from './Cast/Cast';

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
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="movies" element={<MoviePage />} />
        <Route path="movies/:movieId" element={<MovieDetailPage />}>
          <Route path="casts" element={<Cast />} />
          <Route path="reviews" element={<div>reviews</div>} />
        </Route>
      </Routes>
    </div>
  );
};
