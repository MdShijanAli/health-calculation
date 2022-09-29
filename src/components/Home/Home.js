import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';

import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import Player from '../Player/Player';
import Blog from '../Blog/Blog';

const Home = () => {
    const [players, setPlayers] = useState([]);
    const [time, setTime] = useState([]);

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])

    // console.log(players);

    const handleAddToList = (player) => {
        // console.log(player);

        const newTime = [...time, player];
        setTime(newTime);

    }
    // console.log(newTime);
    return (
        <div>
            <div className="home-container">
                <div className="left-side">
                    <div className='title'>
                        <FontAwesomeIcon className='icon-title' icon={faDumbbell}></FontAwesomeIcon><h1>Make Your Good Health</h1>
                    </div>
                    <h2 className='center'> Select Today's Exercise</h2>

                    <div className='players-box'>
                        {
                            players.map(player => <Player
                                player={player}
                                key={player.id}
                                handleAddToList={handleAddToList}
                            ></Player>)
                        }
                    </div>


                    <Blog></Blog>


                </div>

                <div className="right-side">

                    <Details
                        time={time}
                    ></Details>
                </div>
            </div>
        </div>
    );
};

export default Home;