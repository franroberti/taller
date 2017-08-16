import React from 'react'
import {connect} from 'react-redux'
const MESSAGE_SHOW = 'MESSAGE_SHOW';

export const messages = (state = 'qwerty', action) =>{
    switch (action.type){
        case MESSAGE_SHOW:
            return action.payload;
        default:
            return state
    }

};


export const showMessage = (msg) => ({type: MESSAGE_SHOW, payload: msg });

