import React, { Component } from 'react';
import '../Styles/SignUpForm.css'
class LogInForm extends Component {
    constructor(props){
        super(props);
        this.state ={
            username: "",
            password: "",
            
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }
    onSubmit(e){
        e.preventDefault();
        console.log(this.state);
        
    }
    render(){
        return(
            <form onSubmit={this.onSubmit} className="signUp">
                <h3>Log in</h3>
                <div className="formParts">
                    <label>Username:</label>
                    <input
                    type="text"
                    name="username"
                    value ={this.state.username}
                    onChange={this.onChange}/>
                </div>
                <div className="formParts">              
                    <label>Password:</label>
                    <input
                    type="text"
                    name="password"
                    value ={this.state.password}
                    onChange ={this.onChange}/>
                </div>
                <div className="formParts remember">
                    <input type="checkbox" id ="checkbox_id"     
                    onChange ={this.onChange}
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

export default LogInForm;