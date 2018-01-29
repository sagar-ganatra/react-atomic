import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './components/root/App';
import './index.css';
// import registerServiceWorker from './registerServiceWorker';

const rootDOM = (
    <Provider store={store}>
        <App />
    </Provider>
);


ReactDOM.render(rootDOM, document.getElementById('root'));
// registerServiceWorker();
