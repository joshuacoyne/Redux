import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers/tasks';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

ReactDOM.render(
    <Provider store={createStore(reducer)}>
        <App />
    </Provider>
    , document.getElementById('root'));

registerServiceWorker();
