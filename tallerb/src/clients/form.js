import React, {Component} from 'react';
import {saveClient} from "./server";
import Message from "../messages";
import {clearMessages, showMessage} from "../reducers/messages";
import {connect} from 'react-redux';
import {store} from "../reducers/configureStore";



class ClientsForm extends Component{
    state= {
        name: '',
        email: '',
        tel: '',
    };
    baseState = this.state;

    handleSubmit=(e) =>{
        e.preventDefault();
        let data = {
            name: this.state.name,
            email: this.state.email,
            tel: this.state.tel
        };
        saveClient(data)
            .then(()=> {
                this.showTempMessage("Guardado correctamente");
                this.resetForm();
                console.log(store.getState());
            })
            .catch((e)=>this.showTempMessage(''+e,true));
    };

    showTempMessage(msg, isError = false){
        this.props.showMessage(msg,isError);
        setTimeout(this.props.clearMessages,3000);
    }



    handleInputChange = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    resetForm = ()=> {
        this.setState(this.baseState);
    };

    render(){
        return(
            <div className="clientsForm">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group col-md-4 col-md-offset-4">
                        <input className="form-control" name="name" placeholder="Name" type="text" value={this.state.name} onChange={this.handleInputChange}/>
                        <input className="form-control"  name="email" placeholder="Email" type="email" value={this.state.email}  onChange={this.handleInputChange}/>
                        <input className="form-control"  name="tel" placeholder="Telefono" type="text" value={this.state.tel}  onChange={this.handleInputChange}/>
                        <Message/>
                        <button className="btn btn-primary" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        )

    }
}

const mapStateToProps = (state) => (state);
const mapDispatchToProps = {showMessage,clearMessages};
const ConnectedClientsForm = connect(mapStateToProps,mapDispatchToProps)(ClientsForm);
export default ConnectedClientsForm;


