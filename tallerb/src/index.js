import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Root from './root'
import {store} from "./reducers/configureStore"


ReactDOM.render(<Root store={store}/>,document.getElementById('root'));







registerServiceWorker();


