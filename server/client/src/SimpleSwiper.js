import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import PostList from './PostList';
import amsterdam from '../src/images/amsterdam.jpg';
import athens from '../src/images/athens.jpg';
import barcelona from '../src/images/barcelona.jpg';
import berlin from '../src/images/berlin.jpg';
import buenos_aires from '../src/images/buenos_aires.jpg';
import london from '../src/images/london.jpg';
import los_angeles from '../src/images/los_angeles.jpg';
import new_york from '../src/images/new_york.jpg';
import paris from '../src/images/paris.jpg';
import rome from '../src/images/rome.jpg';
import stockholm from '../src/images/stockholm.jpg';
import zurich from '../src/images/zurich.jpeg';
class SimpleSwiper extends Component{
  render() {
    const params = {
      slidesPerView: 3,
      spaceBetween: 10,
      slidesPerGroup: 3,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
     
      
    };
    return (
      <Swiper {...params}>
        <div><img src={amsterdam}></img></div>
        <div><img src={athens}></img></div>
        <div><img src={barcelona}></img></div>
        <div><img src={berlin}></img></div>
        
      </Swiper>
    )
  }
}
// const SimpleSwiper = () => (

//   <Swiper>
//     <div><PostList/></div>
    
//   </Swiper>
// )
 
export default SimpleSwiper;