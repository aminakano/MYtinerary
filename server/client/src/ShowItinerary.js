import React, { Component } from 'react';
import './SliderStyle.css';
class ShowItinerary extends Component {
    
    render(){
        console.log(this.props.images)
        const imageArray = this.props.images;

        console.log(imageArray)

    if(imageArray != undefined){

        return (
       <div>
           <ul className="MySlider">
        {
            imageArray.map((obj, index)=> (

            <li key={index}><img src={obj}/></li>
        ))
        }
        </ul>
         </div>
        )
    }
    else {
        return (
        <div>No photos</div>
        )
    }
       
    }
}



export default ShowItinerary;