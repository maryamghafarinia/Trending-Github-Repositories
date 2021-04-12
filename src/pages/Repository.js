import React, { useState } from 'react'
import {FaStar} from "react-icons/fa"
import Button from '../components/Button'


const Repository = ({repository , onToggle , isFavorite}) => {
    const [count , setCount] = useState(repository.stargazers_count)

    return (
            <div className='repository'>
                <h3>
                {repository.owner.login}{' '}
                <span className="rep-star">
                    {isFavorite 
                    ? 
                    <Button
                        text = 'Unstar Repository'
                        onClick={() => onToggle(repository) }
                    /> 
                    : 
                    (<div><FaStar 
                                className="star"
                                onClick={() => { 
                                    setCount(count+1);
                                    onToggle(repository)
                                    }}
                                /> {count} </div>)
                    }
               
                </span>
                
                </h3>
                <div className="rep-url">
                    <a href={repository.html_url}>
                        {repository.owner.login} / <span className="rep-name">{repository.name}</span>
                    </a>
                </div>
                <div className="rep-desc">
                    {repository.description}
                </div>
                <p>{repository.language ? <span className="rep-lang">{repository.language}</span> : ""}</p>  

                
            
        
            </div>
                   
    )
}

export default Repository
