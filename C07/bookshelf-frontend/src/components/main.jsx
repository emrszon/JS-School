import React, { Component } from 'react';
import Menu from './menu'
import Trends from './trends'
import BooksContainer from './bookshelf';


class Wrapper extends Component {

  state = {
    location: ''
  }

  getLocation = (dataFromChild) => this.setState({ location: dataFromChild })

  render() {
    return (
      <div className="main">
        <Menu getLocation={this.getLocation} />
        <BooksContainer filter={this.props.filter} location={this.state.location} />
        <Trends />
      </div>
    );
  }
}

export default Wrapper; 