import React, { Component } from 'react';
import CityData from './json.json';


class PostList extends Component {
 
  render() {
    
    return (
    
      <div className="Popular">
      {CityData.map((postDetail, index)=>{
          return( <div>{postDetail.name}<img src={postDetail.image} alt="destinations"/></div>)
      })}

      </div>
    );
  
   
  }
}

export default PostList;
