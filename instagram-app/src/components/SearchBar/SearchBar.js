import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faCompass, faHeart, faUser } from '@fortawesome/free-regular-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { SearchBarDiv, SearchLogo, SearchForm, SearchIcons, LogOutDiv } from './SearchBarStyles'
import './SearchBar.scss';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      logoutBtnHover: false
    }
  }

  toggleLogoutBtn = () => {
    this.setState({
      logoutBtnHover: !this.state.logoutBtnHover
    })
  }

  logout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    window.location.reload();
  }

  render() {
    return (
      <SearchBarDiv>
        <SearchLogo>
          <FontAwesomeIcon icon={faInstagram} size='2x'/>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png' alt='instagram logo' />
        </SearchLogo>
        <SearchForm>
          <FontAwesomeIcon icon={faSearch} size='xs'/>
          <input onChange={this.props.searchHandler} value={this.props.value} placeholder='Search'/>
        </SearchForm>
        <SearchIcons>
          <FontAwesomeIcon icon={faCompass} />
          <FontAwesomeIcon icon={faHeart} />
          <FontAwesomeIcon icon={faUser} onClick={this.toggleLogoutBtn }/>
        </SearchIcons>
        {this.state.logoutBtnHover ? <LogOutDiv><button onClick={this.logout}>Logout</button></LogOutDiv> : null}
      </SearchBarDiv>
      
    )
  }
}

export default SearchBar;