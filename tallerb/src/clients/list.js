import React, {Component} from 'react';
import Message from '../messages';
import {fetchClients} from "../reducers/clients";
import {connect} from 'react-redux';
class ClientsList extends Component {

    componentDidMount(){
        this.props.fetchClients();
    }

    render() {
        if (this.props.clients) {
            return (<ul>
                {this.props.clients.map((client) => (
                    <li key={client._id}>{client.name} - {client.email}</li>
                ))}
            </ul>);
        }
        return <Message/>;
    }
}

const mapStateToProps = (state) => ({clients: state.clients});
export default connect(mapStateToProps, {fetchClients})(ClientsList);