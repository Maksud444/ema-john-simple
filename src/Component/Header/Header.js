import React from 'react';
import logo from '../../Component/Header/images/Logo.svg'
import './Header.css';

const Header = () => {
    return (
            <nav className='header'>
               <img src={logo} alt="" />
               <div>
                <a href="">Home</a>
                <a href="">Order</a>
                <a href="">Shop</a>
                <a href="">About</a>
               </div>
            </nav>

    );
};

export default Header;