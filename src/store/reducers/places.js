import { ADD_PLACE, DELETE_PLACE } from '../actions/actionTypes'

const initialState = {
    places: [],
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_PLACE:
            return {
                ...state,
                places: [
                    ...state.places, 
                    {
                        value: action.payload.value, 
                        key: state.places.length,
                        image: {
                            uri: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/03/23/13/munich-alamy.jpg?w968h681'
                        }
                    }
                ]
            }
        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter((place, i) => {
				    return place.key !== action.payload.key
                }),
            }
        default: 
            return state
    }
}

export default reducer