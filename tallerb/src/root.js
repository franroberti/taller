import React from 'react';
import App from './App';
import './App.css'
import { Provider } from 'react-redux';
import {store} from './reducers/configureStore';
import {Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom';


const Root = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/" component={App}/>
        </BrowserRouter>
    </Provider>
);
export default Root;