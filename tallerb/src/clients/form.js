import React, {Component} from 'react';
import {saveData} from "./saveData"

export class ClientsForm extends Component{
    state= {};


    handleSubmit=(e) =>{
        e.preventDefault();
        saveData()
            .then(()=> console.log("Guarde amio"))
            .catch((e)=> console.log('Rompi todo amio',e))

    }
    handleInputChange = (e)=>{
        this.setState({
            name: e.target.value

        })
    }

    render(){
        return(
            <div className="clientsForm">
                <form onSubmit={this.handleSubmit}>
                    <input name="name" placeholder="Name" type="text" onChange={this.handleInputChange}/>
                    <input name="email" placeholder="Email" type="email" />
                    <select name="genre" id="genre">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    <h1>{this.state.name}</h1>
                    <button type="submit">Submit</button>

                </form>
            </div>
        )

    }

}

