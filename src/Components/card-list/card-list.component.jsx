import React from 'react';
import { Card } from '../card/card.component';
import './card-list.style.css';

export const CardList = props => (
    <div className='card-list'>
         {/* child component of props */}
         {props.monsters.map(monster => (
    <Card key={monster.id}  monster={monster }/>
    ))}  
        </div>
);