import React from 'react';
import './card.styles.css'

const Card = (props) => {
    console.log(props);
    return (
    <div className = 'card-container'>
        <img alt="friend" src={`https://robohash.org/${props.user.id}?set=set3`} />
        <h1> {props.user.name}</h1>
    </div>)
};

export default Card;