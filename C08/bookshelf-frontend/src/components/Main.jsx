import React, { Component } from 'react';
import Menu from './Menu'
import Trends from './Trends'
import Bookshelf from './Bookshelf';
import MenuMobile from './MenuMobile';
import Notifications from 'react-notify-toast';
import {withRouter} from 'react-router';

class Main extends Component {

  state = {

    location: this.props.match,
    city: this.props.city,
    display: this.props.display,
    changeCity: ""
  }

  getLocation = (dataFromChild) =>  (
    this.setState({ location: dataFromChild })
    
    )

  getCity = (dataFromChild) =>  (
      this.setState({ changeCity: dataFromChild })
      )

      
  render() {
    
    if(window.innerWidth<=900){
      return (
        <div className="main">
          <MenuMobile display={this.state.display} getCity={this.getCity} location={this.state.location} />
          <Bookshelf  search={this.props.getSearch} location={this.state.changeCity} city={this.state.city}/>
          <Trends />
        </div>
      );
    }
    return (
      <div className="main">
        <Notifications />
        <Menu />
        <Bookshelf city={this.state.city}/>
        <Trends />
      </div>
    );

  }
}

export default withRouter(Main) ; 
