import React from 'react';
import {connect} from 'react-redux';

const  Message = ({successMessage, errorMessage}) => {
   if(errorMessage) {
       return <div className="alert alert-danger" role="alert">{errorMessage}</div>
   }
   if(successMessage){
       return <div className="alert alert-success" role="alert">{successMessage}</div>
   }
   return null;
};

const mapStateToProps = (state) => (state.messages);
const ConectedMessage = connect(mapStateToProps)(Message);

export default ConectedMessage;