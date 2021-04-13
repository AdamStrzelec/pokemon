import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navbar = () => {


    return(
        <div className="navbar-wrapper">
            <Link to='/' className="navbar-home-button">
                <FontAwesomeIcon icon={faHome} size={"2x"} />
            </Link>
            <button className="navbar-login-button">
                Sign in
            </button>
        </div>
    )
}

export default Navbar;