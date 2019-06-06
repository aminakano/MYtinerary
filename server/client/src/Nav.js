import React, { Component } from 'react';
import './Styles/Nav.css'
import { Link } from 'react-router-dom';

class Hamburger extends Component {
    render(){
        return(
        
        <div className="Nav">
            <input id="menu-cb" type="checkbox" value="off"/>
            <label id="menu-icon" htmlFor="menu-cb"><i className="fas fa-bars"></i></label>
            <label id="menu-background" htmlFor="menu-cb"></label>
            <div id="ham-menu">
                <ul className="navLink">
                    <li>
                        <Link to="/">Home</Link>         
                    </li>
                    <li>                       
                        <Link to="/MYtinerary/:city">MYtinerary</Link>
                    </li>
                    <li>                      
                        <Link to="/Cities">Cities</Link>    
                    </li>
                    <li>                        
                        <Link to="/Account">Account</Link>
                    </li>
                    <li>                        
                        <Link to="/Login">Login</Link>
                    </li>
                </ul> 
            </div>
        </div>
        
        
        )
    }

}
export default Hamburger;