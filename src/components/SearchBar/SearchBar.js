//style
import { Wrapper, Content } from './SearchBar.style';
//icon
import searchIcon from '../../images/search-icon.svg';
//verify props
import PropTypes from 'prop-types';
//hooks
import { useEffect, useRef, useState } from 'react';

const SearchBar = ({ setSearchTerm }) => {
  const [type, setType] = useState('');
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    const timer = setTimeout(() => {
      setSearchTerm(type);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [setSearchTerm, type]);
  return (
    <Wrapper>
      <img src={searchIcon} alt='search icon' />
      <Content>
        <input
          type='text'
          placeholder='Type to search'
          onChange={(e) => setType(e.currentTarget.value)}
          value={type}
        ></input>
      </Content>
    </Wrapper>
  );
};

SearchBar.propTypes = {
  setSearchTerm: PropTypes.func,
};
export default SearchBar;
