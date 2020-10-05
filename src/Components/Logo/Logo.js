import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logos/Group 1329.png';
import './Logo.css';
const Logo = () => {
    return (
        <Link to = "/home"><div className = "w-100 d-flex justify-content-center">
           <img src = {logo} className = "logoHeader" />
            
        </div></Link>
    );
};

export default Logo;