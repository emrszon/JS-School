import React, { Component } from 'react';
import styled from 'styled-components';

const Errorstyle = styled.div`
font-family: PlutoSansBlack;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;      
    width: 100%;
      height: 100%;
    display: flex;
    position: absolute;
  
  
   img{
      
      width: 100%;
      height: 100%;
      position: absolute;
  }
   #logo{
    z-index: 2;
    width: 10%;
    height: 5%;
    position: absolute;
    top: 5%;
    left: 45%;
}
  
  .ErrorMessage {
    position: relative;
    top:30%;
    left: 30%;
    height: 40%;
    width: 40%;
    z-index: 1;
    font-size: 34px;
    background: #6EC1E4;
    padding: 45px;
    text-align: center;
    border-radius: 4px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3), 0 5px 5px 0 rgba(0, 0, 0, 0.34);
    p{
        position: relative;
      font-family: PlutoSansCondRegular;
      text-align: center;
      font-weight: bold;
      color: #FCF8F3;
      padding-bottom: 10px; 
    }
    
  }
`
class Error extends Component {

  state = {
  }


  render() {
    return (
      <Errorstyle>
        <img id="logo" src={require('../img/jobsity.png')} alt='Jobsity' algin="center" />
        <img src={require('../img/error404.jpg')} alt='Jobsity' algin="center" />
        <div className="ErrorMessage">
          <p> 404 ERROR <br /> Page not found!!!</p>
          <p>It seems that you are lost, <a href="/main">I can guide you</a></p>
        </div>
      </Errorstyle>
    )
  }
}

export default Error;