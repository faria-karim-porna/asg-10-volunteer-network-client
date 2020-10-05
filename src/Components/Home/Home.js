import React, { useEffect, useState } from 'react';
import activity from '../../fakeData/activity';
import BackgroundImage from '../BackgroundImage/BackgroundImage';
import HomeCards from '../HomeCards/HomeCards';
import './Home.css';
const Home = () => {
    const[activities, setActivities] = useState([]);
    useEffect(() => {
        fetch('https://arcane-sea-81667.herokuapp.com/fakeData')
        .then(res => res.json())
        .then(data => {
            setActivities(data);
        })
    }, [activities])
    if(activities[activities.length-1])
    {
        localStorage.setItem("color",activities[activities.length -1].color);
        localStorage.setItem("id",activities[activities.length-1].id);
    }
     //localStorage.setItem('color',data[0].color);
    // localStorage.setItem('id',data[0].id);
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