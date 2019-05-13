export const getCities=(cities)=>{
    return {
        type: "GET_CITIES",
        cities  //cities: cities
    }
}

export const getCitiesIsLoaded=(citiesIsLoaded)=>{
    return {
        type: "CITIES_LOADED",
        citiesIsLoaded  
    }
}
export function fetchCities(){
    console.log('hello')
    return dispatch =>{
        fetch("/api/cities",{
            method: "GET",
            mode: "no-cors",
            headers:{
                'accept': 'application/json',
                'content-type': 'application/x-www-form-urlencoded'
            }
        })
        .then(response => response.json())
        .then(json => {
            dispatch(getCities(json.data))
            dispatch(getCitiesIsLoaded(true))
        }) 
        .catch(err => console.error(err))
    }
}

export const getItineraries=(itineraries)=>{
    return {
        type: "GET_ITINERARIES",
        itineraries
    }
}
export function fetchItineraries(city){
    return dispatch =>{
        fetch("/api/itineraries/" + city,{
            method:"GET",
            mode: "no-cors",
            headers:{
                'accept': "application/json",
                'content-type': "application/x-www-form-urlencoded"
            }
        })
       
        .then(response => response.json())
        .then(res =>{
            dispatch(getItineraries(res))
        })
        // .then(json => {
        //     console.log(json);
        //     dispatch(getItineraries(json.data))
            
        // })
        .catch(err => console.error(err))
    }
}