import React, { Component } from 'react';
import Hamburger from './Nav';
import UserIcon from './UserIcon';
import { connect } from 'react-redux';
import * as actionCreator from './Store/Actions/actions';

let cityUrl = window.location.pathname.split("/")[2];

class MYtinerary extends Component {
    constructor(){
        super()
        this.state ={
            showItinerary:[],          
            
        }
    }
    
    
    render() {
        const styles = {
            border: '1px solid black',
            height:'20vh',
            display:'flex',
            flexDirection: 'column'
        }
        const style2 ={
            display:'flex',
            justfyContent: 'space-between'
        }
        const style3 ={
            background: 'gray',
            height: '10vh',
            textAlign: 'center'
        }
        const style4 = {
            width: '30%'
        }
        const style5 = {
            width: '70%'
        }
        const style6 ={
            width: '6em',
            height: '6em',
            borderRadius: '50%'
        }
        const style7 ={
            display: 'flex',
            justifyContent: 'space-around',
            
        }
        // const updateList = this.setState({showItinerary:this.props.itineraries})
       
        // itinerariesToShow=(city)=>{
        //     if(location.pathname == "/MYtinerary/"+ city){

        //     }
        // }
        return (
            <div>
                <Hamburger /> 
                <UserIcon />            
                <p>Available MYtineraries</p>
                
               {this.props.itineraries.map((obj, index)=>{
                   return (
                   <div>
                       <div>{obj.city}</div>
                        <div style={styles}>
                            <div style={style2}>
                                <div style={style4}><img src={obj.profilePic}alt="user" style ={style6}></img></div>
                                <div style={style5}>
                                    <div><h5>{obj.title}</h5></div> 
                                    <div style={style7}>
                                        <div>Likes:{obj.rating}</div>
                                        <div>{obj.duration}Hours</div>
                                        <div>{obj.price}</div>
                                    </div>
                                <div>{obj.hashtag}</div>
                                </div>
                            </div>
                            <div style={style3}>View All</div>
                        </div>
                        
                   </div>
                   )
                })}
               <div><a href="/Cities">Choose another city...</a></div>
            </div>
    
        );
    }
    componentDidMount(){
        this.props.fetchItineraries(cityUrl);
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