//image
import NoImage from '../../images/no_image.jpg';
//config
import { BACKDROP_SIZE, POSTER_SIZE, IMAGE_BASE_URL } from '../../config';
//api
import { useHomeFetch } from '../hooks/useHomeFetch';
//components
import HeroImage from '../HeroImage/HeroImage';
import Grid from '../Grid/Grid';
import Thumb from '../Thumb/Thumb';
import Spinner from '../Spinner/Spinner';
import SearchBar from '../SearchBar/SearchBar';
import Button from '../Button/Button';

const Home = () => {
  const {
    state,
    error,
    loading,
    setSearchTerm,
    searchTerm,
    setLoadingMore,
    loadingMore,
  } = useHomeFetch();
  if (error) return <p> Error, restar the web site</p>;

  let randomPopular = state.results
    ? Math.floor(state.results.length * Math.random())
    : null;

  return (
    <>
      {/* hero image */}
      {state.results[randomPopular] ? (
        <HeroImage
          title={state.results[randomPopular].title}
          about={state.results[randomPopular].overview}
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[randomPopular].backdrop_path}`}
        />
      ) : null}
      <SearchBar setSearchTerm={setSearchTerm} />

      <Grid
        header={
          !searchTerm ? 'Most Popular Movies' : 'Search from:' + searchTerm
        }
      >
        {state.results.length === 0 && loading === false ? (
          <p>No result</p>
        ) : (
          state.results.map((movie) => (
            <Thumb
              key={movie.id}
              movieId={movie.id}
              alt={movie.title}
              image={
                movie.poster_path
                  ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                  : NoImage
              }
            ></Thumb>
          ))
        )}
      </Grid>
      {loading && <Spinner />}
      {state.results.length < state.total_pages && !loading && (
        <Button text={'Load more'} callback={() => setLoadingMore(true)} />
      )}
    </>
  );
};

export default Home;
