
import './Details.css';
import image from '../../../src/shijan.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';


const Details = () => {



    const handleBtn1 = () => {
        const breakeTime = document.getElementById('breakTime1');
        const showBreakeTime = document.getElementById('showBreakTime')
        const value = breakeTime.innerText;
        showBreakeTime.innerText = value;
        console.log(value);
    }
    const handleBtn2 = () => {
        const breakeTime = document.getElementById('breakTime2');
        const showBreakeTime = document.getElementById('showBreakTime')
        const value = breakeTime.innerText;
        showBreakeTime.innerText = value;

        console.log(value);
    }
    const handleBtn3 = () => {
        const breakeTime = document.getElementById('breakTime3');
        const showBreakeTime = document.getElementById('showBreakTime')
        const value = breakeTime.innerText;
        showBreakeTime.innerText = value;

        console.log(value);
    }
    const handleBtn4 = () => {
        const breakeTime = document.getElementById('breakTime4');
        const showBreakeTime = document.getElementById('showBreakTime')
        const value = breakeTime.innerText;
        showBreakeTime.innerText = value;

        console.log(value);
    }
    const handleBtn5 = () => {
        const breakeTime = document.getElementById('breakTime5');
        const showBreakeTime = document.getElementById('showBreakTime')
        const value = breakeTime.innerText;
        showBreakeTime.innerText = value;

        console.log(value);
    }
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
                    <button onClick={handleBtn1} className='btn'><span id='breakTime1'>10</span>s</button>
                    <button onClick={handleBtn2} className='btn'><span id='breakTime2'>20</span>s</button>
                    <button onClick={handleBtn3} className='btn'><span id='breakTime3'>30</span>s</button>
                    <button onClick={handleBtn4} className='btn'><span id='breakTime4'>40</span>s</button>
                    <button onClick={handleBtn5} className='btn'><span id='breakTime5'>50</span>s</button>

                </div>

                <h3>Exercise Details</h3>

                <div className='exercise-details'>
                    <h4>Exercise time</h4>
                    <p><span>200</span> seconds</p>
                </div>
                <div className='exercise-details'>
                    <h4>Break time</h4>
                    <p><span id='showBreakTime'>15</span> seconds</p>
                </div>

                <button className='activity-completed-btn'>Activity Completed</button>

            </div>
        </div>
    );
};

export default Details;