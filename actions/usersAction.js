import axios from 'axios'
//set to store
export const setUsers = (users) => {
    return {type: 'SET_USERS',payload: users }

}

//get from api ( if name starts with 'start' it means its a thunk (network)call)
export const startGetUsers = () => {
    return function(dispatch,getState){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) =>{
            const users = response.data
            dispatch(setUsers(users))
        })
    }
}
