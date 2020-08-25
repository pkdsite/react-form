import React, { Component } from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import RegistrationForm from '../forms/RegistrationForm';

class RegistrationPage extends Component {
    submit(data) {
        axios.post('/registration', {
            name:data.name,
            email:data.email,
            password:data.password,
            admin:data.admin
        }).then(response => {
            // eslint-disable-next-line
            response.data.success
            ? (document.getElementById('status').innerHTML = "Registration Successfull! You are being redirected to login in 2 seconds.",setTimeout(() => {window.location.replace('/login')},2000))
            : document.getElementById('status').innerHTML = response.data.message
        });
    }
    render() {
        return (
            <div>
                <h1>Registration Page</h1>
                <RegistrationForm submit={this.submit}/>
                <p id="status"></p>
                <Link to="/" className="button">Back to Home</Link>
            </div>
        )
    }
}

export default RegistrationPage