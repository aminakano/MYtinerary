const initState = {
    posts:[
        {  
            "id":"Buenos Aires",
            "country":"Argentina",
            "image":"https://i.ibb.co/KjrSCJG/buenos-aires.jpg"
         },
         {  
            "id":"Amsterdam",
            "country":"Netherlands",
            "image":"https://i.ibb.co/FKHmh6j/amsterdam.jpg"
         },
         {  
            "id":"New York",
            "country":"United States",
            "image":"https://i.ibb.co/0ZgcGL0/new-york.jpg"
         }
    ]
}
const rootReducer = (state = initState, action)=>{
    return state;
}

export default rootReducer;