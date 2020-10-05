import React, { useContext, useEffect, useState } from 'react';
import './PersonalTask.css';
import { UserContext } from '../../App';
import PersonalTaskCard from '../PersonalTaskCard/PersonalTaskCard';
const PersonalTask = () => {
    //const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const email = localStorage.getItem("email");
    const [personalTask, setPersonalTask] = useState([]);


    useEffect(() => {
        fetch('https://arcane-sea-81667.herokuapp.com/personalTask?email='+email)
        .then(res => res.json())
        .then(data => setPersonalTask(data))
    },[])
    return (
            
           <div className = "container">
                <div className = "row card-container">
                   {
                       personalTask.map(task => <PersonalTaskCard task = {task}></PersonalTaskCard>)
                   }
                </div>               
           </div>
           
    );
};

export default PersonalTask;