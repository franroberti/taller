import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'


export default class NavBar extends Component{
    render(){
        return (
            <nav className="navbar navbar-default navbar-static-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                    </button>
                    <a className="navbar-brand" href="/">React</a>
                </div>
                    <ul className="nav navbar-nav">
                        <li><NavLink exact  to="/">Home</NavLink></li>
                        <li><NavLink  to="/add-client">Add Client</NavLink></li>
                    </ul>
                </div>
            </nav>
        );
    }
        
    
}