import React, { Component } from 'react';
import propTypes from 'prop-types';
import {Button} from 'semantic-ui-react';

class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            //creating the data variable that holds the email and password to be passed on
            data: {
              email: '',
              password: ''
            },
            loading: false,
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
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
            <form onSubmit = {this.onSubmit}>
                <label htmlFor="email"><b>Email</b></label><br/>
                <input type="email" placeholder="Enter Email" id="email" name="email" value={data.email} onChange = {this.onChange} required/>
                
                <br/><br/>
                <label htmlFor="password"><b>Password</b></label><br/>
                <input type="password" placeholder="Enter Password" id="password" name="password" value={data.password} onChange = {this.onChange} required/>

                <br/><br/>
                <Button type="submit" primary>Login</Button>
            </form>

        )
    }
}

LoginForm.propTypes = {
    submit: propTypes.func.isRequired
  };

export default LoginForm