//styles
import { Content, Text, Wrapper } from './HeroImage.style';
// verify props
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const HeroImage = ({ title, about, image, movieId }) => {
  console.log(movieId);
  return (
    <Link to={`/${movieId}`}>
      <Wrapper image={image}>
        <Content>
          <Text>
            <h1>{title}</h1>
            <h3>{about}</h3>
          </Text>
        </Content>
      </Wrapper>
    </Link>
  );
};

HeroImage.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
  image: PropTypes.string,
};
export default HeroImage;
