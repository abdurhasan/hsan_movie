import { GET_MOVIE_LIST_FAILURE,GET_MOVIE_LIST_SUCCESS,GET_MOVIE_DETAIL_SUCCESS,GET_MOVIE_DETAIL_FAILURE } from '../action_types';

export default function (state = [], action) {
    switch (action.type) {
        
        case GET_MOVIE_LIST_FAILURE:
            return state
        case GET_MOVIE_LIST_SUCCESS:        
            return [...state,action.data]
        case GET_MOVIE_DETAIL_FAILURE:
        return state
        case GET_MOVIE_DETAIL_SUCCESS:        
        return action.data
            


        
        default:
            return state;
            break;
    }
}

