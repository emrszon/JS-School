import React, { Component } from 'react';
import Menu from './Menu'
import Trends from './Trends'
import Bookshelf from './Bookshelf';
import MenuMobile from './MenuMobile';
import Notifications from 'react-notify-toast';


class Main extends Component {

  state = {
    location: '',
    city: this.props.city,
    display: this.props.display
  }

  getLocation = (dataFromChild) =>  (
    this.setState({ location: dataFromChild })
    )

  render() {
    
    if(window.innerWidth<=900){
      return (
        <div className="main">
          <MenuMobile display={this.state.display} getLocation={this.getLocation}/>
          <Bookshelf  search={this.props.getSearch} location={this.state.location} city={this.state.city}/>
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

export default Main; 
