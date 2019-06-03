import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faCompass, faHeart, faUser } from '@fortawesome/free-regular-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import './SearchBar.scss';

const SearchBar = () => {
  return (
    <div className='search-bar'>
      <div className='search-logo'>
        <FontAwesomeIcon icon={faInstagram} />
        <h2>Instagram</h2>
      </div>
      <form className='search-form'>
        <FontAwesomeIcon icon={faSearch} />
        <input placeholder='Search'/>
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