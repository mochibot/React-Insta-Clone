import React from 'react';
import './App.scss';
import PostPage from './components/PostContainer/PostPage';
import Login from './components/login/Login';
import withAuthenticate from './components/authentication/withAuthenticate';
//import { library } from '@fortawesome/fontawesome-svg-core';

const ComponentFromWithAuthenticate = withAuthenticate(PostPage)(Login);

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <ComponentFromWithAuthenticate />
      </div>
    );
  }
}

export default App;
