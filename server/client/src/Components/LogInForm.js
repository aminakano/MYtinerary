import React, { Component } from 'react';
import '../Styles/SignUpForm.css';
import { connect } from 'react-redux';
import * as actionCreator from '../Store/Actions/actions';

const initialState = {
    username: "",
    password: "",
    rememberMe: false,
    usernameError: "",
    passwordError: "",
    
  };
class LogInForm extends Component {
    constructor(props){
        super(props);
        this.state = initialState;
            
        
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
       
    
        if (!this.state.username) {
          usernameError = "Username cannot be blank";
        }
        if (!this.state.password) {
            passwordError = "Password is mandatory";
          }
           
        if (usernameError || passwordError) {
          this.setState({ usernameError , passwordError });
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
                    type="text"
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
                <button type="submit" className="signUpBtn">OK</button>
                <button className="LogInGoogle"><i className="fab fa-google"></i>&nbsp;Log in with Google</button> 
                {/* <button>Log in with Facebook</button>  */}
                <p className="leadsToAccount">Don't have a MYtinerary account yet? You should create one! It's totally free and only takes a minute.</p>
                <div className="linkToAccount"><a href="/Account">Create Account</a></div>
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
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LogInForm);