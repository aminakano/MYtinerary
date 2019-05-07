const initState = {
    cities:[
   
    ],
    citiesIsLoaded: false,
}
function rootReducer(state = initState, action){
    if(action.type == "GET_CITIES"){
        state = {
            ...state, 
            cities: action.cities
        }
    }
    if(action.type == "CITIES_LOADED"){
        state = {
            ...state, 
            citiesIsLoaded: action.citiesIsLoaded
        }
    }
    return state;
}

export default rootReducer;