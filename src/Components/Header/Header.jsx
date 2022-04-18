import { getAuth } from '@firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import app from '../../firebase.init';
import './Header.css';

const auth = getAuth(app)

const Header = () => {
    const [user] = useAuthState(auth)
    return (
        <div className="header items-center mt-7">
            <h2 className="wrytica w-100 text-cyan-800 font-semibold text-4xl font-black">Wrytica.</h2>
            <div>
                <Link to="/">Home</Link>
                <Link to="/services">Services</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/about">About</Link>
                {
                    user?.uid
                     ? 
                     <button className="signOut-btn">Sign out</button> 
                    : 
                    <Link to="/login">Login</Link>
                    
                }
                <Link to="*"></Link>
            </div>
        </div>
    );
};

export default Header;