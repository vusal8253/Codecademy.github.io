import React from 'react'
import {NavLink,Link} from 'react-router-dom'
import './Navbar.css';

export const Navbar = () => {
  return (
    <nav>
        <Link to='/' className='title'>Vusal.Mammadov</Link>
        <ul>
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/about'>About Me</NavLink>
            </li>
            <li>
                <NavLink to='/education'>Education</NavLink>
            </li>
            <li>
                <NavLink to='/experince'>Experience</NavLink>
            </li>
        </ul>
    </nav>
  );
};

