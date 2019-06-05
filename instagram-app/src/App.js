import React from 'react';
import './App.scss';
import PostPage from './components/PostContainer/PostPage'
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
      <div className="App">
        <PostPage data={this.state.data} />
      </div>
    );
  }
}

export default App;
