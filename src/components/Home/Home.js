import React from 'react';
import Details from '../Details/Details';
import Players from '../Players/Players';
import './Home.css';

const Home = () => {
    return (
        <div>
            <div className="home-container">
                <div className="left-side">
                    <Players></Players>
                </div>
                <div className="right-side">
                    <Details></Details>
                </div>
            </div>
        </div>
    );
};

export default Home;