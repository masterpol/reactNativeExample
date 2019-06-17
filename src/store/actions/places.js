import { ADD_PLACE, DELETE_PLACE } from './actionTypes'

export const addPlace = placeName => {
    return {
        type: ADD_PLACE,
        payload: {
            value: placeName,
        }
    }
}

export const deletePlace = key => {
    return {
        type: DELETE_PLACE,
        payload: {
            key:key
        }
    }
}