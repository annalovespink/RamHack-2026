import { NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const isMap = pathname === '/map' || pathname === '/report'
  const isAbout = pathname === '/about'

  return (
    <nav className={`navbar ${isHome ? 'navbar-transparent' : ''} ${isMap ? 'navbar-map' : ''} ${isAbout ? 'navbar-about' : ''}`}>
      <span className="navbar-brand">Resilient NYC</span>
      <ul className="navbar-links">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/map">Map</NavLink></li>
        <li><NavLink to="/report">Report</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
      </ul>
    </nav>
  )
}
