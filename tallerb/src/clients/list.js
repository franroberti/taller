import React, {Component} from 'react';
import {fetchClients} from "../reducers/clients";
import {connect} from 'react-redux';
import Table from './clientsTable';

class ClientsList extends Component {

    componentDidMount(){
        this.props.fetchClients();
    }

    render() {
        return (<Table/>);
    }
}

const mapStateToProps = (state) => ({clients: state.clients});
export default connect(mapStateToProps, {fetchClients})(ClientsList);