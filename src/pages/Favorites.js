import React, {useEffect, useState} from 'react'
import {fetchFavoriteRepositories, 
    removeFavoriteRepository} 
    from "../redux/actions/starred-repositories/starred-repositories.actions"
import {useSelector, useDispatch} from "react-redux"
import Loader from "../components/BackdropLoader"
import Repository from './Repository'
import { Link } from 'react-router-dom'
import Languages from '../components/Language'

    
const Favorites = () => {
    const dispatch  = useDispatch()
    const [language, setLanguage] = useState('GO');
      
      
    useEffect(()=>{
        dispatch(fetchFavoriteRepositories(language))           
    }, [dispatch , language])

    const onLanguageChange = (selectedLanguage) => {
        setLanguage(selectedLanguage);
      }

    const {loading, error, favorites} =  useSelector(state => state.fetchFavoriteRepositoriesReducer)

    const toggleFavorite = async (repository) => {
        dispatch(removeFavoriteRepository(repository));
    }
  
    return (
            <div className="favoriteslist">
                <div className="filter">
                    <Languages onChange={onLanguageChange}/>
                    <Link to='/'>Go to Repositories</Link>
                </div>
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
