import React, { Component } from 'react';
import '../Styles/SignUpForm.css'

const countries=[
        "England",
        "Germany",
        "France",
        "Holland",
        "Ireland",
        "Spain",
        "United States"];

class SignUpForm extends Component {
    constructor(props){
        super(props);
        this.state ={
            username: "",
            password: "",
            email: "",
            firstName: "",
            lastName: "",
            country:"",
            hasAgreed: "",
            // value: "",
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e){      
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
        [name]: value
        });
        // let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        // this.setState({[e.target.name]:e.target.value});      
        // this.setState({value:e.target.value});
    }
    onSubmit(e){
        e.preventDefault();
        console.log(this.state);
        if (this.state.username == "") {
           console.log("Username Cannot be empty!");
          }
        if (this.state.hasAgreed == "" || false){
            alert("You need to agree!")
        }
        
    }
    
    render(){
        
        const options = countries.map((option,i)=>{
            return(
                <option value={option} key={option}>{option}</option>
            )
        })
        
        return(
            <form onSubmit={this.onSubmit} className="signUp" encType="multipart/form-data">
                <h3>Create Account</h3>
                <div className="addPhoto">
                    <label>Add Photo</label>
                    <input type="file"
                    name="avatar"
                    accept=".png, .jpg, .jpeg"/>                   
                </div>
                <div className="formParts">
                    <label>Username:</label>
                    <input
                    id='username'
                    type="text"
                    name="username"
                    placeholder="Username"
                    value ={this.state.username}
                    onChange={this.onChange}/>
                </div>
               
                <div className="formParts">              
                    <label>Password:</label>
                    <input
                    id='password'
                    type="password"
                    name="password"
                    placeholder="Password"
                    value ={this.state.password}
                    onChange ={this.onChange}/>
                </div>
                <div className="formParts">
                    <label>Email:</label>
                    <input
                    id='email'
                    type="text"
                    name="email"
                    placeholder="Email"
                    value ={this.state.email}
                    onChange = {this.onChange}/>
                </div>
                <div className="formParts">
                    <label>First Name:</label>
                    <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value ={this.state.firstName}
                    onChange = {this.onChange}/>
                </div>
                <div className="formParts">
                    <label>Last Name:</label>
                    <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value ={this.state.lastName}
                    onChange ={this.onChange}/>
                </div>
                <div className="formParts">
                    <label>Country:</label>
                    <select
                    id="value"
                    name="country"
                    value ={this.state.country}
                    onChange ={this.onChange} multiple={false} >
                        <option value="" disabled>Choose your country</option>
                        {options}                    
                    </select>
                </div>
                <div className="formParts">                   
                        <input id ="checkbox_id" type="checkbox" name="hasAgreed"
                        onChange ={this.onChange}
                        value={this.state.hasAgreed}
                        defaultChecked={false} 
                        />
                        <label htmlFor="checkbox_id" className="TandC">I agree to MYtinerary's &nbsp;<a href="">Terms and Conditions</a>
                    </label>
                </div>
                <button type="submit" className="signUpBtn">OK</button>
            </form>
        );
    }

}

export default SignUpForm;



// if (e.target.id == 'username' )
// this.setState({username:e.target.value});
// if (e.target.id == 'password')
// this.setState({password:e.target.value});
// if (e.target.id == 'email')
// this.setState({email:e.target.value});
// if (e.target.id == 'firstName')
// this.setState({firstName:e.target.value});
// if (e.target.id == 'lastName')
// this.setState({lastName:e.target.value});
// if (e.target.id == 'value')
// this.setState({value:e.target.value});
// if (e.target.id == 'checkbox_id'){
//     if(e.target.checked == true)
//     this.setState({checkbox_id:e.target.value});
// }