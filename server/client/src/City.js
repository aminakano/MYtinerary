import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class City extends Component {
  
  render() {
    const { city } = this.props;
    
    const name =
      city.cityName.charAt(0).toLowerCase() +
      city.cityName
        .slice(1)
        .replace(/\s+/g, "")
        .toLowerCase();
      
    const route = `/MYtinerary/${name}`;
    const styles = {
      width: "90%",
      height: "15vh"
    };

    return (
      <NavLink to={route}>
        <div className="city">
          <div className="cityNames"> {city.cityName} </div>
          <img src={city.image} alt="destinations" style={styles} />
        </div>
      </NavLink>     
    );
  }
}

export default City;
