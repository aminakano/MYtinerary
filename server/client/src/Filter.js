import React, { Component } from 'react';
import CityData from './json.json';
import CityDisplay from './CityDisplay';
import { connect } from 'react-redux';
import * as actionCreator from './Store/Actions/actions';

class Filter extends Component{
    constructor(){
        super()
        this.state={
         
           
            filtered:[],
            counter: 0,
        }
       
    }
    
    filterList=(e)=>{
        console.log(e.target.value)
        if(e.target.value == "") {
            this.setState({filtered: this.props.cities})

        } else {
        const updateList = this.props.cities.filter((item)=>{
            return item.cityName.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
        })
        this.setState({filtered: updateList})
        }
    }
    render(){
        if(this.props.citiesIsLoaded == true ){
        this.state.counter++;

            if(this.state.counter == 1){
                this.setState({
                    filtered:this.props.cities
                })
            }    
        }
        //stylings
        const styles={
            width:'90%',
            height:'15vh'
        };    
        const formStyle ={
            display:'flex',
            justifyContent:'center'
        }
     // sorting array ascending
        if(this.props.citiesIsLoaded == true){
            const sortArray = this.state.filtered.sort(function(a,b){
                if(a.cityName < b.cityName) return -1;
                if(a.cityName > b.cityName) return 1;
                return 0;
            })
        return(
            <div>
                <form style={formStyle}>
                     <input type="text" placeholder="Search your destination!" onChange={this.filterList} className="filterText"/>
                     
                </form>
                <div className="cities">                   
                    {sortArray.map((obj, index)=>{
                        return( <div><div className="cityNames">{obj.cityName}</div><img src={obj.image} alt="destinations" style={styles}/></div>)
                    })}
                </div>

            </div>
        )
        } else {
            return (
                <div>Loading...</div>
            )
        }
    }
    componentDidMount(){
        this.props.fetchCities();
    
    }
}

const mapStateToProps =(state)=>{
    return {
        cities: state.cities,
        citiesIsLoaded: state.citiesIsLoaded
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        fetchCities: ()=>dispatch(actionCreator.fetchCities())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);



// {this.state.filtered.map((obj, index)=>{
//     return( <div><div className="cityNames">{obj.name}</div><img src={obj.image} alt="destinations" style={styles}/></div>)
//  })}