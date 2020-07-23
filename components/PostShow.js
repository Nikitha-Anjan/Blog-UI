import React from 'react'
import { connect } from 'react-redux'
import { findPost } from '../selectors/postSelector'
import { findUser } from '../selectors/userSelector'
import { Link } from 'react-router-dom'

class PostShow extends React.Component {
    render(){
        return (
            <div>
                {this.props.post && (
                    <div>
                        <h2>Post Show: {this.props.post.id}</h2>
                        <h2>Post Title:{ this.props.post.title } </h2>
                        <h3>Post Username: {this.props.user.username }</h3>
                        <h3>Post Body:</h3>
                        <p>{ this.props.post.body } </p> 
                        <p><Link to ={`/users/${this.props.user.id}`}>More Posts of Author: {this.props.user.name}</Link></p>
                    </div> 
                    )}
            </div>
        )
    }
}

const mapStateToProps =(state, props) => {
    const post = findPost(state.posts,props.match.params.id)
    if (post) {
        return {
            post,
            user: findUser(state.users,post.userId)
        }
    }
}

export default connect(mapStateToProps)(PostShow)