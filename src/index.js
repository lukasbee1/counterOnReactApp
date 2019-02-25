import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { searchRobots, changeCount } from './reducers/reducers';
import 'tachyons';

const rootRedicer = combineReducers({ searchRobots, changeCount })
const store = createStore(rootRedicer)

ReactDOM.render(
            <Provider store={store}>
                <App />
            </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
