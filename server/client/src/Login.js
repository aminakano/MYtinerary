import React, { Component } from 'react';
import Hamburger from './Nav';
import UserIcon from './UserIcon';
import LogInForm from '../src/Components/LogInForm'
class Login extends Component {
    render() {
        return (
            <div>
                <Hamburger />
                <UserIcon />
                <LogInForm />
            
            </div>
        );
    }

}

export default Login;