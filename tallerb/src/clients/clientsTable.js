import React, {Component} from 'react';
import ClientRow from './clientRow'
import {connect} from 'react-redux';
import {fetchClients} from "../reducers/clients";
import Message from '../messages';
import {store} from "../reducers/configureStore"

class Table extends Component{

    componentDidMount(){
        this.props.fetchClients();
    }

    render(){
        console.log(store.getState());
        if(this.props.clients.length > 0 ){

            return (
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Mail</th>
                        <th>Telefono</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.clients.map((client) => (
                        <ClientRow name={client.name} email={client.email} tel={client.tel}/>
                    ))}
                    </tbody>
                </table>
            );
        }

        return <Message/>;

    }

}

const mapStateToProps = (state) => ({clients: state.clients});
export default connect(mapStateToProps, {fetchClients})(Table);
