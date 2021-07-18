import { useEffect, useState } from 'react';
//api
import API from '../../API';
//helpers
import { isPersistedState } from '../../helpers';
export const useMovieFetch = ({ movieId }) => {
  const [state, setState] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        setError(false);
        const movieIdCopy = movieId;
        const movie = await API.fetchMovie(movieId);
        const credits = await API.fetchCredits(movieIdCopy);
        const directors = credits.crew.filter(
          (member) => member.job === 'Director',
        );
        setState({ ...movie, actors: credits.cast, directors });
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    const sessionState = isPersistedState(movieId);
    if (sessionState) {
      setState(sessionState);
      setLoading(false);
    }
    fetchMovie();
  }, [movieId]);

  useEffect(() => {
    if (!error) {
      sessionStorage.setItem(movieId, JSON.stringify(state));
    }
  }, [movieId, state]);
  return { error, state, loading };
};
