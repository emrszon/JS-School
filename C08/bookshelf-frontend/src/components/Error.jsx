import React, { Component } from 'react';

class Error extends Component {

  state = {
  }

  
  render() {
    return (
       <div className="login">
        <div className="loginHeader">
          <img src={require('../img/jobsity.png')} alt='Jobsity' algin="center" />
          <p>Bookshelf</p>
        </div>
        <div className="loginFormContainer">
        
            <p>parece que te has perdido <a href="/register">Create an account</a></p>
          
        </div>
      </div>
    )
  }
}

export default Error;