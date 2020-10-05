import React, { useContext, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import './RegistrationForm.css';
const RegistrationForm = () => {
    
    const email = localStorage.getItem("email");
    const name = localStorage.getItem("name");
    const {activityName} = useParams();
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const history = useHistory();
    const handleBlur = (e) => {
        if (e.target.name == "date")
        {
            setDate(e.target.value);
        }
        if (e.target.name == "description")
        {
            setDescription(e.target.value);
        }
    }

    const handleRegistration = () => {
        const newRegistration = {
            email: email,
            userName: name,
            date: date,
            description: description,
            activity: activityName,

        }
        fetch('https://arcane-sea-81667.herokuapp.com/userRegistration', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newRegistration)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        history.push('/personalTask');
        
    }
    return (
        <div className="registration-form">
    <form onSubmit = {handleRegistration}>
		<p className="registration-headline">Register as a Volunteer</p>
		
       <div className="form-group">
        	<input type="text" className="form-control input-lg" name="fullname" value={name} required="required"/>
        </div>
		<div className="form-group">
        	<input type="email" className="form-control input-lg" name="email" value={email} required="required"/>
        </div>
		<div className="form-group">
        	<input type="date" className="form-control input-lg" name="date" placeholder="Date" required="required" onBlur = {handleBlur}/>
        </div>
        <div className="form-group">
        	<input type="text" className="form-control input-lg" name="description" placeholder="Description" required="required" onBlur = {handleBlur}/>
        </div>
        <div className="form-group">
        	<input type="text" className="form-control input-lg" name="activity" value={activityName} required="required"/>
        </div>

        <div className="form-group">
            <button type="submit" className="btn btn-lg btn-primary btn-block registration-btn">Registration</button>
        </div>
       
    </form>
</div>
    );
};

export default RegistrationForm;