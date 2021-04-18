import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/context';
import { userStatuses } from '../../userStatus/userStatus';

const Navbar = () => {

    const userContext = useContext(UserContext);
    const { userStatus, handleUserLogin } = userContext;
    return(
        <div className="navbar-wrapper">
            <Link to='/' className="navbar-home-button">
                <FontAwesomeIcon icon={faHome} size={"2x"} />
            </Link>
            <Button variant="contained" onClick={handleUserLogin}>
                {userStatus === userStatuses.SIGNED_IN ? 'Sign out' : 'Sign in'}
            </Button>
        </div>
    )
}

export default Navbar;