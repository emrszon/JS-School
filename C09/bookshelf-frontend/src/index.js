import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import  {BrowserRouter}  from 'react-router-dom';
import './css/fontpluto.scss'
import './css/normalize.scss'
import { createStore, combineReducers } from 'redux';
import {Provider} from 'react-redux';
import userReducer from './reducers/userReducer';
const allReducers = combineReducers({
    user:  userReducer
});
const store = createStore(
    allReducers, 
    {
        user: {
            search: '',
            diplay: false,
            isList: false
        }
    },
    window.devToolsExtension && window.devToolsExtension()
    
    )
ReactDOM.render(<BrowserRouter>
<Provider store={store}> 

<App/>
</Provider>
</BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
