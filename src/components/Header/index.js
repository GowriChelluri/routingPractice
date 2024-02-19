import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <nav className="nav-container">
    <div className="logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="logo"
      />
      <p className="logo-name">Wave</p>
    </div>
    <ul className="nav-items-container">
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/about">
        <li>About</li>
      </Link>
      <Link to="/contact">
        <li>Contact</li>
      </Link>
    </ul>
  </nav>
)
export default Header
