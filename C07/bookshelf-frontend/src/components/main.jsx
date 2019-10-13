import React, { Component } from 'react';
import Menu from './menu'
import Trends from './trends'
import Bookshelf from './bookshelf';


class Wrapper extends Component {

  state = {
    location: ''
  }

  getLocation = (dataFromChild) => this.setState({ location: dataFromChild })

  render() {
    return (
      <div className="main">
        <Menu getLocation={this.getLocation} />
        <Bookshelf/>
        <Trends />
      </div>
    );
  }
}

export default Wrapper; 