import React, {Component} from 'react';


class ClientRow extends Component{
    render(){
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.email}</td>
                <td>{this.props.tel}</td>
            </tr>
        );
    }

}

export default ClientRow;
