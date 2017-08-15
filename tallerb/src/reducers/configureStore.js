import React from 'react';
import {combineReducers} from 'redux';
import {filter} from './filters';
import {clients} from './clients';
import {createStore} from 'redux';
import {Router, Route} from 'react-router';




export const reducers = combineReducers({
    filter,
    clients
});

export const store = createStore(reducers);

console.log('State:',store.getState());