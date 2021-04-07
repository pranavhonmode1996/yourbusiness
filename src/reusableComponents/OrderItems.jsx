import React from 'react';
const OrderItems = (props) => {
    return (
        <div>
            <div className="enquiry-items">
                <div className="enquiryImageContainer">
                    <p><strong>Name</strong></p>
                    <span>Pranav Honmode</span>
                    <p><strong>From</strong></p>
                    <p>Shrirampur</p>
                </div>
                <div className="enquiryDateAndTime">
                    <div>
                        <p><strong>Enquiry Date</strong></p>
                        <p>04-08-2021</p>
                    </div>
                    <div>
                        <p><strong>Day</strong></p>
                        <p>Monday</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderItems;