import React , {Component} from 'react';
import {connect} from 'react-redux';
import fetchPosts from '../actions/postsAction'
import 'bootstrap/dist/css/bootstrap.min.css';

class Posts extends Component{
	componentWillMount(){
		this.props.fetchPosts()
	}
	render(){
		const postItems = this.props.posts.map(
			post=>(
				<div key={post.id} className='jumbotron post'>
					<h3><b>Name:</b>{post.name}</h3>
					<p className='lead'><b>Occupation:</b>{post.occupation}</p>
					<p className='lead'><b>Bio:</b>{post.bio}</p>
					<p className='lead'><b>Email:</b>{post.email}</p>
				</div>
			)
		);
		return(
			<div>
				<h1 className='text-center' >Fetched Data</h1>
				{postItems}
			</div>
		)
	}
}

const mapStateToProps = state=>({
	posts:state.posts.items
})

export default connect(mapStateToProps,{fetchPosts})(Posts)