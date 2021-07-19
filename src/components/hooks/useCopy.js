import { useEffect, useState } from 'react';
const useCopy = ({ text }) => {
  const [click, setClick] = useState(null);
  useEffect(() => {
    navigator.clipboard.writeText(`${text}`);
    setTimeout(() => {
      click && setClick(null);
    }, 3000);
  }, [click, text]);

  return { click, setClick };
};

export default useCopy;
