import React from 'react';
import {connect} from 'react-redux';

const  Message = ({successMessage, errorMessage}) => {
    const type = errorMessage ? 'danger' : 'success';
    if(successMessage || errorMessage){
        return <div className={"alert alert-"+type} role="alert">{errorMessage}</div>;
    }
   return null;
};

const mapStateToProps = (state) => (state.messages);
const ConectedMessage = connect(mapStateToProps)(Message);

export default ConectedMessage;