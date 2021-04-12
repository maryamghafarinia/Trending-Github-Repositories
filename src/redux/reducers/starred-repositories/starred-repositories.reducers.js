import { 
    FAVORITES_FETCH_FAIL,
    FAVORITES_FETCH_REQUEST,
    FAVORITES_FETCH_SUCCESS
} from "../../constants/repository/repository.constants";


export const fetchFavoriteRepositoriesReducer = (state = {}, action) =>{    
    switch(action.type){
        case FAVORITES_FETCH_REQUEST:
            return{
                loading: true
            }
        
        case FAVORITES_FETCH_SUCCESS:
            return{
                loading: false,
                favorites: action.payload
            }
        
        case FAVORITES_FETCH_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        
        default:
            return state
    }    
}
