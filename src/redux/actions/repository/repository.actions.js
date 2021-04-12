import moment from 'moment'
import { 
    REPOSITORIES_FETCH_FAIL, 
    REPOSITORIES_FETCH_REQUEST, 
    REPOSITORIES_FETCH_SUCCESS
} from "../../constants/repository/repository.constants";
 



export const fetchRepositoriesRequest = () => {
    return {
      type: REPOSITORIES_FETCH_REQUEST
    }
  }
  
export  const fetchRepositoriesSuccess = (response) => {
    return {
      type: REPOSITORIES_FETCH_SUCCESS,
      payload: response
    }
  }
  
export const fetchRepositoriesFailure = (error) => {
    return {
      type: REPOSITORIES_FETCH_FAIL,
      payload: error
    }
  }


export const fetchRepositories = (language, dispatch) => {
    const lastWeekDate = moment().subtract(7,'days').format('YYYY-MM-DD');
    const URL = `https://api.github.com/search/repositories?
    sort=stars&order=desc&q=language:${language}&created:${lastWeekDate}`;
    return dispatch => {
        dispatch(fetchRepositoriesRequest())
        return fetch(URL)
          .then(res => res.json())
          .then(response => dispatch(fetchRepositoriesSuccess(response.items)))
          .catch(error => dispatch(fetchRepositoriesFailure(error.message)))
      }
}
