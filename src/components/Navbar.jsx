import { NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <nav className={`navbar ${isHome ? 'navbar-transparent' : ''}`}>
      <span className="navbar-brand">BronxSafe</span>
      <ul className="navbar-links">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/map">Map</NavLink></li>
        <li><NavLink to="/report">Report</NavLink></li>
      </ul>
    </nav>
  )
}
