import { NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <span className="navbar-brand">BronxSafe</span>
      <ul className="navbar-links">
        <li><NavLink to="/" end>Map</NavLink></li>
        <li><NavLink to="/report">Report</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
      </ul>
    </nav>
  )
}
