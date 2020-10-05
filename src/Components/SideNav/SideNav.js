import React from 'react';
import './SideNav.css';
import logo from '../../logos/Group 1329.png';
import plus from '../../logos/plus 1.png';
import people from '../../logos/users-alt 1.png';
import { Link } from 'react-router-dom';
const SideNav = () => {
    return (
        <div className="sidenav">
            <Link to = "/home"><a href="#about"><img src = {logo} className = "sideNav-logo"/></a></Link>
            <Link to = "/admin/volunteerList"><a href="#services"><img src = {people} className = "sideNav-icons"/><span className = "sideNav-text">Volunteer register list</span></a></Link>
            <Link to = "/admin/addEvent"><a href="#clients"><img src = {plus} className = "sideNav-icons"/><span className = "sideNav-text">Add event</span></a></Link>
        </div>
    );
};

export default SideNav;