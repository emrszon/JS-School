import React, { Component } from 'react';
import Header from './components/header';
import Main from './components/main';
import Login from './components/login';

import Route from 'react-router-dom/Route'

class Body extends Component {

  state = {
    filter: ''
  }

  getSearch = (dataFromChild) => this.setState({ filter: dataFromChild })

  render() {

    return (
      <>
        <Header getSearch={this.getSearch} />
        <Main filter={this.state.filter} />
      </>

    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/' exact component={Login} />
        <Route path='/main/' exact component={Body} />
      </div>
    );
  }
}

export default App;
