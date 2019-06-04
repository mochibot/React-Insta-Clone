import React from 'react';
import './App.scss';
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer'
import dummyData from './dummy-data'

//import { library } from '@fortawesome/fontawesome-svg-core';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    this.setState({
      data: dummyData
    })
  }

  searchSubmit = (event) => {
    event.preventDefault();
    if (event.target.value !== '') {
      let searchInput = (event.target.value).toLowerCase();
      this.setState(prevState => {
        return {
          data: prevState.data.filter(item => item.username.toLowerCase().includes(searchInput))
        }
      }) 
    } else {
      this.setState({
        data: dummyData
      })
    }
  }

  render() {
    return (
      <div className="App">
        <header>
          <SearchBar 
            searchHandler={this.searchSubmit} />
        </header>
        <div className='content'>
          {this.state.data.map(item => <PostContainer post={item} key={item.id}/>)}
        </div>
      </div>
    );
  }
}

export default App;
