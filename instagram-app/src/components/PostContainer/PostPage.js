import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';

class PostPage extends React.Component {
  constructor() {
    super();
    this.state = {
      searchInput: ''
    }
  }

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
          {this.props.data.filter(item => item.username.toLowerCase().includes(this.state.searchInput.toLowerCase())).map(item => <PostContainer post={item} key={item.id}/>)}
        </div>
      </div>
    )
  }
}

export default PostPage;