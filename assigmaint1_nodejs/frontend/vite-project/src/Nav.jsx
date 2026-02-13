import { NavLink } from "react-router-dom"
import "./Nav.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <NavLink to="/" className="nav-item">
          Home
        </NavLink>
        <NavLink to="/work" className="nav-item">
          Work
        </NavLink>
      </div>
    </nav>
  )
}
