import React, { Component } from 'react';
import { register } from '../scripts/register';


class Register extends Component {

  state = {
    Username: '',
    Password: '',
  }

  handleChange = (event) => this.setState({ [event.target.placeholder]: event.target.value })

  handleSubmit = (event) => {
    register(this.state.Username, this.state.Password);
    event.preventDefault();
  }

  render() {
    return (
      <div className="register">
        <div className="registerHeader">
          <img src={require('../img/jobsity.png')} alt='Jobsity' algin="center" />
          <p>Bookshelf</p>
        </div>
        <div className="registerFormContainer">
          <form className="registerForm" onChange={this.handleChange} onSubmit={this.handleSubmit} >
            <input type="text" placeholder="Username" value={this.state.Username} />
            <input type="password" placeholder="Password" value={this.state.Password} />
            <button>Register</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Register;
