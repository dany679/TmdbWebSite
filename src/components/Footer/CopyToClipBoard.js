import folder from '../../images/folder.svg';
import copy from '../../images/copy.svg';
import { useEffect, useState } from 'react';
const CopyToClipBoard = () => {
  const [click, setClick] = useState(null);
  useEffect(() => {
    navigator.clipboard.writeText('+5538988273087');
    setTimeout(() => {
      click && setClick(null);
    }, 3000);
  }, [click]);
  return (
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
  );
};

export default CopyToClipBoard;
