import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HomeCards.css';
const HomeCards = ({activity}) => {
    const divColor = {
        backgroundColor: activity.color,
        marginTop: '-60px',
        height: '65px',
        color: 'white',
        textAlign: 'center',
        fontSize: '20px',
        borderBottomLeftRadius: "15px",
        borderBottomRightRadius: "15px",
        position: "relative",
        width:"100%"
    };
    return (
            
                <div className = "col-md-3 homeCardColumn"><Link to = {`register/${activity.activity}`} className = "link">
            <img className = "homeCardsImages" src = {require(`../../images/${activity.image}`)}/>
           <p style = {divColor}>{activity.activity}</p></Link>
    </div>
            
    );
};

export default HomeCards;