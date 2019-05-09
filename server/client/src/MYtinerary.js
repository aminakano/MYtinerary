import React, { Component } from 'react';
import Hamburger from './Nav';
import { connect } from 'react-redux';
import * as actionCreator from './Store/Actions/actions';

let cityUrl = window.location.pathname.split("/")[2];

class MYtinerary extends Component {
    constructor(){
        super()
        this.state ={
            showItinerary:[],
            title: "Gaudi"
        }
    }
    
    render() {
        // this.setState({showItinerary:this.props.itineraries})
        return (
            <div>
                <Hamburger />
                {/* <h1>MYtinerary</h1> */}
                <p>Available MYtineraries</p>
                <p>{this.state.title}</p>
                {/* <div>
                    {this.props.itineraries}
                </div> */}
            </div>
    
        );
    }
    componentDidMount(){
        this.props.fetchItineraries(cityUrl);
    }
}

const mapStateToProps =(state)=>{
    return {
        itineraries: state.itineraries
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