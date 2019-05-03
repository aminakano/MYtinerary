import React, { Component } from 'react';
class Hamburger extends Component {
    render(){
        
        return(
        <div className="menu">
            <details>
            
            <summary>
            <div className="Hamburger" ><i className="fas fa-bars"></i></div>
            </summary>
            <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/MYtinerary">MYtinerary</a>
            </li>
            <li>
                <a href="/Cities">Cities</a>
            </li>
            <li>
                <a href="/Account">Account</a>
            </li>
            <li>
                <a href="/Login">Login</a>
            </li>
            </ul> 
            </details>
        </div>
        )
    }

}
export default Hamburger;