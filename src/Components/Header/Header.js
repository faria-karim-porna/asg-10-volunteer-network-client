import React from 'react';
import './Header.css';
import logo from '../../logos/Group 1329.png'
import { Link, useHistory } from 'react-router-dom';
const Header = (props) => {
  const history = useHistory();
  var name = localStorage.getItem("name");
  const signOut = ()=> {
    localStorage.clear();
    history.push("/home");
    window.location.reload(false);
  }
    return (
        <nav className="navbar navbar-expand-lg navbar-light navigation-bar fixed-top">
        <Link to ="/home" className = "link"><a className="navbar-brand justify-content-start ml-0" href="#"><img src = {logo} className = "img-fluid w-25"/></a></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse try" id="navbarSupportedContent">
          <ul className="navbar-nav justify-content-end">
            <li className="nav-item active">
              <Link to ="/home" className = "link"><a className="nav-link" href="#">Home</a></Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Donation</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Events</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Blog</a>
            </li>
           {name && <li className="nav-item">
              <a className="nav-link" href="#" onClick = {signOut}>{name}</a>
            </li>}
            {props.homeHeader && <li className="nav-item mr-2">
              <button className = "btn btn-primary">Register</button>
            </li>}
            {props.homeHeader && <li className="nav-item">
            <Link to ="/admin/volunteerList" className = "link"><button className = "btn btn-dark">Admin</button></Link>
            </li>}
            
          </ul>    
          
        </div>
      </nav>
    );
};

export default Header;