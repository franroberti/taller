const SUCCESS_MESSAGE = 'SUCCESS_MESSAGE';
const ERROR_MESSAGE = 'ERROR_MESSAGE';

let initialState = {
    successMessage: '',
    errorMessage: ''

};


export const  messages = (state = initialState, action) =>{
    switch (action.type){
        case SUCCESS_MESSAGE:
            return {...state, successMessage: action.payload};
        case ERROR_MESSAGE:
            return {...state,  errorMessage: action.payload};
        default:
            return state
    }

};


export const showMessage = (msg, error=false) => {
    let messageType = error ? ERROR_MESSAGE : SUCCESS_MESSAGE;
    return {type: messageType, payload: msg}

};

