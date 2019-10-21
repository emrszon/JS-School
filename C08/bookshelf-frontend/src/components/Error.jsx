import React, { Component } from 'react';

class Error extends Component {

  state = {
  }

  
  render() {
    return (
       <div className="error">
         <img id="logo" src={require('../img/jobsity.png')} alt='Jobsity' algin="center" />

         <img src={require('../img/error404.jpg')} alt='Jobsity' algin="center" />
        
        <div className="ErrorMessage">
            <p> 404 ERROR <br/> Page not found!!!</p>
            <p>It seems that you are lost, <a href="/main">I can guide you</a></p>
          
        </div>
      </div>
    )
  }
}

export default Error;