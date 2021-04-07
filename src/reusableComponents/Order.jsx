import React, { useState } from 'react';
import { OrderItems } from '../imports/Imports';
import OrderDetailsModal from '../modals/OrderDetailsModal';
const Order = (props) => {
    const [isModal, setIsModal] = useState(false);
    const handleOpenModal = () => {
        setIsModal(true);
    }
    const handleCloseModal = (close) => {
        setIsModal(close);
    }
    return (
        <div>
            <section>
                <div className="enquiryContainer">
                    <div className="enquiryFilters">
                        <input type="text" placeholder="Search by user name" />
                    </div>
                    <div className="enquiry-item">
                        <div onClick={handleOpenModal}>
                            <OrderItems />
                        </div>
                        <OrderItems />
                        <OrderItems />
                        <OrderItems />
                        <OrderItems />
                        <OrderItems />
                    </div>
                    <div>
                        {isModal && <OrderDetailsModal closeModal={(close) => {handleCloseModal(close)}} />}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Order;