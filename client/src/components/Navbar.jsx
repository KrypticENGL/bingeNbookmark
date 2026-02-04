import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Button from './Button';
import './Navbar.css';

const Navbar = () => {
    const { user, logout } = useAuth();

    const handleLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar__container">
                <Link to="/" className="navbar__logo">
                    <span className="navbar__logo-text">ReviewSite</span>
                </Link>

                <div className="navbar__menu">
                    <Link to="/" className="navbar__link">Home</Link>
                    {user ? (
                        <>
                            <Link to="/dashboard" className="navbar__link">Dashboard</Link>
                            <div className="navbar__user">
                                <span className="navbar__user-email">{user.email}</span>
                                <Button variant="outline" size="small" onClick={handleLogout}>
                                    Logout
                                </Button>
                            </div>
                        </>
                    ) : (
                        <Link to="/login">
                            <Button variant="primary" size="small">Login</Button>
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
