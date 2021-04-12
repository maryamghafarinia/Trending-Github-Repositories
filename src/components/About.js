import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h3>How it works: </h3>
      <hr/>

      <ul className="container">
        <li> Click on Stars in the list of repositories </li>
        <li> Count of starts will be increased and repository will be added to starred list </li>
        <li> Go to Starred list stored in localStorage and click on the button to remove repo from starred list</li>
      </ul>

      <Link to='/'>Go Back</Link>
    </div>
  )
}

export default About
