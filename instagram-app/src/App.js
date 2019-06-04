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

  render() {
    return (
      <div className="App">
        <header>
          <SearchBar />
        </header>
        <div className='content'>
          {this.state.data.map(item => <PostContainer post={item} key={item.id}/>)}
        </div>
      </div>
    );
  }
}

export default App;
