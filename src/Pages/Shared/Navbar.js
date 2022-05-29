import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    };

    const navLinks = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/portfolio'>My Portfolio</Link></li>
        {
            user && <li><Link to="/dashboard">Dashboard</Link></li>
        }
        {
            user && <button className="btn btn-primary">{user?.displayName || 'Update Name'}</button>
        }
        {
            user ? <button className="btn btn-ghost" onClick={logout} >Sign Out</button> : <li><Link to='/login'>Login</Link></li>
        }
    </>

    return (
        <div className="navbar bg-neutral text-neutral-content font-semibold">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral text-neutral-content rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">Lowell Manufacturing</Link>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal  p-0">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end lg:hidden">
                <div className="dropdown">
                    <label tabIndex="1" for="dashboard-drawer" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;