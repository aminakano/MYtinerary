import React, { Component } from 'react';
import '../Styles/SignUpForm.css';
import { connect } from 'react-redux';
import * as actionCreator from '../Store/Actions/actions';
import { Link } from 'react-router-dom';

const initialState = {
    username: "",
    password: "",
    rememberMe: false,
    usernameError: "",
    passwordError: "",
    rememberMeError: ""
  };
class LogInForm extends Component {
    constructor(props){
        super(props);
        this.state = initialState;
            
        console.log(this.props.userLoggedIn)
        // this.onChange = this.onChange.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);
    }
    onChange = event => {
        const isCheckbox = event.target.type === "checkbox";
        this.setState({
          [event.target.name]: isCheckbox
            ? event.target.checked
            : event.target.value
        });
      };

    validate= () =>{
        let usernameError = "";
        let passwordError = "";
        let rememberMeError = "";
    
        if (!this.state.username) {
          usernameError = "Username cannot be blank";
        }
        if (!this.state.password) {
            passwordError = "Password is mandatory";
          }
        if (!this.state.rememberMe) {
           rememberMeError = "Please check it!";
        }
           
        if (usernameError || passwordError ||rememberMeError) {
          this.setState({ usernameError , passwordError ,rememberMeError });
          return false;
        }
   
        return true;
      };
    
    onSubmit= event => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
          console.log(this.state);
          // clear form
          this.setState(initialState);
          this.props.LogInUsers(this.state);
          console.log(this.state)
        }
      };
    render(){
        return(
            <form onSubmit={this.onSubmit} className="signUp">
                <h3>Log in</h3>
                <div className="formParts">
                    <label>Username:</label>
                    <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value ={this.state.username}
                    onChange={this.onChange}/>
                </div>
                <div style={{ fontSize: 12, color: "red" }}>
                            {this.state.usernameError}
                </div>
                <div className="formParts">              
                    <label>Password:</label>
                    <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value ={this.state.password}
                    onChange ={this.onChange}/>
                </div>
                <div style={{ fontSize: 12, color: "red" }}>
                            {this.state.passwordError}
                </div>
                <div className="formParts remember">
                    <input type="checkbox" 
                    id ="checkbox_id"
                    name = "rememberMe"     
                    onChange ={this.onChange}
                    value ={this.state.rememberMe}
                    defaultChecked={false}
                    /> Remember me
                </div>
                <div style={{ fontSize: 12, color: "red" }}>
                            {this.state.rememberMeError}
                </div>
                <button type="submit" className="signUpBtn">OK</button>
                <button className="LogInGoogle"><i className="fab fa-google"></i>&nbsp;Log in with Google</button> 
                
                <p className="leadsToAccount">Don't have a MYtinerary account yet? You should create one! It's totally free and only takes a minute.</p>
                <div className="linkToAccount"><Link to="/Account">Create Account</Link></div>
                <div onClick={this.props.LogOutUser}>logout</div>
            </form>
        );
    }
}
const mapStateToProps =(state)=>{
  
    return {
        userLoggedIn: state.userLoggedIn,
        
    }
}
const mapDispatchToProps =(dispatch)=>{
    return {
        LogInUsers: (user) => {
            dispatch(actionCreator.LogInUsers(user))
        },
        LogOutUser: () => {
          dispatch(actionCreator.UserLoggedOut())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LogInForm);