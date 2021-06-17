import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
  const onClick = () => {
    console.log('Click')
  }
  return (
    <header>
      <h1 style={{color: 'yellow', backgroundColor:'black'}}>{title}</h1>
      <p>Skriv in det du önskar söka på:</p>
      <input type="text" placeholder="Sök..."></input>
      <Button color='yellow' text='Sök' onClick={onClick} />
    </header>
  )
}

Header.defaultProps = {
  title: 'Starwars',
}
Header.propTypes = {
  title: PropTypes.string.isRequired,
}
export default Header


