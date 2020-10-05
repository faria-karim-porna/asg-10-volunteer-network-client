import React from 'react';
import './TableHead.css';
const TableHead = () => {
    return (
    <div className="table-head-design d-flex justify-content-center">
        <div className  = "row table-head">
            <div className = "col-md-2">
                <h6>Name</h6>
            </div>
            <div className = "col-md-3">
                <h6>Email ID</h6>
            </div>
            <div className = "col-md-3">
                <h6>Registrating date</h6>
            </div>
            <div className = "col-md-2">
                <h6>Volunteer List</h6>
            </div>
            <div className = "col-md-2">
                <h6>Action</h6>
            </div>
        </div>
    </div>
    );
};

export default TableHead;