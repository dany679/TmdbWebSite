import folder from '../../images/folder.svg';
import copy from '../../images/copy.svg';
import useCopy from '../hooks/useCopy';
import styled from 'styled-components';
const CopyToClipBoard = ({ text }) => {
  const { click, setClick } = useCopy({ text });
  return (
    <>
      <p>{text}</p>
      <Img
        className='none'
        onClick={() => {
          setClick(true);
        }}
        src={click ? copy : folder}
        alt='copy to clipboard'
        width='40'
        height='40'
      ></Img>
    </>
  );
};

export const Img = styled.img`
  :hover {
    opacity: 0.5;
  }
`;

export default CopyToClipBoard;
