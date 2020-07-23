import React from 'react'
import { connect, connectAdvanced } from 'react-redux'
import { findUser } from '../selectors/userSelector'
import { filterPostUser } from '../selectors/postUserSelector'
import { Link } from 'react-router-dom'
import{ makeAdmin,removeAdmin} from  '../actions/adminAction'

class UserShow extends React.Component {
    render(){
        return (
            <div>
                {this.props.user && (
                    <div>
                        <h2>User Show - {this.props.user.id}        
                            {this.props.admin === this.props.user.id ? " Admin": " NotAdmin"}
                            {(this.props.admin != this.props.user.id) && 
                            (<button onClick={()=>{this.props.dispatch(makeAdmin(this.props.user.id))}}>Make Admin </button>)}
                            {(this.props.admin === this.props.user.id) && 
                            (<button onClick={()=>{this.props.dispatch(removeAdmin())}}>Remove Admin </button>)}
                        </h2>
                        <p>UserName: { this.props.user.username } </p>
                        <p>Name: { this.props.user.name } </p>
                        <p>Email Id: { this.props.user.email } </p>
                        <h2>Posts by the {this.props.user.username}</h2>
                        <ul> 
                            {this.props.posts.map((ele)=>{
                                return(
                                    <li key={ele.id}> <Link to={`/posts/${ele.id}`}>{ele.title} </Link></li>
                                )
                            })}
                        </ul>    
                    </div> 
                    )}
            </div>
        )
    }
}

const mapStateToProps =(state, props) => {
    const user= findUser(state.users,props.match.params.id)
    return {
        user,
        posts : filterPostUser(state.posts,user.id),
        admin: state.admin
    }
}

export default connect(mapStateToProps)(UserShow)