import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-primary text-primary-content">

            <Link to="/" className="btn btn-ghost text-xl">Home</Link>
            <Link to="/emailLogIn" className="btn btn-ghost text-xl">EmailLogIn</Link>
            <Link to="/emailSignIn" className="btn btn-ghost text-xl">EmailSignIn</Link>
            <Link to="/googleLogIn" className="btn btn-ghost text-xl">GoogleLogIn</Link>
            <Link to="/googleSignIn" className="btn btn-ghost text-xl">GoogleSignIn</Link>
        </div>
    );
};

export default Header;