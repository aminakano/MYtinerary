import React, { Component } from 'react';
class Hamburger extends Component {
    render(){
        return(
        <div className="Nav">
            <input id="menu-cb" type="checkbox" value="off"/>
            <label id="menu-icon" htmlFor="menu-cb"><i className="fas fa-bars"></i></label>
            <label id="menu-background" htmlFor="menu-cb"></label>
            <div id="ham-menu">
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
            </div>
        </div>
        )
    }

}
export default Hamburger;