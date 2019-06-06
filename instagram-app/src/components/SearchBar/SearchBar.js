import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faCompass, faHeart, faUser } from '@fortawesome/free-regular-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { SearchBarDiv, SearchLogo, SearchForm, SearchIcons } from './SearchBarStyles'
import './SearchBar.scss';

const SearchBar = (props) => {
  function logout() {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem('userName');
    window.location.reload();
  }

  return (
    <SearchBarDiv>
      <SearchLogo>
        <FontAwesomeIcon icon={faInstagram} size='2x'/>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png' alt='instagram logo' />
      </SearchLogo>
      <SearchForm>
        <FontAwesomeIcon icon={faSearch} size='xs'/>
        <input onChange={props.searchHandler} value={props.value} placeholder='Search'/>
      </SearchForm>
      <SearchIcons>
        <FontAwesomeIcon icon={faCompass} />
        <FontAwesomeIcon icon={faHeart} />
        <FontAwesomeIcon icon={faUser} onClick={logout}/>
      </SearchIcons>
    </SearchBarDiv>
  )
}

export default SearchBar;