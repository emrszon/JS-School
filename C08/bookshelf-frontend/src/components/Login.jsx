import React, { Component } from 'react';
import { login } from '../scripts/login';
import userimg from '../img/user.png';


class Login extends Component {

  state = {
    Username: '',
    Password: '',
  }

  handleChange = (event) => this.setState({ [event.target.placeholder]: event.target.value })

  handleSubmit = (event) => {
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
          <form className="loginForm" onChange={this.handleChange} onSubmit={this.handleSubmit} >
            <input type="text" placeholder="Username" value={this.state.Username} />
            <input type="password" placeholder="Password" value={this.state.Password} />
            <button>login</button>
            <p>Not registered yet? <a href="/register">Create an account</a></p>
          </form>
        </div>
      </div>
    )
  }
}

export default Login;
