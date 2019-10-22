import React, { Component } from 'react';
import { login } from '../scripts/login';
import userimg from '../img/user.png';
import Notifications from 'react-notify-toast';

class Login extends Component {

  state = {
    Username: '',
    Password: ''
  }

  handleChange = (event) => this.setState({ [event.target.placeholder]: event.target.value })

  handleClick = (event) => {
    login(this.state.Username, this.state.Password);
    event.preventDefault();
  }

  render() {
    return (
      <div className="login">
        <div className="loginHeader">
          <img src={require('../img/jobsity.png')} alt='Jobsity' algin="center" />
          <p>Bookshelf</p>
        </div>
        <div className="loginFormContainer">
          <img src={userimg} alt='user' algin="center" />
          <div className="loginForm">
            <input type="text" placeholder="Username" onChange={this.handleChange} value={this.state.Username} />
            <input type="password" placeholder="Password" onChange={this.handleChange} value={this.state.Password} />
            <button onClick={this.handleClick}>login</button>
            <Notifications />
            <p>Not registered yet? <a href="/register">Create an account</a></p>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
