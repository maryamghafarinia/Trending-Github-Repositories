import { 
    REPOSITORIES_FETCH_FAIL, 
    REPOSITORIES_FETCH_REQUEST, 
    REPOSITORIES_FETCH_SUCCESS
} from "../../constants/repository/repository.constants";


export const fetchRepositoriesReducer = (state = {}, action) =>{    
    switch(action.type){
        case REPOSITORIES_FETCH_REQUEST:
            return{
                loading: true
            }
        
        case REPOSITORIES_FETCH_SUCCESS:
            return{
                loading: false,
                repositories: action.payload
            }
        
        case REPOSITORIES_FETCH_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        
        default:
            return state
    }    
}
