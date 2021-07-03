import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Router from './routes/PageRouter';
import './App.css';
import reducer from './reducers';

const store = createStore(reducer, applyMiddleware(thunk));

const Main = () => (
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>
);

ReactDOM.render(<Main />, document.getElementById('root'));
