import React from 'react';
import {connect} from 'react-redux'




export const Message = ({messages}) => (
    messages ? <div className="alert alert-danger" role="alert">{messages}</div> : null

);

export default connect(
    (state) => ({messages: state.messages})
)(Message)