import React, { Component } from 'react';
import Menu from './Menu'
import Trends from './Trends'
import Bookshelf from './Bookshelf';
import MenuMobile from './MenuMobile';


class Main extends Component {

  state = {
    location: '',
    display: this.props.display
  }

  getLocation = (dataFromChild) =>  (
 
  this.setState({ location: dataFromChild }),
   this.props.location('0px')
  )

  render() {
    
    if(window.innerWidth<=900){
      return (
        <div className="main">
          <MenuMobile display={this.state.display} getLocation={this.getLocation}/>
          <Bookshelf  search={this.props.getSearch} />
          <Trends />
        </div>
      );
    }
    return (
      <div className="main">
        <Menu  />
        <Bookshelf/>
        <Trends />
      </div>
    );

  }
}

export default Main; 