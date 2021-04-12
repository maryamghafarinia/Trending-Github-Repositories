import React, {useEffect, useState} from 'react'
import {fetchRepositories} from "../redux/actions/repository/repository.actions"
import { addFavoriteRepository } from '../redux/actions/starred-repositories/starred-repositories.actions'
import {useSelector, useDispatch} from "react-redux"
import Loader from "../components/BackdropLoader"
import Repository from './Repository'
import { Link } from 'react-router-dom'
import Languages from '../components/Language'

    
const Repositories = () => {
    const dispatch  = useDispatch()
    const [language, setLanguage] = useState('');
      
    useEffect(()=>{
        
        dispatch(fetchRepositories(language))           
    }, [dispatch , language])

    const onLanguageChange = (selectedLanguage) => {
        setLanguage(selectedLanguage);
      }

    const toggleFavorite = async (repository) => {
        dispatch(addFavoriteRepository(repository))
    }
        
    const {loading, error, repositories} =  useSelector(state => state.fetchRepositoriesReducer)
 
    return (
            <div className="repositorieslist">
                <div className="filter">
                    <Languages onChange={onLanguageChange}/>
                    <Link to='/Favorites'>Go to Starred</Link>
                </div>
               
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
