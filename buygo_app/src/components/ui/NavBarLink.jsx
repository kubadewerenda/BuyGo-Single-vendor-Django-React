import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const NavBarLink = () => {
    const {isAuthenticated, setIsAuthenticated, username} = useContext(AuthContext);

    function logout(){
        localStorage.removeItem("access");
        setIsAuthenticated(false);
    }

    return (
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {isAuthenticated ? (
                <>
                    <li className="nav-item">
                        <NavLink
                        to="/profile"
                        className={({ isActive }) =>
                            isActive
                            ? "nav-link active fw-semibold"
                            : "nav-link fw-semibold"
                        }
                        >
                            {`Hi, ${username}`}
                        </NavLink>
                    </li>

                    <li className="nav-item" onClick={logout}>
                        <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                            ? "nav-link active fw-semibold"
                            : "nav-link fw-semibold"
                        }
                        >
                            Logout
                        </NavLink>
                    </li>
                </>
            ) : (
                <>
                    <li className="nav-item">
                        <NavLink
                        to="/login"
                        className={({ isActive }) =>
                            isActive
                            ? "nav-link active fw-semibold"
                            : "nav-link fw-semibold"
                        }
                        >
                        Login
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink
                        to="/signup"
                        className={({ isActive }) =>
                            isActive
                            ? "nav-link active fw-semibold"
                            : "nav-link fw-semibold"
                        }
                        >
                        Register
                        </NavLink>
                    </li>
                </>
            )}
        </ul>
    )
}

export default NavBarLink