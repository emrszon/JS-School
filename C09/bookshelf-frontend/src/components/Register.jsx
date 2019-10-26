import React, { Component } from 'react';
import { register } from '../scripts/register';
import styled from 'styled-components';

const Registerstyle = styled.div`

font-family: PlutoSansBlack;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;      
width: 460px;
padding: 8% 0 0;
margin: auto;

img{
  display: block;
  margin: 0 auto;
  max-width: 300px;
  width: auto;
  height: auto;
}

p{
 text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 34px;
  color: #231F20;
  padding-bottom: 10px; 
}
.registerFormContainer {
position: relative;
z-index: 1;
background: #6EC1E4;
margin: 0 auto ;
padding: 45px;
text-align: center;
border-radius: 4px;
box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3), 0 5px 5px 0 rgba(0, 0, 0, 0.34);
}

.registerForm {
position: relative;
z-index: 1;
background: #231F20;
margin: 0 auto ;
padding: 45px;
text-align: center;
border-radius: 4px;
box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3), 0 5px 5px 0 rgba(0, 0, 0, 0.34);

input {
font-family: PlutoSansCondRegular;
outline: 0;
background: #FCF8F3;
border-radius: 4px;
width: 100%;
border: 0;
margin: 0 0 15px;
padding: 15px;
box-sizing: border-box;
font-size: 14px;
}
button {
text-transform: uppercase;
width: 100%;
border-radius: 8px;
padding: 15px;
color: #FFFFFF;
background: #6EC1E4;
font-size: 24px;
-webkit-transition: all 0.3 ease;
transition: all 0.3 ease;
cursor: pointer;
-webkit-border-radius: 8px;
-moz-border-radius: 8px;
-ms-border-radius: 8px;
-o-border-radius: 8px;
}
button:hover{
color: #231F20; 
}
}
`

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
      <Registerstyle>
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
      </Registerstyle>
    )
  }
}

export default Register;
