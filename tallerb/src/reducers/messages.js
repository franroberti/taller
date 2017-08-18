const SUCCESS_MESSAGE = 'SUCCESS_MESSAGE';
const ERROR_MESSAGE = 'ERROR_MESSAGE';
const CLEAR_MESSAGES = 'CLEAR_MESSAGES';
let initialState = {
    successMessage: '',
    errorMessage: ''

};


export const  messages = (state = initialState, action) =>{
    switch (action.type){
        case SUCCESS_MESSAGE:
            return {successMessage: action.payload, errorMessage: ''};
        case ERROR_MESSAGE:
            return {errorMessage: action.payload, successMessage: ''};
        case CLEAR_MESSAGES:
            return {errorMessage: '', successMessage: ''};
        default:
            return state
    }

};


export const showMessage = (msg, error=false) => {
    let messageType = error ? ERROR_MESSAGE : SUCCESS_MESSAGE;
    return {type: messageType, payload: msg};
};


export const clearMessages =  () => {
    return {type: CLEAR_MESSAGES, payload:''}
};