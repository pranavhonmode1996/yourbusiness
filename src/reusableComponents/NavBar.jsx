import React from 'react';
import { NavLink } from 'react-router-dom';
const NavBar = () => {
    return (
        <html>
            <body>
                <section>
                    <div className="container">
                        <div className="nav-bar">
                            <div className="nav-header">
                                <h4>navbrand</h4>
                            </div>
                            <ul>
                                <NavLink activeClassName="link" className="link" to=""><li>Home</li></NavLink>
                                <NavLink className="link" to=""><li>About</li></NavLink>
                                <NavLink className="link" to={`/adminDashboard/${2}`}><li>Contact</li></NavLink>
                                <NavLink className="link" to="/businessLogin"><li>Feedback</li></NavLink>
                            </ul>
                        </div>
                    </div>
                </section>
            </body>
        </html>
    )
}

export default NavBar;