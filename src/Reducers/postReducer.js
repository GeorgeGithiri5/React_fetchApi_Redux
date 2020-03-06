import {FETCH_POSTS,NEW_POST} from '../actions/type';

const initialState = {
	items:[],
	item: {

	}
}

export default function(state=initialState,action){
	switch(action.type){
		case FETCH_POSTS:
		console.log('reducer')
			return{
				...state,
				items:action.load
			}
		case NEW_POST:
			return{
				...state,
				item:action.load
			}
		default:		
			return state;
	}
}