import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './components/App';
import appReducer from './reducers';

const store = createStore(appReducer);

ReactDOM.render(<App store={store} />, document.getElementById('root'));

