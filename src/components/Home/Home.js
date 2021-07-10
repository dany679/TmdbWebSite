//image
import NoImage from '../../images/no_image.jpg';
//config
import { BACKDROP_SIZE, POSTER_SIZE, IMAGE_BASE_URL } from '../../config';
//api
import useHomeFetch from '../hooks/useHomeFetch';
import { useEffect, useState } from 'react';

const Home = () => {
  const { state, error, loading } = useHomeFetch();
  console.log(state);
  return <div>Home page</div>;
};

export default Home;
