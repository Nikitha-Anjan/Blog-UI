const postsReducer =(state =[],action) =>{
    switch(action.type) {
        case 'SET_POSTS' : {
            return [].concat(action.payload)
            //return state.concat(action.payload)
        }
        default: {
            return [].concat(state)
        }
    }
}

export default postsReducer