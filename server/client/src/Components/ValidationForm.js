import React, { Component } from 'react';
import '../Styles/SignUpForm.css'

const initialState = {
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
    country:"",
    hasAgreed: "",
    usernameError: "",
    passwordError: "",
    emailError: "",
    firstNameError: "",
    lastNameError: "",
    countryError:"",
    hasAgreedError: "",

  };
const countries=["England",
"Germany",
"France",
"Holland",
"Ireland",
"Spain",
"United States"];

class ValidationForm extends Component {

    state = initialState;

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
        let emailError = "";
        let passwordError = "";
        let countryError ="";
        let hasAgreedError ="";
    
        if (!this.state.username) {
          usernameError = "Username cannot be blank";
        }
    
        if (!this.state.email.includes("@")) {
          emailError = "Invalid email";
        }
        if (!this.state.password) {
            passwordError = "Password is mandatory";
          }
        if(!this.state.country) {
            countryError = "Select your country";
        }
        if(!this.state.hasAgreed){
            hasAgreedError = "You need to agree";
        }
        if (emailError || usernameError || passwordError || countryError ||hasAgreedError) {
          this.setState({ emailError, usernameError , passwordError ,countryError, hasAgreedError});
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
            }
          };


    render(){
        // console.log(this.state)
        const options = countries.map((option, key)=>{
            return(
            <option value={option} key={option}>{option}</option>
            )
        })
        
        return(
            <div>
                <form onSubmit={this.onSubmit} className="signUp">
                    <h3>Create Account</h3>
                    <div className="addPhoto">
                        <label>Add Photo</label>
                        <input type="file"
                        name="avatar"
                        accept=".png, .jpg, .jpeg"/>                   
                    </div>
                    <div className="formParts">
                        <label htmlFor="username">Username:</label>
                        <input type="text" 
                        onChange={this.onChange}
                        value={this.state.username}
                        name="username"
                        placeholder="Username"/>
                        
                    </div>
                    <div style={{ fontSize: 12, color: "red" }}>
                            {this.state.usernameError}
                     </div>
                    <div className="formParts">
                        <label htmlFor="password">Password:</label>
                        <input type="text" 
                        onChange={this.onChange}
                        value={this.state.password}
                        name="password"
                        placeholder="Password"/>
                    </div>
                    <div style={{ fontSize: 12, color: "red" }}>
                            {this.state.passwordError}
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
                    <div style={{ fontSize: 12, color: "red" }}>
                            {this.state.emailError}
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
                    <div style={{ fontSize: 12, color: "red" }}>
                            {this.state.countryError}
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
                    <div style={{ fontSize: 12, color: "red" }}>
                            {this.state.hasAgreedError}
                    </div>
                    <button type="submit" className="signUpBtn">OK</button>
                    
                </form>
            </div>
        );
    }
}

export default ValidationForm;


// import React from "react";

// const initialState = {
//   name: "",
//   email: "",
//   password: "",
//   nameError: "",
//   emailError: "",
//   passwordError: ""
// };

// export default class ValiationForm extends React.Component {
//   state = initialState;

//   handleChange = event => {
//     const isCheckbox = event.target.type === "checkbox";
//     this.setState({
//       [event.target.name]: isCheckbox
//         ? event.target.checked
//         : event.target.value
//     });
//   };

//   validate = () => {
//     let nameError = "";
//     let emailError = "";
//     // let passwordError = "";

//     if (!this.state.name) {
//       nameError = "name cannot be blank";
//     }

//     if (!this.state.email.includes("@")) {
//       emailError = "invalid email";
//     }

//     if (emailError || nameError) {
//       this.setState({ emailError, nameError });
//       return false;
//     }

//     return true;
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     const isValid = this.validate();
//     if (isValid) {
//       console.log(this.state);
//       // clear form
//       this.setState(initialState);
//     }
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <div>
//           <input
//             name="name"
//             placeholder="name"
//             value={this.state.name}
//             onChange={this.handleChange}
//           />
//           <div style={{ fontSize: 12, color: "red" }}>
//             {this.state.nameError}
//           </div>
//         </div>
//         <div>
//           <input
//             name="email"
//             placeholder="email"
//             value={this.state.email}
//             onChange={this.handleChange}
//           />
//           <div style={{ fontSize: 12, color: "red" }}>
//             {this.state.emailError}
//           </div>
//         </div>
//         <div>
//           <input
//             type="password"
//             name="password"
//             placeholder="password"
//             value={this.state.password}
//             onChange={this.handleChange}
//           />
//           <div style={{ fontSize: 12, color: "red" }}>
//             {this.state.passwordError}
//           </div>
//         </div>
//         <button type="submit">submit</button>
//       </form>
//     );
//   }
// }
