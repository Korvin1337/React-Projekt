import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Header = ({ toggleDarkMode, isDarkMode }) => {

    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen)
    }


    return (
        <header className={`${isDarkMode ? 'dark-mode' : ''}`}>
            <div className="container">
                <a href="#"><img src="/images/logo.svg" alt="Silicion Logotype" /></a>

                <nav id="main-menu" className="navbar">
                    <Link to="/" className="nav-link" href="#">Features</Link>
                    <Link to="/contact" className="nav-link" href="#">Contact</Link>
                </nav>

                <div id="darkmode-toggle-switch" className="btn-toggle-switch">
                    <span className="label">Dark mode</span>
                    <label htmlFor="darkmode-switch" className="toggle-switch">
                        <input id="darkmode-switch" type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
                        <span className="slider round"></span>
                    </label>
                </div>


                <a id="auth-signin" href="#" className="btn-primary">
                    <i className="center-text">
                        <img src="/images/icon-l.svg" alt="person icon" />
                        <span>Sign in / up</span>
                    </i>
                </a>

                <button className="btn-mobile" onClick={handleMenuToggle}>
                    <i className="fa-solid fa-bars"></i>

                    {/* Show if menu opens */}
                    {menuOpen && (
                        <nav className="hamburger-menu">
                            <Link to ="/" onClick={handleMenuToggle} className="hamburger-link hamburger-link-1">Features</Link>
                            <Link to ="/contact" onClick={handleMenuToggle} className="hamburger-link hamburger-link-2">Contact</Link>
                        </nav>
                    )}

                </button>

            </div>
        </header>
    )
}

export default Header