import { useEffect, useState } from 'react';
//api
import apiSettings from '../../API';

const useHomeFetch = () => {
  const [state, setState] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const fetchMovies = async (page, searchTerm = '') => {
    try {
      setLoading(true);
      setError(false);
      const movies = await apiSettings.fetchMovies(page, searchTerm);
      setState((old) => ({
        ...movies,
        results:
          page > 1 ? [...old.results, ...movies.results] : [...movies.results],
      }));
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchMovies(1);
  }, []);
  return { state, loading, error };
};

export default useHomeFetch;
