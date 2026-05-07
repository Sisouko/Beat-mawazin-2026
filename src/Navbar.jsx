import {Link, useLocation } from 'react-router-dom'

function Navbar(){
  const location = useLocation()

  const navLinks = [

{path: '/', label: 'Accueil', icon: '🏠'},
{path: '/programme', label: 'Programme', icon: '🎵'},
{ path: '/planning', label: 'Planning', icon: '📅' },
{path: '/passeport', label: 'Passeport', icon: '🎫'}
  ]
return (
    <nav className="navbar">
        {
            navLinks.map(link => {
                const isActive = location.phathname === link.path
                return (
                    <Link key={link.path}
            to={link.path}
            className={`nav-link ${isActive ? 'nav-link--active' : ''}`}>
            <span className="nav-icon">{link.icon}</span>
            <span className="nav-label">{link.label}</span>
            </Link>
                )
            })
        }
    </nav>
)


}export default Navbar