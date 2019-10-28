import React, { Component } from 'react';
import Menu from './Menu'
import Trends from './Trends'
import Bookshelf from './Bookshelf';
import MenuMobile from './MenuMobile';
import Notifications from 'react-notify-toast';
import { withRouter } from 'react-router';
import styled from 'styled-components';


 
const Wrapper= styled.div`
flex-direction: row;
  display: inline-flex;
  height: 100%;
  width: 100%;
`
class Main extends Component {

  state = {

    location: 1,
    city: this.props.city,
    display: this.props.display,
    
  }

  getLocation = (dataFromChild) => (
    this.setState({ location: dataFromChild })

  )

  getCity = (dataFromChild) => (
    this.setState({ changeCity: dataFromChild })
  )


  render() {

    if (window.innerWidth <= 900) { 
      return (
        <Wrapper>
          <MenuMobile display={this.state.display} />
          <Bookshelf search={this.props.search} />
          <Trends/>
      </Wrapper>
      );
    } else{
    return (
      <Wrapper>
        <Notifications />
       <Menu />
        <Bookshelf search={this.props.search}/>
        <Trends/>
      </Wrapper>
    );
}
  }
}

export default withRouter(Main); 
