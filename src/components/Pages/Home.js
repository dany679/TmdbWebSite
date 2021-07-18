//image
import NoImage from '../../images/no_image.jpg';
//config images
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
  const { state, error, loading, setSearchTerm, searchTerm, setLoadingMore } =
    useHomeFetch();
  if (error) return <p> Error, restar the web site</p>;
  const random = (min = 0, max = 50) => {
    const num = Math.random() * (max - min) + min;
    return Math.round(num);
  };
  // const randomPopular = state.results
  //   ? Math.floor((state.results.length - 10) * Math.random() + 10)
  //   : null;
  const randomPopular =
    state.results.length > 0 && !searchTerm ? random(0, 10) : 0;
  console.log('homeP randomMovie', state.results[randomPopular]);
  return (
    <>
      {/* hero image */}
      {loading === false && state.results[randomPopular] ? (
        <HeroImage
          title={state.results[randomPopular].title}
          about={state.results[randomPopular].overview}
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[randomPopular].backdrop_path}`}
          movieId={state.results[randomPopular].id}
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
              clickable={movie.id ? true : false}
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
