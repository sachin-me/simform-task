const initState = {
	images: []
}

export default function imgReducer(state = initState, action) {
	switch (action.type) {
		case 'GET_IMAGE_SUCCESS': {
			return {
				...state,
				images: action.image
			}
		}
				
		default:
			return state;
	}
}