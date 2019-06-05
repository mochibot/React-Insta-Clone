import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';
import dummyData from '../../dummy-data'

class PostPage extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      searchInput: ''
    }
  }

  componentDidMount() {
    if (!localStorage.getItem('data')) {
      //reset list to initial tasks obj if list is empty
      this.setState({
        data: dummyData
      })
    } else {
      this.setState({
        data: JSON.parse(localStorage.getItem('data')),
      })
    }
  } 

  componentDidUpdate(prevProps, prevState) {
    if(prevState.data !== this.state.data) {
      localStorage.setItem('data', JSON.stringify(this.state.data));
    }
  }

  /* commenting out for localstorage stretch goal
  componentDidMount() {
    this.setState({
      data: dummyData
    })
  }
  */

  searchSubmit = (event) => {
    event.preventDefault();
    this.setState({
      searchInput: event.target.value
    })
    /*
    if (event.target.value !== '') {
      let searchInput = (event.target.value).toLowerCase();
      this.setState(prevState => {
        return {
          data: prevState.data.filter(item => item.username.toLowerCase().includes(searchInput))
        }
      }) 
    } else {
      this.setState({
        data: this.state.data
      })
    }
    */
  }

  render() {
    return (
      <div> 
        <header>
        <SearchBar 
          searchHandler={this.searchSubmit} />
        </header>
        <div className='content'>
          {this.state.data.filter(item => item.username.toLowerCase().includes(this.state.searchInput.toLowerCase())).map(item => <PostContainer post={item} key={item.id}/>)}
        </div>
      </div>
    )
  }
}

export default PostPage;