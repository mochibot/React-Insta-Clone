import React from 'react';
import { LoginDiv, LoginForm, LoginButton } from './LoginStyles'
import users from './users'
import './Login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      username: '',
      password: ''
    }
  }

  usernameInput = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  passwordInput = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  login = () => {
    if (users.every(item => item.username !== this.state.username)) {
      alert('user is not in the system');
    } else {
      let index; 
      users.forEach((item, i) => {
        if(item.username === this.state.username) {
          index = i;
        }
      })
      if (users[index].username === this.state.username && users[index].password === this.state.password) {
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem('username', this.state.username);
        localStorage.setItem('password', this.state.password);
        this.setState({
          isLoggedIn: true,
        });
      } else {
        alert('wrong password. ask penny fo login');
      } 
    }
  }

  render() {
    return (
      <LoginDiv>
        <LoginForm onSubmit={this.login}>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png' alt='instagram logo' />
          <img src='https://png.pngtree.com/svg/20170602/user_circle_1048392.png' alt='user-logo'/>
          <input placeholder='username' onChange={this.usernameInput} value={this.state.username} required></input>
          <input placeholder='password' onChange={this.passwordInput} value={this.state.password} required></input>
          <LoginButton>Login</LoginButton>
        </LoginForm>
      </LoginDiv>
    )
  }
}

export default Login;