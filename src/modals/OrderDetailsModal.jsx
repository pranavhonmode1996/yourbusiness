import React, { useState } from 'react';
import image from '../images/user.jpg';
const OrderDetailsModal = (props) => {
    const [accept, setAccept] = useState(false);
    const handleAccept = () => {
        setAccept(true);
    }
    const handleDecline = () => {
        setAccept(false);
    }
    return (
        <div className="orderContainer">
            <div className="orderSection">
                <span style={{ fontSize: 20, float: 'right', cursor: 'pointer' }} onClick={() => props.closeModal(false)}>X</span>
                <div>
                    <div className="orderImageSection">
                        <img src={image} alt="" />
                        <p>Pranav Honmode</p>
                        <p>Shrirampur</p>
                    </div>
                    <div>
                        <p>Details</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate dignissimos pariatur consectetur quis nesciunt error iusto tenetur? Repellendus quae ratione modi omnis eligendi! Dignissimos consequuntur saepe soluta aspernatur expedita qui!</p>
                        <div className="accAndDeclBtn">
                            <button onClick={handleAccept}>Accept</button>
                            <button onClick={handleDecline} disabled={!accept}>Decline</button>
                        </div>
                        {accept && <div style={{
                            display: 'flex',
                            justifyContent: 'space-between', marginTop: 10
                        }}>
                            <div>
                                <p><strong>Contact Number</strong></p>
                                <span>8668763394</span>
                            </div>
                            <div>
                                <p><strong>Address</strong></p>
                                <p>Shrirampur howsing society work no 1 Adarshnager</p>
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default OrderDetailsModal;