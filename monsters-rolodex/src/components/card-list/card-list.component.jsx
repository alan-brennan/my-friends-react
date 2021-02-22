import React from 'react';
import Card from '../card/card.component';
import './card-list.styles.css';

export const CardList = (props) => {
        //console.log(props.users[0]);
        const card = props.users.map((user) => <Card key={user.id} user={user}/>);
        return(
            
        <div className='card-list'> 
           {card}
        </div>
        )};
