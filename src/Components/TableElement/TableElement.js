import React from 'react';
import './TableElement.css';
import trash from '../../logos/trash-2 9.png';
const TableElement = (props) => {
    const {activity, userName, email, date, _id} = props.user;
    const handleUserDelete = () => {
        const id = _id;
        fetch(`https://arcane-sea-81667.herokuapp.com/deleteAllUsers/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            console.log('deleted')
        })
        window.location.reload(false);
    }
    return (
        <div className="table-element-design d-flex justify-content-center">
        <div className  = "row table-element">
            <div className = "col">
                <h6>{userName}</h6>
            </div>
            <div className = "col">
            <h6>{email}</h6>
            </div>
            <div className = "col-md-2">
            <h6>{date}</h6>
            </div>
            <div className = "col-md-2">
            <h6>{activity}</h6>
            </div>
            <div className = "col column">
            <img src = {trash} className = "table-element-btn" onClick = {handleUserDelete}/>
            </div>
        </div>
    </div>
    );
};

export default TableElement;