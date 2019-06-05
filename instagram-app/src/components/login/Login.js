import React from 'react';

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
      <div>
        <form onSubmit={this.login}>
          <input placeholder='username' onChange={this.userNameInput} value={this.state.input}></input>
          <input placeholder='password'></input>
          <button>Login</button>
        </form>
      </div>
    )
  }
}

export default Login;