const initState = {
    cities:[
   
    ],
    citiesIsLoaded: false,
    itineraries:{},
    userAdded: false
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
    if(action.type == "GET_ITINERARIES"){
        state= {
            ...state,
            itineraries: action.itineraries
        }
    }
    if(action.type == "CREATE_USER"){
        state= {
            ...state,
            userAdded : action.userAdded
        }
    }
    return state;
}

export default rootReducer;