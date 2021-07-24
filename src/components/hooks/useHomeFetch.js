import { useEffect, useState } from 'react';
//api
import API from '../../API';
//helpers
import { isPersistedState } from '../../helpers';

export const useHomeFetch = () => {
  const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  };
  const [searchTerm, setSearchTerm] = useState('');
  const [state, setState] = useState(initialState);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [loadingMore, setLoadingMore] = useState(false);
  const fetchMovies = async (page, searchTerm = '') => {
    try {
      setLoading(true);
      setError(false);
      const movies = await API.fetchMovies(searchTerm, page);
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
  //  first
  useEffect(() => {
    if (!searchTerm) {
      const sessionState = isPersistedState('homeState');
      if (sessionState) {
        setState(sessionState);
        return;
      }
    }
    fetchMovies(1);
  }, [searchTerm]);
  // search
  useEffect(() => {
    // setState(initialState);
    fetchMovies(1, searchTerm);
  }, [searchTerm]);

  // useEffect(() => {
  //   if (!searchTerm) {
  //     const sessionState = isPersistedState('homeState');
  //     if (sessionState) {
  //       setState(sessionState);
  //       return;
  //     }
  //   }
  //   setState(initialState);
  //   fetchMovies(1, searchTerm);
  // }, [searchTerm]);
  //loadMore
  useEffect(() => {
    if (!loadingMore) return;
    fetchMovies(state.page + 1, searchTerm);
    setLoadingMore(false);
  }, [loadingMore, searchTerm, state.page]);
  //write session
  useEffect(() => {
    if (!searchTerm && !error) {
      sessionStorage.setItem('homeState', JSON.stringify(state));
      setLoading(false);
    }
  }, [searchTerm, state, error]);
  return { state, loading, error, setSearchTerm, searchTerm, setLoadingMore };
};
