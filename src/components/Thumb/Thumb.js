import { Image } from './Thumb.style';

const Thumb = ({ image, alt, movieId, clickable }) => {
  return (
    <div>
      <Image src={image} alt={alt}></Image>
    </div>
  );
};

export default Thumb;
