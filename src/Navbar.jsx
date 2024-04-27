import './navbar.css'
import { NavLink } from 'react-router-dom'
import logo from './assets/crossandres-icon.png'

function Navbar() {
    return (
        <>
            <nav>
                <ul className="navbar">
                    <NavLink to='/'>
                        <img className="navbar-logo"src={logo} alt="test image"></img>
                    </NavLink>
                    <li><NavLink className="navbar-item" to='/Sermons'>Sermons</NavLink></li>
                    <li><NavLink className="navbar-item" to='/Quotes'>Quotes</NavLink></li>
                    <li><NavLink className='navbar-item' to='/About'>About</NavLink></li>
                    <li className="navbar-item">Log in/Sign up</li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar