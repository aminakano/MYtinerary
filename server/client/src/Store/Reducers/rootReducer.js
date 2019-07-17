const initState = {
    cities:[
   
    ],
    citiesIsLoaded: false,
    itineraries:{},
    userAdded: false,
    userLoggedIn: false,
    intinerariesIsLoaded: false,
    user:{}
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
    if(action.type == "USER_LOGGEDIN"){
        state ={
            ...state,
            userLoggedIn: action.userLoggedIn
        }
    }
    if (action.type == "ITINERARIES_IS_LOADED") {
      state = {
        ...state,
        intinerariesIsLoaded: action.intinerariesIsLoaded
      };
    }

    if (action.type == "TOKEN_EXISTS") {
      state = {
        ...state,
        user: action.user
      };
    }

    return state;
}

export default rootReducer;