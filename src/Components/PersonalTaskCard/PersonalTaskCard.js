import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import image from '../../images/childSupport.png';
const PersonalTaskCard = (props) => {
    const history = useHistory();
    const {userName, date, _id, activity} = props.task;
    const fullDate = new Date(date);
    var dateParts = fullDate.toString().split(' ');
    var month = dateParts[1];
    var dates = dateParts[2];
    var year = dateParts[3];
   

    const [image, setImage] = useState("");
    useEffect(() => {
        fetch('https://arcane-sea-81667.herokuapp.com/homeData?activity='+activity)
        .then(res => res.json())
        .then(data => setImage(data[0].image))
    },[image])
     const handleDelete = () => {
         const id = _id;
         fetch(`https://arcane-sea-81667.herokuapp.com/deletePersonalTask/${id}`, {
             method: 'DELETE'
         })
         .then(res => res.json())
         .then(result => {
             console.log('deleted')
         })
         //history.push("/personalTask")
         //window.setTimeout(function, milliseconds);
          window.location.reload(false);
     }
    return (
        <div className = "col-md-5 card pt-3 pb-3">
                        <div className = "row">
                        <div className = "col-md-4">
                            <img src ={image && require(`../../images/${image}`)} className = "img-fluid card-image"/>
                        </div>
                        <div className = "col-md-8">
                            <h5>{activity}</h5>
                             <h6>{dates} {month.toLowerCase()}, {year}</h6>
                            <div className = "card-button d-flex align-items-end justify-content-end">
                            <button onClick = {handleDelete}>Cancel</button>
                            </div>
                        </div>
                        </div>
        </div>
    );
};

export default PersonalTaskCard;