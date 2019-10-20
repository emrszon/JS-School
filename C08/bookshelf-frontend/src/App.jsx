import React, { Component } from 'react';
import Login  from './components/Login';
import Register from './components/Register';
import Body from './components/Body';
import Error from './components/Error';
import {Switch, Route} from 'react-router-dom';

function readCookie(name) {
  let key = name + "=";
  let cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];
    while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
    if (cookie.indexOf(key) === 0) {
            return cookie.substring(key.length, cookie.length);
        }
  }
  return null;
}

function isAuth(app){
  if (window.sessionStorage.length === 0){
    return Login;
  } else {
    const expiredSession= new Date()-new Date(readCookie("expires"))
    if((expiredSession/60000)>=(10000/60)){
      window.sessionStorage.clear();
      return Login;
    }else{
      return Body
    }
  }
  //return app;
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch >
        <Route path='/' exact component={isAuth(Login)} />
        <Route path='/register' exact component={Register} />
        <Route path='/main/:city' exact component={isAuth(Body)} />
        <Route path='/main' exact component={isAuth(Body)} />
        <Route path="*" exact component={Error}/>>
        </Switch>
          
      </div>
    );
  }
}

export default App;
