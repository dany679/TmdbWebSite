import { Content, Wrapper } from './Footer.style';
import github from '../../images/github.svg';
import instagram from '../../images/instagram.svg';
import linkedin from '../../images/linkedin.svg';
import CopyToClipBoard from './CopyToClipBoard';
const Footer = () => {
  return (
    <Wrapper>
      <Content>
        <h5>Projects on Github</h5>
        <div className='underline'>
          <a
            href='https://github.com/dany679/Netflix-React'
            rel='noreferrer'
            target='_blank'
          >
            Netflix-Home
          </a>
          <a
            href='https://github.com/dany679/TmdbWebSite'
            rel='noreferrer'
            target='_blank'
          >
            Tmdb
          </a>
          <a
            href='https://github.com/dany679/chatty-usiningnode'
            rel='noreferrer'
            target='_blank'
          >
            Chatty
          </a>
          <a
            href='https://github.com/dany679/Whatsapp-Next-React-'
            rel='noreferrer'
            target='_blank'
          >
            Whats app
          </a>
        </div>
      </Content>
      <Content>
        <h5>Social Medias</h5>
        <div className='icons'>
          <a
            href='https://www.instagram.com/nops_/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={instagram} alt='' width='70' height='65'></img>
          </a>
          <a
            href='https://www.linkedin.com/in/danielly-silva-8b6838210/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={linkedin} alt='' width='70' height='65'></img>
          </a>
          <a
            href='https://github.com/dany679/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={github} alt='' width='70' height='65'></img>
          </a>
        </div>
        <h3>Contact Me</h3>
        <div className='contact'>
          <CopyToClipBoard text={'+55(38)988273087'} />
        </div>
      </Content>
      <Content>
        <h5>About this project</h5>
        <p>Make with React Framework and Tmdb API</p>
        <p>Hooks, Styled components, Context, Storage, Prop Types ...</p>
      </Content>
    </Wrapper>
  );
};

export default Footer;
