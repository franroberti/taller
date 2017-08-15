import React,{Component} from 'react';




export class TempMessage extends Component{

    state = {
        message: this.props.children
    };

    componentDidMount() {
        this.setState({
            message: this.props.children
        });
        setTimeout(()=>this.setState({
            message: ''
        }),3000);
    }

    render(){
        if (!this.state.message) {
            return null
        }
        return <div className="alert alert-danger" role="alert">{this.state.message}</div>
    }

}