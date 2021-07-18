//style
import { Content, LogoImg, TmdbLogoImg, Wrapper } from './Header.styles';
//imgs
import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';
//react
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <Link to='/'>
          <TmdbLogoImg src={TMDBLogo} alt={'logo tmdb'} />
        </Link>
        <LogoImg src={RMDBLogo} alt={'logo rmdb'} />
      </Content>
    </Wrapper>
  );
};

export default Header;
