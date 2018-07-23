import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {HashRouter} from 'react-router-dom';
import {createStore} from 'redux';
import reducer from './reducers/reducer';
import {Provider} from 'react-redux';

const store = createStore(reducer);

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById('root'));
registerServiceWorker();
