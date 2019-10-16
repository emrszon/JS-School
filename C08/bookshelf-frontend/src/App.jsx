import React, { Component } from 'react';
import Header from './components/header';
import Main from './components/main';
import Login  from './components/login';
import Register from './components/register';
import Route from 'react-router-dom/Route'
class Body extends Component {

  state = {
    filter: '',
    display: '250px'
  }

  getSearch = (dataFromChild) => this.setState({ display: dataFromChild })

  render() {

    return (
      <>
        <Header getSearch={this.getSearch} />
        <Main display={this.state.display} search={this.getSearch}/>
      </>

    );
  }
}
function isAuth(app){
  if (window.sessionStorage.length === 0){
    return Login;
  }
  return app;
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/' exact component={Login} />
        <Route path='/register' exact component={Register} />
        <Route path='/main/' exact component={isAuth(Body)} />
      </div>
    );
  }
}

export default App;
