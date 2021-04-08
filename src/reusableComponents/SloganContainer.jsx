import React from 'react';
import Image from '../images/background.png';
import {useHistory} from 'react-router-dom';
const SloganContainer = () => {
    const history = useHistory();
    const handleNavigation = () => {
        history.push('/businessLogin');
    }
    const handleMainView = () => {
        history.push('/mainView');
    }
    return (
        <div className="sloganContainer">
            <div className="info">
                <span>
                    Start your business online <br /> with <strong>Amezona</strong>
                </span><br />
                <button onClick={handleNavigation}>Start Business</button>
                <button onClick={handleMainView}>Read More</button>
            </div>
            <div className="image">
                <img src={Image} alt="" />
            </div>
        </div>
    )
}

export default SloganContainer;