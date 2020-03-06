import React , {Component} from 'react';
import {connect} from 'react-redux';
import createPosts from '../actions/postsAction.js';
import 'bootstrap/dist/css/bootstrap.min.css';

class PostForm extends Component{
	constructor(props){
		super(props);

		this.state = {
			email:'',
			name:'',
			occupation:'',
			bio:'',
		}
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

	}

	onChange(e){
		this.setState({[e.target.name]:e.target.value});
	}
	onSubmit(e){
		e.preventDefault();

		const post = {
			name: this.state.name,
			occupation: this.state.occupation,
			bio: this.state.bio
		}

	}
	render(){
		return(
			<div>
				<h1 className='text-center'>This Form Allows You To Patch</h1>
				<form onSubmit ={this.onSubmit} className="form">
					<div>
						<label>Bio:</label>
						<textarea className='form-control' onChange={this.onChange} name='bio' 
						value={this.state.bio}/>
					</div>
					<div className="form-group">
						<label>Email:</label>
						<input type="text" className='form-control' name='email' onChange={this.onChange} 
						value={this.state.email} />
					</div>
					<div className="form-group">
						<label>Name:</label>
						<input type="text" className='form-control' name='username' onChange={this.onChange} 
						value={this.state.name} />
					</div>
					<div>
						<label>Occupation:</label>
						<input type="text" className='form-control' name='occupation' onChange={this.onChange} 
						value={this.state.occupation} />
					</div>
					<button type='submit' className='btn btn-warning' >Submit</button>
				</form>
			</div>
		)
	}
}

export default connect(null,{createPosts})(PostForm)