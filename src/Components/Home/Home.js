import React, { useEffect, useState } from 'react';
import BackgroundImage from '../BackgroundImage/BackgroundImage';
import HomeCards from '../HomeCards/HomeCards';
import './Home.css';
const Home = () => {
    const[activities, setActivities] = useState([]);
    useEffect(() => {
        fetch('https://arcane-sea-81667.herokuapp.com/fakeData')
        .then(res => res.json())
        .then(data => setActivities(data))
    }, [])
    return (
        <div>
            <BackgroundImage></BackgroundImage>
            <div className = "container">
            <div className = "row homeContainer">
           {
               activities.map(activity =><HomeCards activity = {activity}></HomeCards>)
           } 
            </div>
        </div>
        </div>
    );
};

export default Home;