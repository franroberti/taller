import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Root from './root'
import {store} from "./reducers/configureStore"


const render=() =>{
    ReactDOM.render(<Root store={store}/>,document.getElementById('root'));

};

store.subscribe(render);



render();


const state = () =>{
    console.log('State:',store.getState());
};

store.subscribe(state);
//setTimeout(state, 4000);






registerServiceWorker();


