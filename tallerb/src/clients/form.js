import React, {Component} from 'react';
import {saveData} from "./saveData"

export class ClientsForm extends Component{
    state= {
        name: '',
        email: '',
        genre: ''
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
                this.showTempMessage("Ok amio");
                this.resetForm();
            })
            .catch((e)=> this.showTempMessage('Rompi todo amio '+e))
    };

    showTempMessage = (message) => {
        this.setState({
            message: message
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
                    <input name="name" placeholder="Name" type="text" value={this.state.name} onChange={this.handleInputChange}/>
                    <input name="email" placeholder="Email" type="email" value={this.state.email}  onChange={this.handleInputChange}/>
                    <select name="genre" id="genre" onChange={this.handleInputChange} value={this.state.genre}>
                        <option value="" >Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    <p>{this.state.message}</p>
                    <p>{this.state.name}</p>

                    <button type="submit">Submit</button>

                </form>
            </div>
        )

    }

}

