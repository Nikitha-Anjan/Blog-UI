import axios from 'axios'
//set to store
export const setPosts = (posts) => {
    return {type: 'SET_POSTS',payload: posts }

}

//get from api ( if name starts with 'start' it means its a thunk (network)call)
export const startGetPosts = () => {
    return function(dispatch,getState){
        axios.get('http://jsonplaceholder.typicode.com/posts')
        .then((response) =>{
            const posts = response.data
            dispatch(setPosts(posts))
        })
    }
}
