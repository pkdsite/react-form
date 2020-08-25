import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class HomePage extends Component{
    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <Link to="/login" className="button">Log In</Link>
                <br/>
                <Link to="/registration" className="button">Registration</Link>
            </div>
        )
    }
}

export default HomePage;