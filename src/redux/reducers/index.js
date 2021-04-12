import {combineReducers} from "redux"

import {
    fetchRepositoriesReducer,
} from "./repository/repository.reducers"

import {
    fetchFavoriteRepositoriesReducer
} from "./starred-repositories/starred-repositories.reducers"

export default combineReducers({
    fetchRepositoriesReducer,
    fetchFavoriteRepositoriesReducer    
})