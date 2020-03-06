import React from 'react';
import {Provider} from 'react-redux';
import Posts from './components/Post';
import PostForm from './components/PostForm';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component{
	render(){
		return(
		<div>	
		<Provider store={store}>
		<div>
			<header>
				<h2 className='text-center'>My Fetch Api Quiz with Redux</h2>
			</header>
		</div>
			<PostForm/>
			<hr/>
			<Posts/>
		</Provider>
		</div>
		)
	}
}

export default App


