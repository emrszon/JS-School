import React, { Component } from 'react';
import { login } from '../scripts/login'
//import '../css/login.css';


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
      <div className="login-page">
        <div className="login-header">
          <img src={require('../img/jobsity.png')} alt='Jobsity' algin="center" />
          <p>Bookshelf</p>
        </div>
        <div className="login-form">
          <form className="l-login-form" onChange={this.handleChange} onSubmit={this.handleSubmit} >
            <input type="text" placeholder="Username" value={this.state.Username} />
            <input type="password" placeholder="Password" value={this.state.Password} />
            <button>login</button>
            <p className="message">Not registered yet? <a href="/">Create an account</a></p>
          </form>
        </div>
      </div>
    )
  }
}

export default Login;