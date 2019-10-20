import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';

class Body extends Component {

  state = {
    filter: '',
    display: '250px',
    city: this.props.match.params.city
  }


  getSearch = (dataFromChild) => this.setState({ filter: dataFromChild })

  render() {
    
    return (
      <>
        <Header getSearch={this.getSearch} />
        <Main display={this.state.display} search={this.getSearch} city={this.state.city}/>
      </>

    );
  }
}
export default Body;