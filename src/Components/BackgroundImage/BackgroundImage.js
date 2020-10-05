import React from 'react';
import bgImage from '../../images/bgImg.png';
import './BackgroundImage.css';
const BackgroundImage = () => {
    return (       
    <div className="search-bar-over-image">
        <img src={bgImage} className="img-fluid w-100 backgroundImage" alt="Responsive image"/>
        <form className="form-inline justify-content-center my-2 my-lg-0 search-bar">
          <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
        </form>
     </div>
           
    );
};

export default BackgroundImage;