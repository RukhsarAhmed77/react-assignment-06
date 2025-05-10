import { Link } from 'react-router-dom';
import { useTheme, useAuth, useCart } from '../contexts';
import { ShoppingCart } from '@mui/icons-material';

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const { cart } = useCart();

  return (
    <header className="header">
      <div className="container nav-container">
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          {user && <Link to="/dashboard">Dashboard</Link>}
        </nav>

        <div className="nav-controls">
          <div className="cart-indicator">
            <Link to="/cart" className="cart-link">
              <ShoppingCart />
              {cart.length > 0 && (
                <span className="cart-count">{cart.length}</span>
              )}
            </Link>
          </div>

          <button onClick={toggleTheme} className="theme-toggle">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>

          {user ? (
            <div className="user-panel">
              <span className="welcome-msg">Welcome, {user.username}</span>
              <button onClick={logout} className="logout-btn">
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="login-btn">
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};
