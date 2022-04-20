import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';


let RenderEntireTree = (state) => {

  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );

}

RenderEntireTree(store.getState())

reportWebVitals();
//604ee4cf-89e5-4c80-9a2e-5898b57da0d7


