import React from 'react';
import './Login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      userName: ''
    }
  }

  userNameInput = (event) => {
    this.setState({
      userName: event.target.value
    })
  }

  login = () => {
    localStorage.setItem("isLoggedIn", true);
    localStorage.setItem('userName', this.state.userName);
    this.setState({
      isLoggedIn: true,
    });
  }

  render() {
    return (
      <div className='login'>
        <form className='login-form' onSubmit={this.login}>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png' alt='instagram logo' />
          <img src='https://png.pngtree.com/svg/20170602/user_circle_1048392.png' alt='user-logo'/>
          <input placeholder='username' onChange={this.userNameInput} value={this.state.input} required></input>
          <input placeholder='password' required></input>
          <button>Login</button>
        </form>
      </div>
    )
  }
}

export default Login;