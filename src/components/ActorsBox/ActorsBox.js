//img and img config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import { Wrapper, Text, Image } from './ActorsBox.style';
import NoImage from '../../images/no_image.jpg';
// verify props
import PropTypes from 'prop-types';

const ActorsBox = ({ src, name, character }) => {
  return (
    <Wrapper>
      <Image
        className='img'
        src={src ? `${IMAGE_BASE_URL}${POSTER_SIZE}${src}` : NoImage}
      />
      <Text>
        <h3>{name}</h3>
        <p>{character}</p>
      </Text>
    </Wrapper>
  );
};
ActorsBox.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
  character: PropTypes.string,
};
export default ActorsBox;
