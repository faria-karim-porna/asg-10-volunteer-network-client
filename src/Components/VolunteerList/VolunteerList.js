import React, { useEffect, useState } from 'react';
import SideNav from '../SideNav/SideNav';
import TableElement from '../TableElement/TableElement';
import TableHead from '../TableHead/TableHead';
import './VolunteerList.css';
const VolunteerList = () => {
    const [allUserInfo, setAllUserInfo] = useState([]);
    useEffect(() => {
        fetch('https://arcane-sea-81667.herokuapp.com/allUsers')
        .then(res => res.json())
        .then(data => setAllUserInfo(data))
    },[allUserInfo])
    return (
        <body>
            <SideNav></SideNav>
            <h3 className = "volunteerList">Volunteer register list</h3>
            <div className = "main">
                <div className = "table-design justify-content-center">
                <TableHead></TableHead>
                {
                    allUserInfo.map( user => <TableElement user = {user}></TableElement>)
                }
                </div>
            </div>
        </body>
    );
};

export default VolunteerList;