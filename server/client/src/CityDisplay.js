import React, { Component } from 'react';
import CityData from './json.json';

class CityDisplay extends Component 
    
{
    constructor(props){
    super(props);

    console.log(this.props)
    
    }
    render(){
        const styles={
            width:'90%',
            height:'15vh'
        }
        return(
            <div className="cities">
                {CityData.map((postDetail, index)=>{
                    return( <div><div className="cityNames">{postDetail.name}</div><img src={postDetail.image} alt="destinations" style={styles}/></div>)
                 })}
                  

            </div>
         );
    }
    
}


export default CityDisplay;