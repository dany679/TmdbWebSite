//react
import { useParams } from 'react-router-dom';

// components ans hooks-custom
import { useMovieFetch } from '../hooks/useMovieFetch';
import ActorsBox from '../ActorsBox/ActorsBox';
import BreadCrumb from '../BreadCrumb/BreadCrumb';
import MovieInfo from '../MovieInfo/MovieInfo';
import MovieInfoBar from '../MovieInfoBar/MovieInfoBar';
import Spinner from '../Spinner/Spinner';
import Grid from '../Grid/Grid';
import NotFound from './NotFound/NotFound';

const Movie = () => {
  const movieId = useParams();
  const { error, state: movie, loading } = useMovieFetch(movieId);
  // budget, runtime, runtime
  console.log('movie', movie);
  if (error) return <NotFound text={'Movie not found'} />;
  console.log(error);
  if (loading) return <Spinner />;
  return (
    <>
      <BreadCrumb movieTitleOriginal={movie.original_title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar
        budget={movie.budget}
        revenue={movie.revenue}
        runtime={movie.runtime}
      />
      <Grid header='actor' color={'#353535'}>
        {movie.actors?.map((actor) => (
          <ActorsBox
            key={actor.credit_id}
            src={actor.profile_path}
            name={actor.name}
            character={actor.character}
          />
        ))}
      </Grid>
    </>
  );
};

export default Movie;
