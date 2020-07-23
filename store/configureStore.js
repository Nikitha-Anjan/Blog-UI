import { createStore, combineReducers,applyMiddleware } from 'redux'
import usersReducer from '../reducers/usersReducer'
import postsReducer from '../reducers/postsReducer'
import thunk from 'redux-thunk'

const rootReducer ={
    users: usersReducer,
    posts: postsReducer,
}
const configureStore = () => {
    const store = createStore(combineReducers(rootReducer),applyMiddleware(thunk))
    return store 
}

export default configureStore