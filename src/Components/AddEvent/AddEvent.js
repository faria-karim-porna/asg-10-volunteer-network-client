import React, { useState } from 'react';
import SideNav from '../SideNav/SideNav';
import cloud from '../../logos/cloud-upload-outline 1.png'
import './AddEvent.css'
import { useHistory } from 'react-router-dom';
const AddEvent = () => {
    let id = localStorage.getItem('id');
      id = parseInt(id) + 1;
     console.log(id);
     let color = localStorage.getItem('color');
     let value = id%8;
     if(value == 5)
     {
         color = "#421FCF";
     }
     if(value == 6)
     {
         color = "#FF7044";
     }
     if(value == 7)
     {
         color = "#3F90FC";
     }
     if(value == 0)
     {
         color = "#FFBD3E";
     }
     if(value == 1)
     {
         color = "#FFBD3E";
     }
     if(value == 2)
     {
         color = "#3F90FC";
     }
     if(value == 3)
     {
         color = "#FF7044";
     }
     if(value == 4)
     {
         color = "#421FCF";
     }
    const history = useHistory();
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const[title, setTitle] = useState("");
    const handleBlur = (e) => {
        if (e.target.name == "date")
        {
            setDate(e.target.value);
        }
        if (e.target.name == "description")
        {
            setDescription(e.target.value);
        }
        if (e.target.name == "title")
        {
            setTitle(e.target.value);
        }
    }

    const handleSubmit = () => {
        const newEvent = {
             id: id,
            activity: title,
            image: 'extraVolunteer.png',
             color: color,
            date: date,
            description: description,

        }
        fetch('https://arcane-sea-81667.herokuapp.com/addEvent', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newEvent)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        localStorage.setItem("color",color);
        localStorage.setItem("id",id);
        history.push('/home');
        
    }
    return (
        <body>
            <SideNav></SideNav>
            <h3 className = "addEvent">AddEvent</h3>
            <div className = "addEventArea">
                <div className = "row addEventCard">
                    <div className = "col-md-6">
                        <p>Event Title</p>
                        <input type = "text" placeholder="Event Title" name = "title" onBlur = {handleBlur}></input>
                    </div>
                    <div className = "col-md-6">
                        <p>Event Date</p>
                        <input type = "date" placeholder="Event Date" name = "date" onBlur = {handleBlur}></input>
                    </div>
                    <div className = "col-md-6">
                        <p>Description</p>
                        <textarea className = "textArea" name = "description" onBlur = {handleBlur}></textarea>
                    </div>
                    <div className = "col-md-6">
                        <p>Banner</p>
                        <button><img src = {cloud}/> Upload image</button>
                    </div>
                </div>
                <div className = "d-flex justify-content-end submit-btn"> <button className = "btn btn-primary" onClick = {handleSubmit}>Submit</button></div>
            </div>
        </body>
    );
};

export default AddEvent;