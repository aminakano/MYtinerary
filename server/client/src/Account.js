import React, { Component } from 'react';
import Hamburger from './Nav';
import UserIcon from './UserIcon';
// import SignUpForm from '../src/Components/SignUpForm';
import ValidationForm from '../src/Components/ValidationForm';
class Account extends Component {
    constructor(props){
        super(props);
        
    }
    render() {
        return (
            <div>
                <Hamburger />
                <UserIcon />
                
                {/* <SignUpForm /> */}
                <ValidationForm />
            </div>
        );
    }

}

export default Account;