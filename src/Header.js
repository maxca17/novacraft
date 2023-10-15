import React from 'react';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <header>
            <div>YourLogoHere</div>
                <nav>
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                    <Link to="/products" className="nav-link">Products</Link>
                </nav>

        </header>
    );
}

export default Header;
