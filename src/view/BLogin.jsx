import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import userImage from '../images/user.jpg';
const BLogin = () => {
    const [loginAs, setLoginAs] = useState(false);
    const handleLogin = (e) => {
        setLoginAs(e.target.value);
    }
    return (
        <html>
            <body>
                <div className="container">
                    <div className="LoginContainer">
                        <div className="loginAs">
                            <span>User</span>
                            <input type="radio" checked={loginAs === 'user'} value="user" onClick={handleLogin} />
                            <span>Worker</span>
                            <input type="radio" checked={loginAs === 'worker'} value="worker" onClick={handleLogin} />
                            <span>Seller</span>
                            <input type="radio" checked={loginAs === 'seller'} value="seller" onClick={handleLogin} />
                        </div>
                        <img src={userImage} alt="" />

                        <label htmlFor="">Email Id</label>
                        <input type="text" required />

                        <label htmlFor="">Password</label>
                        <input type="password" required />

                        <span>Forgot password ?</span>
                        <button>Login</button>
                        <span>Create account?<strong><Link className="link" to="/businessSignUp">SignUp</Link></strong></span>
                    </div>
                </div>
            </body>
        </html>
    )
}

export default BLogin;