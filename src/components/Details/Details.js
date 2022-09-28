import React from 'react';
import './Details.css';
import image from '../../../src/shijan.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';


const Details = () => {
    return (
        <div>
            <div className="details-container">

                <div className='img-box'>
                    <img src={image} alt="" />
                    <div className='img-box-text'>
                        <h3>Md Shijan Ali</h3>
                        <p><FontAwesomeIcon className='icon' icon={faLocationDot} />
                            Dinajpur, Bangladesh</p>
                    </div>
                </div>

                <div className="info-box">
                    <div>
                        <h1>75<span className='small'>kg</span></h1>
                        <p>Weight</p>
                    </div>
                    <div>
                        <h1>6.5</h1>
                        <p>Height</p>
                    </div>
                    <div>
                        <h1>25<span className='small'>yrs</span></h1>
                        <p>Age</p>
                    </div>
                </div>

                <h3>Add A Break</h3>

                <div className='breakTime-container'>
                    <button className='btn'><span>10</span>s</button>
                    <button className='btn'><span>20</span>s</button>
                    <button className='btn'><span>30</span>s</button>
                    <button className='btn'><span>40</span>s</button>
                    <button className='btn'><span>50</span>s</button>

                </div>

                <h3>Exercise Details</h3>

                <div className='exercise-details'>
                    <h4>Exercise time</h4>
                    <p><span>200</span> seconds</p>
                </div>
                <div className='exercise-details'>
                    <h4>Break time</h4>
                    <p><span>15</span> seconds</p>
                </div>

                <button className='activity-completed-btn'>Activity Completed</button>

            </div>
        </div>
    );
};

export default Details;