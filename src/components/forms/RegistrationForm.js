import React, { Component } from 'react';
import {Button} from 'semantic-ui-react';

class RegistrationForm extends Component {
    constructor() {
        super();
        this.state = {
            data: {
                name: '',
                email: '',
                password: '',
                admin: ''
            }
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.submit(this.state.data);
    }

    onChange(event) {
        this.setState({
            data: {...this.state.data, [event.target.name]: event.target.value}
        })
        
    }

    render() {
        const {data} = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <label htmlFor="name"><b>Name</b></label><br/>
                <input type="name" placeholder="Enter Name" id="name" name="name" value={data.name} onChange = {this.onChange} required/>
                <br/>
                <label htmlFor="email"><b>Email</b></label><br/>
                <input type="email" placeholder="Enter Email" id="email" name="email" value={data.email} onChange = {this.onChange} required/>
                <br/>
                <label htmlFor="password"><b>Password</b></label><br/>
                <input type="password" placeholder="Enter Password" id="password" name="password" value={data.password} onChange = {this.onChange} required/>
                <br/>
                <label htmlFor="admin"><b>Admin</b></label><br/>
                <input type="admin" placeholder="Enter Admin" id="admin" name="admin" value={data.admin} onChange = {this.onChange} required/>
                <br/>
                <Button type="submit" primary>Register</Button>
            </form>
        )
    }
}

export default RegistrationForm