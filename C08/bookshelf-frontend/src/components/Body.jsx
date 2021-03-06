import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import {withRouter} from 'react-router';

class Body extends Component {

  state = {
    filter: '',
    display: '250px',
    city: this.props.match.params.city,
    location: this.props
  }


  getSearch = (dataFromChild) => this.setState({ filter: dataFromChild })

  render() {
    
    return (
      <>
        <Header getSearch={this.getSearch} />
        <Main display={this.state.display} search={this.state.location} city={this.state.city} />
      </>

    );
  }
}
export default withRouter(Body);