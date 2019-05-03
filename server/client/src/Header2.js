import React, { Component } from 'react';
import sitelogo from './MYtineraryLogo.png';
import arrow from './right-arrow.png';
import UserIcon from './UserIcon';

class Header extends Component {
    render(){
        const styles ={
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '3% 4% 0'
        };
        
        const pattaya ={
            fontFamily: "'Pattaya', sans-serif"
        }
        return(
            
            <div>
                <div style={styles}>
                    {/* <div className="User">
                    <i className="fas fa-user-circle"></i></div> */}
                    <UserIcon />
                    
                </div>
                <img src={sitelogo} className='Site-logo' alt="logo"/>
                <p className="Italic">Find your perfect trip, designed by insiders who know and love their cities.</p>
                <h4 style={pattaya}>Start Browsing</h4>
                <a href='./Cities'><img src={arrow} className='Right-arrow' alt="to-the-right"/></a>
            </div>
        )
    }
}

export default Header;