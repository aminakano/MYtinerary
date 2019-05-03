import React, { Component } from 'react';
import sitelogo from './MYtineraryLogo.png';
import home from './homeIcon.png';
import arrow from './right-arrow.png';
class Header extends Component {
    render(){
        const styles ={
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '3% 4% 0'
        };
        
        return(
            
            <div>
                <div style={styles}>
                    <div className="User"><i class="fas fa-user-circle"></i></div>
                    <div><img src={home} alt="home" className="Home"/></div>
                </div>
                <img src={sitelogo} className='Site-logo' alt="logo"/>
                <p className="Italic">Find your perfect trip, designed by insiders who know and love their cities.</p>
                <img src={arrow} className='Right-arrow' alt="to-the-right"/>
                <p className="Left">Popular MYtineraries</p>
            </div>
        )
    }
}

export default Header;