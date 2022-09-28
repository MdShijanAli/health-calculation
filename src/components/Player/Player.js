import React from 'react';
import './Player.css'

const Player = (props) => {
    const { name, age, description, picture, time } = props.player;
    return (
        <div>
            <div className='single-player-box'>
                <img src={picture} alt="" />
                <h3>Name: {name}</h3>
                <p>{description.slice(0, 100)}</p>
                <h5>For Age: {age}</h5>
                <h5>Time required: {time}</h5>
                <button className='add-to-list-btn'>Add to List</button>
            </div>
        </div>
    );
};

export default Player;