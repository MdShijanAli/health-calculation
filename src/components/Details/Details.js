
import './Details.css';
import image from '../../../src/shijan.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToDb, getStoredCart } from '../../Utilities/fakedb';
import { useEffect } from 'react';






const Details = ({ time }) => {



    const notify = () => {
        toast('Your Data Has Benn Submitted!!', { position: toast.POSITION.TOP_CENTER })
    }



    // console.log(time);

    let total = 0;

    for (const pro of time) {
        // console.log(pro);
        total = total + pro.time;
    }


    const handleBtn = (breakTime) => {
        const breakeTime = document.getElementById(breakTime);
        const showBreakeTime = document.getElementById('showBreakTime')
        const value = breakeTime.innerText;
        showBreakeTime.innerText = value;

        // console.log(value);
        addToDb(value);



    }
    useEffect(() => {

        const storedCart = getStoredCart();
        if (storedCart) {
            console.log(storedCart);

        }

    }, []);


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
                        <h1>78<span className='small'>kg</span></h1>
                        <p>Weight</p>
                    </div>
                    <div>
                        <h1>5.9</h1>
                        <p>Height</p>
                    </div>
                    <div>
                        <h1>22<span className='small'>yrs</span></h1>
                        <p>Age</p>
                    </div>
                </div>

                <h3>Add A Break</h3>

                <div className='breakTime-container'>
                    <button onClick={() => { handleBtn('breakTime1') }} className='btn'><span id='breakTime1'>10</span>s</button>
                    <button onClick={() => { handleBtn('breakTime2') }} className='btn'><span id='breakTime2'>20</span>s</button>
                    <button onClick={() => { handleBtn('breakTime3') }} className='btn'><span id='breakTime3'>30</span>s</button>
                    <button onClick={() => { handleBtn('breakTime4') }} className='btn'><span id='breakTime4'>40</span>s</button>
                    <button onClick={() => { handleBtn('breakTime5') }} className='btn'><span id='breakTime5'>50</span>s</button>

                </div>

                <h3>Exercise Details</h3>

                <div className='exercise-details'>
                    <h4>Exercise time</h4>
                    <p>{total} seconds</p>
                </div>
                <div className='exercise-details'>
                    <h4>Break time</h4>
                    <p><span id='showBreakTime'>00</span> seconds</p>
                </div>

                <button onClick={notify} className='activity-completed-btn'>Activity Completed</button>
                <ToastContainer></ToastContainer>

            </div>
        </div>
    );
};

export default Details;