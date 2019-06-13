import React from 'react';

const Slide = ({ image }) => {
    const styles = {
      backgroundImage: 'url('+ image +')',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100%',
      height: '100%',
      border: '5px solid white'
      
    }
     return <div className="slides" style={styles}></div>
   }
       
export default Slide;