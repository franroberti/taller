import React from 'react';

const  Message = ({message,isError=false}) => {
    const type = (isError) ? 'danger' : 'success';
    if(message){
        return <div className={"alert alert-"+type} role="alert">{message}</div>;
    }
   return null;
};

export default Message;