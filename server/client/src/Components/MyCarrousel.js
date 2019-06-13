import React, { Component } from 'react';
import Slide from './Slide';
import amsterdam from '../images/amsterdam.jpg';
import athens from '../images/athens.jpg';
import barcelona from '../images/barcelona.jpg';
import berlin from '../images/berlin.jpg';
import buenos_aires from '../images/buenos_aires.jpg';
import london from '../images/london.jpg';
import los_angeles from '../images/los_angeles.jpg';
import new_york from '../images/new_york.jpg';
import paris from '../images/paris.jpg';
import rome from '../images/rome.jpg';
import stockholm from '../images/stockholm.jpg';
import zurich from '../images/zurich.jpeg';
const imageArray = [
    amsterdam,
    athens,
    barcelona,
    berlin,
    buenos_aires,
    london,
    los_angeles,
    new_york,
    paris,
    rome,
    stockholm,
    zurich,
  ];
function shuffleArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

class MyCarrousel extends Component {
    constructor(props){
        super(props);
        

        this.state = {
            images:[
                amsterdam,
                athens,
                barcelona,
                berlin
            ]};
            
    }
  
    
    componentDidMount = ()  => {
        setInterval(() => this.setState({images: shuffleArray(imageArray)}), 5000);
     }
     render(){
         const styles = {
            display: 'grid',
            gridTemplateRows: '50% 30%',
            width: '80%',
            margin:'0 5% 0 9%'
            
         }
         return(<div className="slider" style={styles}>
            {
            this.state.images.slice(0, 4).map((image, i) => ( 
                <Slide key={i} image={image}  ></Slide>
            )) 
            }  
         </div>);
     }

}


export default MyCarrousel;