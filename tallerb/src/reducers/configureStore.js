import {combineReducers,applyMiddleware} from 'redux';
import {messages} from './messages';
<<<<<<< HEAD
import {clients} from "./clients";
=======
import {clientsForm} from "./clientsForm";
>>>>>>> b07c2f36896c1d84695955d9c82727000e0dc680
import {createStore} from 'redux';
import thunk from 'redux-thunk';




export const reducers = combineReducers({
<<<<<<< HEAD
    messages,clients
=======
    messages,
    clientsForm
>>>>>>> b07c2f36896c1d84695955d9c82727000e0dc680
});

export const store = createStore(reducers, applyMiddleware(thunk));





