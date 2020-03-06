import {FETCH_POSTS,NEW_POST} from './type';


  const fetchPosts=()=>dispatch=>{
	fetch("https://ti-react-test.herokuapp.com/users")
		.then(res=>res.json())
		.then(posts=>
			dispatch({
			type:FETCH_POSTS,
			load: posts
		}));
}

 export const createPosts=(postData)=>dispatch=>{
 	console.log('Creating..')
	fetch('https://ti-react-test.herokuapp.com/users/{id}',{
			method:'PATCH',
			headers :{
				'content-type':'application/json'
			},
			body:JSON.stringify(postData)
		})
			.then(res=>res.json())
			.then(postData=>
			dispatch({
			type:NEW_POST,
			load: postData
		}));
		};

export default fetchPosts