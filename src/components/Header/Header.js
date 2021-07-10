import { Content, LogoImg, TmdbLogoImg, Wrapper } from './Header.styles';
import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <TmdbLogoImg src={TMDBLogo} alt={'logo tmdb'} />
        <LogoImg src={RMDBLogo} alt={'logo rmdb'} />
      </Content>
    </Wrapper>
  );
};

export default Header;
