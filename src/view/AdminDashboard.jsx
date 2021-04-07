import React from 'react';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import { AdminMenuItem, Enquiry, Order } from '../imports/Imports';
const AdminDashboard = (props) => {
    return (
        <html>
            <body>
                <section>
                    <div className="container">
                        <div className="adminMenu">
                            <Link className="admin-link" to={props.match.url}><AdminMenuItem icon="fas fa-compass" name="Enquiries" /></Link>
                            <Link className="admin-link" to={props.match.url+"/order"}><AdminMenuItem icon="fas fa-compass" name="Orders" /></Link>
                            <Link className="admin-link"><AdminMenuItem icon="fas fa-compass" name="Executed" /></Link>
                            <Link className="admin-link"><AdminMenuItem icon="fas fa-compass" name="Feedbacks" /></Link>
                        </div>
                        <div>
                            <>
                                <Switch>
                                    <Route exact path={props.match.url} component={Enquiry} />
                                    <Route exact path={props.match.url+"/order"} component={Order} />
                                </Switch>
                            </>
                        </div>
                    </div>
                </section>
            </body>
        </html>
    )
}

export default AdminDashboard;