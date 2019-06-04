import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faCompass, faHeart, faUser } from '@fortawesome/free-regular-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import './SearchBar.scss';

const SearchBar = (props) => {
  return (
    <div className='search-bar'>
      <div className='search-logo'>
        <FontAwesomeIcon icon={faInstagram} size='2x'/>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png' alt='instagram logo' />
      </div>
      <form className='search-form'>
        <FontAwesomeIcon icon={faSearch} size='xs'/>
        <input onChange={props.searchHandler} value={props.value} placeholder='Search'/>
      </form>
      <div className='search-icons'>
        <FontAwesomeIcon icon={faCompass} />
        <FontAwesomeIcon icon={faHeart} />
        <FontAwesomeIcon icon={faUser} />
      </div>
      
      

    </div>
  )
}

export default SearchBar;