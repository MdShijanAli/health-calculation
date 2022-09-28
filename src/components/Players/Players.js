import React, { useEffect, useState } from 'react';
import './Players.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import Player from '../Player/Player';


const Players = () => {
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])
    console.log(players);
    return (
        <div>

            <div className="players-container">
                <div className='title'>
                    <FontAwesomeIcon className='icon-title' icon={faDumbbell}></FontAwesomeIcon><h1>Make Your Good Health</h1>
                </div>
                <h2> Select Today's Exercise</h2>

                <div className="players-box">
                    {
                        players.map(player => <Player
                            player={player}
                        ></Player>)
                    }
                </div>


            </div>
        </div>
    );
};

export default Players;