const SHOW_MESSAGE = 'SUCCESS_MESSAGE';
const CLEAR_MESSAGES = 'CLEAR_MESSAGES';

let initialState = {
    message: '',
    error: false
};


export const  messages = (state = initialState, action) =>{
    switch (action.type){
        case SHOW_MESSAGE:
            return {message: action.payload, error: action.error};
        case CLEAR_MESSAGES:
            return {message: '', error: false};
        default:
            return state
    }

};


export const showMessage = (msg, error=false) => {
    return {type: SHOW_MESSAGE, payload: msg, error: error};
};


export const clearMessages =  () => {
    return {type: CLEAR_MESSAGES};
};