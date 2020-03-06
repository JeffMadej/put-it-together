import React from 'react';


const PersonCard = ({firstName, lastName, age, hairColor, idx, handleAgeClick}) => {
    const style={
        border: '1px solid black'
    }
    return(
        <div style={style} className="card col-5 mx-auto">
            <h2>{lastName}, {firstName}</h2>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
            <button 
                className="btn-btn-outline-warning btn-dark col-3 mx-auto"
                onClick={(e) => handleAgeClick(e,idx)}
                >Birthday Button {firstName}</button>
        </div>
    )

}


export default PersonCard;