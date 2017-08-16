import React, {Component} from 'react';
import {saveData} from "./saveData";
import {Message} from "../messages";
import {showMessage} from "../reducers/messages";
import {store} from "../reducers/configureStore";

export class ClientsForm extends Component{
    state= {
        name: '',
        email: '',
        genre: '',
        message: this.props.message
    };
    baseState = this.state;

    handleSubmit=(e) =>{
        e.preventDefault();
        let data = {
            name: this.state.name,
            email: this.state.email,
            genre: this.state.genre
        };
        saveData(data)
            .then(()=> {
                this.showTempMessage("Ok");
                this.resetForm();
            })
            .catch((e)=> this.showTempMessage("-",e))
    };

    showTempMessage = (message) => {
        this.setState({
            message: 'error'
        });
        setTimeout(()=>this.setState({
            message: ''
        }),3000);
    };


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
                        <select className="form-control"  name="genre" id="genre" onChange={this.handleInputChange} value={this.state.genre}>
                            <option value="" >Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                        <Message/>
                        <button className="btn btn-primary" type="submit">Submit</button>

                    </div>
                </form>
            </div>
        )

    }

}

