import React, { Component } from 'react';
import Hamburger from './Nav';
import UserIcon from './UserIcon';
import CityData from './json.json';
import CityDisplay from './CityDisplay';
import Filter from './Filter';
class Cities extends Component {
    render() {
        const styles={
            width:'90%',
            height:'15vh'
        }
        return (
            <div className="">
                <UserIcon />
                <Hamburger />
                <p className="cityPageMsg">Filter our current cities:</p> 
                <Filter />
                {/* <CityDisplay/> */}
            </div>
    
        );
    }

}

export default Cities;