import React, { Component } from 'react';
import CityData from './json.json';
import CityDisplay from './CityDisplay';

class Filter extends Component{
    constructor(){
        super()
        this.state={
            all:[  
                {  
                   "name":"Buenos Aires",
                   "country":"Argentina",
                   "image":"https://i.ibb.co/KjrSCJG/buenos-aires.jpg"
                },
                {  
                   "name":"Amsterdam",
                   "country":"Netherlands",
                   "image":"https://i.ibb.co/FKHmh6j/amsterdam.jpg"
             
                },
                {  
                   "name":"New York",
                   "country":"United States",
                   "image":"https://i.ibb.co/0ZgcGL0/new-york.jpg"
                },
                {  
                   "name":"Los Angeles",
                   "country":"United States",
                   "image":"https://i.ibb.co/j30RGJx/los-angeles.jpg"
                },
                {  
                   "name":"Athens",
                   "country":"Greace",
                   "image":"https://i.ibb.co/X8PZnc9/athens.jpg"
                },
                {  
                   "name":"Barcelona",
                   "country":"Spain",
                   "image":"https://i.ibb.co/QCMNzsK/barcelona.jpg"
                },
                {  
                   "name":"Berlin",
                   "country":"Germany",
                   "image":"https://i.ibb.co/9hGRxT4/berlin.jpg"
                },
                {  
                   "name":"London",
                   "country":"United Kingdom",
                   "image":"https://i.ibb.co/Kw2VPwV/london.jpg"
                },
                {  
                   "name":"Paris",
                   "country":"France",
                   "image":"https://i.ibb.co/J52FX4z/paris.jpg"
                },
                {  
                   "name":"Rome",
                   "country":"Italy",
                   "image":"https://i.ibb.co/s5KLmds/rome.jpg"
                }              
             ]
             
           ,
            filtered:[]
        }
        console.log(this.state.all)
    }
    componentDidMount(){
        this.setState({filtered: this.state.all})
    }
    filterList=(e)=>{
        console.log(e.target.value)
        if(e.target.value == "") {
            this.setState({filtered: this.state.all})

        } else {
        const updateList = this.state.filtered.filter((item)=>{
            return item.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
        })
        console.log(updateList)
        this.setState({filtered: updateList})
        }
    }
    render(){
        //stylings
        const styles={
            width:'90%',
            height:'15vh'
        };
        
        const formStyle ={
            display:'flex',
            justifyContent:'center'
        }
        //sorting array ascending
        const sortArray = this.state.filtered.sort(function(a,b){
            if(a.name < b.name) return -1;
            if(a.name > b.name) return 1;
            return 0;
        })
        return(
            <div>
                <form style={formStyle}>
                     <input type="text" placeholder="Search your destination!" onChange={this.filterList} className="filterText"/>
                     
                </form>
                <div className="cities">
                    {/* {this.state.filtered.map((obj, index)=>{
                    return( <div><div className="cityNames">{obj.name}</div><img src={obj.image} alt="destinations" style={styles}/></div>)
                 })} */}
                {sortArray.map((obj, index)=>{
                    return( <div><div className="cityNames">{obj.name}</div><img src={obj.image} alt="destinations" style={styles}/></div>)
                 })}


                </div>

            </div>
        );
    }
}



export default Filter;