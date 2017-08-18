import React from 'react';
import {connect} from 'react-redux';

const  Message = ({successMessage, errorMessage}) => {
    const type = errorMessage ? 'danger' : 'success';
    const message = errorMessage ? errorMessage : successMessage;
    if(successMessage || errorMessage){
        return <div className={"alert alert-"+type} role="alert">{message}</div>;
    }
   return null;
};

const mapStateToProps = (state) => (state.messages);
const ConectedMessage = connect(mapStateToProps)(Message);

export default ConectedMessage;