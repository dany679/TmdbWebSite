import folder from '../../images/folder.svg';
import copy from '../../images/copy.svg';
import useCopy from '../hooks/useCopy';
const CopyToClipBoard = ({ text }) => {
  const { click, setClick } = useCopy({ text });
  return (
    <>
      <p>{text}</p>
      <img
        className='none'
        onClick={() => {
          setClick(true);
        }}
        src={click ? copy : folder}
        alt=''
        width='40'
        height='40'
      ></img>
    </>
  );
};

export default CopyToClipBoard;
