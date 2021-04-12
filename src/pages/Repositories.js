import React, {useEffect} from 'react'
import {fetchRepositories} from "../redux/actions/repository/repository.actions"
import { addFavoriteRepository } from '../redux/actions/starred-repositories/starred-repositories.actions'
import {useSelector, useDispatch} from "react-redux"
import Loader from "../components/BackdropLoader"
import Repository from './Repository'
import { Link } from 'react-router-dom'

    
const Repositories = () => {
    const dispatch  = useDispatch()    
      
    useEffect(()=>{
        dispatch(fetchRepositories())           
    }, [dispatch])

    const toggleFavorite = async (repository) => {
        dispatch(addFavoriteRepository(repository))
    }
        
    const {loading, error, repositories} =  useSelector(state => state.fetchRepositoriesReducer)
 
    return (
            <div className="repositorieslist">
               <Link to='/Favorites'>Favorites</Link>
               <hr/>
                {
                    loading ? <Loader />
                    : error ? error
                    : repositories && repositories.map(repository =>(
                        <Repository key={repository.id} repository={repository} onToggle={toggleFavorite}/>
                    ))
                }

            </div>            
    )
}

export default Repositories
