import React, {useEffect} from 'react'
import {fetchFavoriteRepositories, 
    removeFavoriteRepository} 
    from "../redux/actions/starred-repositories/starred-repositories.actions"
import {useSelector, useDispatch} from "react-redux"
import Loader from "../components/BackdropLoader"
import Repository from './Repository'
import { Link } from 'react-router-dom'

    
const Favorites = () => {
    const dispatch  = useDispatch()

      
    useEffect(()=>{
        dispatch(fetchFavoriteRepositories())           
    }, [dispatch])

    const {loading, error, favorites} =  useSelector(state => state.fetchFavoriteRepositoriesReducer)

    const toggleFavorite = async (repository) => {
        dispatch(removeFavoriteRepository(repository));
    }
  
    return (
            <div className="favoriteslist">
                <Link to='/'>Go Back to Repositories</Link>
                <hr/>
                {
                    loading ? <Loader />
                    : error ? error
                    : favorites && favorites.map(repository =>(
                        <Repository key={repository.id} repository={repository} onToggle={toggleFavorite} isFavorite={true}/>
                    ))
                }

            </div>            
    )
}

export default Favorites
