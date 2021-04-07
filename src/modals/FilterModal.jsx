import React from 'react';
import profile from '../images/user.jpg';
import { EnquiryItems } from '../imports/Imports';
const FilterModal = (props) => {
    return (
        <div className="filterContainer">
            <div className="filterSection">
                <div>
                    <input type="checkbox" />
                    <span>Enquiry By Date</span>
                </div>
                <div>
                    <input type="checkbox" />
                    <span>Enquiry By Date</span>
                </div>
                <div>
                    <input type="checkbox" />
                    <span>Enquiry By Date</span>
                </div>
                <div>
                    <input type="checkbox" />
                    <span>Enquiry By Date</span>
                </div>
                <div>
                    <input type="checkbox" />
                    <span>Enquiry By Date</span>
                </div>
            </div>
        </div>
    )
}

export default FilterModal;