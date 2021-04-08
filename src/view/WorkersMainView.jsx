import React from 'react';
import image from '../images/user.jpg'
const WorkersMainView = (props) => {
    return (
        <html>
            <body>
                <section>
                    <div className="workersContainer">
                        <div className="workerItemContainer">
                            <div className="top-actions">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-ellipsis-v"></i>
                            </div>
                            <img src={image} alt=""/>
                            <div className="workerInfo">
                                <p><strong>Name:</strong> Pranav Honmode</p>
                                <p><strong>Designation:</strong> Software Engineer</p>
                                <p>Exp: 2 Years</p>
                            </div>
                        </div>
                    </div>
                </section>
            </body>
        </html>
    )
}

export default WorkersMainView;