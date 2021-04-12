import { 
    FAVORITES_FETCH_FAIL,
    FAVORITES_FETCH_REQUEST,
    FAVORITES_FETCH_SUCCESS,
} from "../../constants/starred-repositories/starred-repositories.constants";
 

export const fetchFavoriteRepositories = () => (dispatch) =>{
    try {
        dispatch({
            type: FAVORITES_FETCH_REQUEST
        })
        
        const favoriteRepositories = []
        Object.keys(localStorage).forEach(key => {
            favoriteRepositories.push(JSON.parse(localStorage.getItem(key)))
        })
        const data = favoriteRepositories;
        dispatch({
            type: FAVORITES_FETCH_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type: FAVORITES_FETCH_FAIL,
            payload: error.message
        })
    }
}

export const addFavoriteRepository = (repository) => (dispatch) => {
    try {
        // object is cast into string and parsed back to JSON when retrieved
        localStorage.setItem(repository.id, JSON.stringify(repository));
    } catch (error) {
        dispatch({
            type: FAVORITES_FETCH_FAIL,
            payload: error.message
        })
    }
}

export const removeFavoriteRepository = (repository) => (dispatch) => {
    try {
        localStorage.removeItem(repository.id);
        dispatch(fetchFavoriteRepositories());
    } catch (error) {
        dispatch({
            type: FAVORITES_FETCH_FAIL,
            payload: error.message
        })
    }
}
