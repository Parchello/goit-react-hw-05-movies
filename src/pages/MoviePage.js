import { fetchByQueryMovie } from 'api';
import MovieSearchList from 'components/MovieSearchList/MovieSearchList';
import SearchBar from 'components/SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

export default function MoviePage() {
  const [queryResult, setQueryResult] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('searchQuery') ?? '');

  const input = searchParams.get('searchQuery') ?? '';

  useEffect(() => {
    if (!input) {
      setQueryResult([]);
      return;
    }
    const result = async () => {
      try {
        const result = await fetchByQueryMovie(input);
        setQueryResult(result);
      } catch (error) {
        console.log(error);
      }
    };
    result();
  }, [input]);

  const handleSubmit = e => {
    e.preventDefault();

    if (query === '') {
      return toast.error('Please enter name of a movie');
    }
    setSearchParams({ searchQuery: query });
  };

  const handleInputChange = e => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <SearchBar
        onSubmit={handleSubmit}
        inputData={query}
        onChange={handleInputChange}
      />
      <MovieSearchList items={queryResult} />
      <Toaster />
    </div>
  );
}
