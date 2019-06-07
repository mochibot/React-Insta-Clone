import React from 'react';
import styled from 'styled-components';
import './App.scss';
import PostPage from './components/PostContainer/PostPage';
import Login from './components/login/Login';
import withAuthenticate from './components/authentication/withAuthenticate';
//import { library } from '@fortawesome/fontawesome-svg-core';

const ComponentFromWithAuthenticate = withAuthenticate(PostPage)(Login);

const AppDiv = styled.div`
  font-size: 1.6rem;
  margin: 0 auto;
`

class App extends React.Component {

  render() {
    return (
      <AppDiv>
        <ComponentFromWithAuthenticate />
      </AppDiv>
    );
  }
}

export default App;
