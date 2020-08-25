import React, { Component } from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import LoginForm from '../forms/LoginForm';

class LoginPage extends Component {

    submit(data) {
        //This calls the URL to submit the post request.
    axios.post('http://localhost:3000/api/login',{
        email:data.email,
        password:data.password
      })
      .then(function(response){
        var email = response.data.email;
        //This part is responsible for the window navigation after login.
        // eslint-disable-next-line
        response.data.success
        ?  (document.getElementById('status').innerHTML = "Login Successfull! You are being redirected to landing page in 5 seconds.",setTimeout(() => {window.location.replace('/landing?name='+ email)},5000))
        : document.getElementById('status').innerHTML = response.data.message;
      });
    }

    render() {
        return (
            <div>
                <h1>Login Page</h1>
                <LoginForm submit={this.submit} />
                <p id="status"></p>
                <p>Make a new account? Right here.</p>
                <Link to="/registration" className="button">Registration</Link>
            </div>
        )
    }
}

export default LoginPage