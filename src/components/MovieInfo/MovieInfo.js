//images and images config
import { BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import { Language } from '../../helpers';
import NoImage from '../../images/no_image.jpg';
//verify props
import PropTypes from 'prop-types';
//components
import Thumb from '../Thumb/Thumb';
//style
import { Content, Wrapper, Text } from './MovieInfo.style';

const MovieInfo = ({ movie }) => {
  const { lang, langOriginal } = Language(movie?.original_language);
  return (
    <Wrapper
      backdrop={
        movie.backdrop_path
          ? IMAGE_BASE_URL + BACKDROP_SIZE + movie.backdrop_path
          : null
      }
    >
      <Content>
        <Thumb
          image={
            movie.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
              : NoImage
          }
          clickable={false}
        ></Thumb>
        <Text>
          <h2>{movie.title} </h2>
          <span>{movie.tagline}</span>

          <p>
            Original language: {lang}{' '}
            {langOriginal !== lang ? langOriginal : ''}
          </p>
          <p>About :{movie.overview}</p>
          <div>
            <div>
              <h3>Rating</h3>
              <div className='score_and_total'>
                <div className='score'>
                  {movie.vote_average === Math.floor(movie.vote_average)
                    ? movie.vote_average + '.0'
                    : movie.vote_average}
                </div>
                {movie.vote_average > 1 && (
                  <p>Total votes: {movie.vote_count}</p>
                )}
              </div>
            </div>
            <div className='directors'>
              <h3>Director{movie.directors?.length === 1 ? '' : 's'}</h3>
              <div>
                {movie.directors?.map((director) => (
                  <p key={director.credit_id}>{director.name}</p>
                ))}
              </div>
            </div>
          </div>
        </Text>
      </Content>
    </Wrapper>
  );
};
MovieInfo.prototype = {
  movie: PropTypes.object,
};
export default MovieInfo;
