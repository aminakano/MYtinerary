import React, { Component } from 'react';
import Hamburger from './Nav';
import UserIcon from './UserIcon';
import { connect } from 'react-redux';
import * as actionCreator from './Store/Actions/actions';
import ShowItinerary from './ShowItinerary';
import './Styles/Mytinerary.css';

let cityUrl = window.location.pathname.split("/")[2];


class MYtinerary extends Component {
    constructor(){
        super()
        this.state ={
            itineraries:{},          
            
        };
    }
    componentDidMount(){
        this.props.fetchItineraries(cityUrl);
    }
    isObjectEmpty = (obj)=>{
        if(Object.keys(obj).length === 0){
            return true
        }else{
            return false
        }
    }    
    
    
    render() {
       
        const margin = {
            margin: '0'
        }
        
        if(this.isObjectEmpty(this.props.itineraries)=== false ){
            const itineraries = this.props.itineraries.itineraries;
       
        return (
            <div>
                <Hamburger /> 
                <UserIcon />                       {this.props.itineraries.cities.map((obj,index)=>{
                    return (
                    <div>                      
                         <img src={obj.image} className="cover"/>
                         <div className="coverName">{obj.cityName}</div>
                    </div>
                    )
                })}
                 <p className="paddingLeft">Available MYtineraries</p>
               {itineraries.map((obj, index)=>{
                   return (
                   <div>
                      
                        <div className="itinerary-result">
                            <div className="style2">
                                <div className="style4"><img src={obj.profilePic}alt="user" className="style6"></img><p style={margin}>{obj.user}</p></div>
                                <div className="style5">
                                    <div><h5>{obj.title}</h5></div> 
                                    <div className="style7">
                                        <div>Likes:{obj.rating}</div>
                                        <div>{obj.duration}Hours</div>
                                        <div>{obj.price}</div>
                                    </div>
                                <div>{"#"+obj.hashtag.join(" #")}</div>
                                </div>
                            </div>
                            
                            <details className="style3">
                                <summary></summary>
                                <ShowItinerary images={obj.photos}/>
                            </details>
                            
                        </div>
                        
                   </div>
                   )
                })}
               {/* <div><a href="/Cities">Choose another city...</a></div> */}
            </div>
    
        );
    }else{
        return(
            <div>Loading...</div>
        )
    }
    }
   
}

const mapStateToProps =(state)=>{
    return {
        itineraries: state.itineraries,
        
    }
}
const mapDispatchToProps =(dispatch)=>{
    return {
        fetchItineraries: (city) => {
            dispatch(actionCreator.fetchItineraries(city))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MYtinerary);