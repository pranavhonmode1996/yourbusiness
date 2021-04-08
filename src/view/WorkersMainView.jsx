import React from 'react';
import WorkerItemContainer from '../reusableComponents/WorkerItemContainer';
const WorkersMainView = (props) => {
    return (
        <html>
            <body>
                <section>
                    <div className="workersContainer">
                        <WorkerItemContainer name="Pranav Honmode" designation="Software Engineer" experience="2 Years" />
                    </div>
                </section>
            </body>
        </html>
    )
}

export default WorkersMainView;