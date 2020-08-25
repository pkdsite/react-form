import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import RegistrationPage from './components/pages/RegistrationPage';

class App extends Component{
  render() {
    return (
      <section className="login-base">
        <Route path="/" exact component={HomePage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/registration" exact component = {RegistrationPage}/>
      </section>
    )
  }
}

export default App;