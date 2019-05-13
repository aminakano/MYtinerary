import React, { Component } from 'react';
import './Styles/SliderStyle.css';

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
        <div>Coming soon</div>
        )
    }
       
    }
}



export default ShowItinerary;