import React from 'react';
import { WorkersMainView, WorkerOrSeller } from '../imports/Imports';
import { useHistory } from 'react-router-dom';
const MainView = () => {
    const history = useHistory();
    const handleWorker = () => {
        history.push('/workersMV');
    }
    const handleSeller = () => {
        history.push('/sellersMV');
    }
    return (
        <html>
            <body>
                <section>
                    <div className="s-w-container">
                        <WorkerOrSeller icon="fas fa-people-carry" name="Hire Worker" press={handleWorker} />
                        <WorkerOrSeller icon="fas fa-people-carry" name="Want To Buy" press={handleSeller} />
                    </div>
                </section>
            </body>
        </html>
    )
}

export default MainView;