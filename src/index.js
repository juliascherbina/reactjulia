import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import SamuraiJSApp from './App';


let RenderEntireTree = (state) => {

  ReactDOM.render(
    <SamuraiJSApp/>,
    document.getElementById('root')
  );

}

RenderEntireTree(store.getState())

reportWebVitals();
//604ee4cf-89e5-4c80-9a2e-5898b57da0d7


