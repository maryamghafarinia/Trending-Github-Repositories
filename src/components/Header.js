import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import moment from 'moment'


const Header = ({ title }) => {
  const location = useLocation()
  const today = moment().format('MM/DD/YYYY');
  const oneWeekAgo = moment().subtract(7,'days').format('MM/DD/YYYY');

  return (
    <header className='header'>
      <h1>{title}</h1>
      <h5>{oneWeekAgo} - {today}</h5>
      {location.pathname === '/'}
    </header>
  )
}

Header.defaultProps = {
  title: 'Trending Github Repositories',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
