import React from 'react'

const Header = ({ toggleDarkMode, isDarkMode }) => {
    return (
        <header  className={`${isDarkMode ? 'dark-mode' : ''}`}>
            <div className="container">
                <a href="index.html"><img src="/images/logo.svg" alt="Silicion Logotype" /></a>

                <nav id="main-menu" className="navbar">
                    <a className="nav-link" href="#">Features</a>
                </nav>

                <div id="darkmode-toggle-switch" className="btn-toggle-switch">
                    <span className="label">Dark mode</span>
                    <label htmlFor="darkmode-switch" className="toggle-switch">
                        <input id="darkmode-switch" type="checkbox" checked={isDarkMode} onClick={toggleDarkMode}/>
                        <span className="slider round"></span>
                    </label>
                </div>


                <a id="auth-signin" href="#" className="btn-primary">
                    <i className="center-text">
                        <img src="/images/icon-l.svg" alt="person icon" />
                        <span>Sign in / up</span>
                    </i>
                </a>

                <button className="btn-mobile">

                    <i className="fa-solid fa-bars"></i>

                </button>

            </div>
        </header>
    )
}

export default Header