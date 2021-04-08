import React, { useState } from 'react';
import image from '../images/user.jpg'
const WorkerItemContainer = (props) => {
    const [isStar, setIsStar] = useState(false);
    const handleActiveStar = () => {
        isStar ? setIsStar(false) : setIsStar(true);
    }
    return (
        <div className="workerItemContainer">
            <div className="top-actions">
                {
                    isStar
                        ?
                        <i onClick={handleActiveStar} class="fas fa-star active-star"></i>
                        :
                        <i onClick={handleActiveStar} class="far fa-star"></i>
                }
                <i class="fas fa-ellipsis-v"></i>
            </div>
            <img src={image} alt="" />
            <div className="workerInfo">
                <p><strong>Name:</strong> {props.name}</p>
                <p><strong>Designation:</strong> {props.designation}</p>
                <p><strong>Exp:</strong> {props.experience}</p>
            </div>
        </div>
    )
}

export default WorkerItemContainer;