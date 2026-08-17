import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        end
        className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
      >
        Home
      </NavLink>
      <NavLink
        to="/shop"
        className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
      >
        Shop
      </NavLink>
      <NavLink
        to="/admin"
        className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
      >
        Admin Portal
      </NavLink>
    </nav>
  )
}

export default NavBar