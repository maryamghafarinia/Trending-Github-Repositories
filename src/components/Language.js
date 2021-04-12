import Selector from './Select'
import { useState , useEffect } from 'react'

const Languages = ({ onChange }) => {

  const [languages, setLanguages] = useState([]);
  
  useEffect(() => {
    const getLanguages = async () => {
      const languagesFromServer = await fetchLanguages()
      setLanguages(languagesFromServer)
    }

    getLanguages()
  }, [])

 
  // Fetch Languages
  const fetchLanguages = async () => {
      //would be betterif could be replaced by an api call to get all programming languages 
      // but I couldn't find it in github docs 
    const languages = ['Go' , 'JavaScript', 'C', 'C++','Python', 'C#']
    return languages;
  }

  return (
    <Selector  placeHolder='Language' onChange={onChange}  selectList={languages} />
  )
}


export default Languages