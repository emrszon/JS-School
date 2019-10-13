import React, { Component } from 'react';
import { lend } from '../scripts/reservation'
//import '../css/login.css';


class LendForm extends Component {

  state = {
    duration: '',
  }

  handleChange = (event) => this.setState({ [event.target.placeholder]: event.target.value })

  handleSubmit = (event) => {
    if(this.state.duration===''){}else{
    lend(this.props.book.id, this.state.duration);
    event.preventDefault();}
  }

  render() {
    return (
      <div className="login-page">
        <div className="login-header">
          <p>Bookshelf</p>
        </div>
        <div className="login-form">
          <form className="l-login-form" onChange={this.handleChange} onSubmit={this.handleSubmit} >
            <input type="text" placeholder="duration" value={this.state.duration} />
            <button>Lend</button>
          </form>
        </div>
      </div>
    )
  }
}

export default LendForm;