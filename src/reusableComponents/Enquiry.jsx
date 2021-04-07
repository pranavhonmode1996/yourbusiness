import React, { useState } from 'react';
import profile from '../images/user.jpg';
import { EnquiryItems } from '../imports/Imports';
import FilterModal from '../modals/FilterModal';
const Enquiry = (props) => {
    return (
        <div>
            <section>
                <div className="enquiryContainer">
                    <div className="enquiryFilters">
                        <input type="text" placeholder="Search by user name" />
                    </div>
                    <div className="enquiry-item">
                        <EnquiryItems />
                        <EnquiryItems />
                        <EnquiryItems />
                        <EnquiryItems />
                        <EnquiryItems />
                        <EnquiryItems />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Enquiry;