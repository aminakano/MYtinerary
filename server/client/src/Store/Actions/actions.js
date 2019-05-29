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
export function userSuccess(userAdded){
    return {
        type: "CREATE_USER",
        userAdded
    }
}
export function signUpUsers(userInfo){
    console.log(userInfo.username);
    return dispatch =>{
        fetch('/api/users', {
            method: 'POST',
            headers: {
                'content-type': "application/x-www-form-urlencoded"
            },
            body: "username=" + userInfo.username + "&password=" + userInfo.password + "&email=" + userInfo.email + "&firstName=" + userInfo.firstName + "&lastName=" + userInfo.lastName + "&country=" + userInfo.country            
          }).then(res => res.json())
            .then(json => {
              console.log('json', json);
             
              
            });
    }
}

export function LogInSuccess(userLoggedIn){
    return {
        type:"USER_LOGGEDIN",
        userLoggedIn
    }
}
export function LogInUsers(userInfo){
    return dispatch =>{
        fetch('/api/login', {
            method: 'POST',
            headers: {
                'content-type': "application/x-www-form-urlencoded"
            },
            body: "username=" + userInfo.username + "&password=" + userInfo.password 
        }).then(res => res.json())
          .then(json =>{
              console.log('json',json);
          });
    }
}