import React from 'react';
import fakeData from '../../fakeData';

const AddFakeData = () => {
    const handleFakeData = () => {
        fetch('https://arcane-sea-81667.herokuapp.com/addFakeData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(fakeData)
        }) 
    }
    return (
        <div>
            <button onClick= {handleFakeData}>Add fake data</button>
        </div>
    );
};

export default AddFakeData;