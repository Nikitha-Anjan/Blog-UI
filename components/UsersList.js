import React from 'react'
import { connect } from 'react-redux'
import{ startGetUsers } from  '../actions/usersAction'
import { Link } from 'react-router-dom'
import{ makeAdmin,removeAdmin } from  '../actions/adminAction'


class UsersList extends React.Component{

    componentDidMount(){
        if(this.props.users.length == 0){

            this.props.dispatch(startGetUsers())
        }
    }

    render(){
        return (
            <div>
                <h2> Listing users in {this.props.name} - {this.props.users.length} </h2>
                <ul>
                    {
                        this.props.users.map(user => {
                            return (
                              
                            <li key={user.id}> 
                                <Link to={`/users/${user.id}`}> {user.name}</Link> 
                                {
                                    (this.props.admin ==="")  && (
                                    <button 
                                    onClick={() => {
                                        this.props.dispatch(makeAdmin(user.id))
                                    }}>Make Admin</button>)
                                }
                            
                                {
                                    (this.props.admin === user.id) && (
                                    <span>
                                    "Admin"
                                    <button 
                                    onClick={() => {
                                        this.props.dispatch(removeAdmin())
                                    }}>remove admin</button>
                                    </span>
                                )}
                            </li>
                        )})
                    }
                </ul>
            </div>
        )

    }
}

const mapStateToProps =(state) => {
    return{
        users: state.users,
        admin: state.admin
    }
}

export default connect(mapStateToProps)(UsersList)