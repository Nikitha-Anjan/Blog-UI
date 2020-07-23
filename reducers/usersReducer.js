const usersReducer =(state =[],action) =>{
    switch(action.type) {
        case 'SET_USERS' : {
            return [].concat(action.payload)
            //return state.concat(action.payload)
        }
        default: {
            return [].concat(state)
        }
    }
}

export default usersReducer