import React, { useEffect, useState } from 'react';
//api
import API from '../../API';

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
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const fetchMovies = async (page, searchTerm = '') => {
    try {
      setLoading(true);
      setError(false);
      const movies = await API.fetchMovies(searchTerm, page);
      console.log(movies);
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
    setState(initialState);
    fetchMovies(1, searchTerm);
    console.log();
  }, [searchTerm]);
  //loadMore
  useEffect(() => {
    if (!loadingMore) return;
    fetchMovies(state.page + 1, searchTerm);
    setLoadingMore(false);
  }, [loadingMore, searchTerm, state.page]);

  return { state, loading, error, setSearchTerm, searchTerm, setLoadingMore };
};
